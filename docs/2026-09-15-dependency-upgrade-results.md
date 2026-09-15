# 依赖升级与 Hello 联调验收

实施日期：2026-09-15（Asia/Shanghai）。依据 [升级评估](2026-09-14-dependency-upgrade-assessment.md) 实施，并重新查询官方发布信息。Python 保持原有 **3.13.3**；PostgreSQL 仅修改配置，未启动实例或迁移数据。

## 1. 已落地版本

| 范围 | 最终版本 |
| --- | --- |
| Python 解释器 | 3.13.3；新增 `.python-version` 选择 3.13 系列，`requires-python` 保持原声明 |
| Python 直接依赖 | grpcio 1.84.0、SQLAlchemy 2.0.52、greenlet 3.5.6、Alembic 1.20.0、asyncpg 0.31.0、APScheduler 3.11.3、protobuf 7.36.1、googleapis-common-protos 1.75.3 |
| Python 传递依赖 | Mako 1.4.1、MarkupSafe 3.0.3、typing-extensions 4.16.0、tzlocal 5.4.4、tzdata 2026.4（Windows 条件依赖） |
| Go 工具链 | 1.27.1，本机及两个 Go 模块已统一 |
| Go 依赖 | grpc-gateway 2.30.0、gRPC 1.83.2、protobuf 1.36.12、x/net 0.59.0、x/sys 0.48.0、x/text 0.42.0 |
| Go genproto api/rpc | `v0.0.0-20260911204522-f61a6ca850bd` |
| 本机工具 | uv 0.12.13、Buf 1.73.0 |
| CI Actions | checkout 7.0.1、setup-python 7.0.0、setup-go 7.0.0、setup-uv 10.1.0、buf-action 1.4.0 |
| PostgreSQL 配置 | `postgres:18.6`，新目录 `postgres-data-18/` 挂载 `/var/lib/postgresql` |

greenlet 在昨日评估后发布了 3.5.6，本次使用新版本。asyncpg 和 MarkupSafe 已是最新稳定版，保持不变。未启用预发布版本。Python 依赖及兼容范围见 [pyproject.toml](../pyproject.toml)，全部锁定结果见 [uv.lock](../uv.lock)。

## 2. 生成链路与启动配置

通过 BSR 官方 `PluginCurationService/GetLatestCuratedPlugin` 接口核对六个生成器，固定在 [buf.gen.yaml](../buf.gen.yaml)：

| 生成器 | 版本 | revision |
| --- | --- | --- |
| protocolbuffers/go | v1.36.12 | 2 |
| grpc/go | v1.6.2 | 1 |
| grpc-ecosystem/gateway | v2.30.0 | 3 |
| protocolbuffers/python | v36.1 | 1 |
| grpc/python | v1.83.1 | 3 |
| community/google-gnostic-openapi | v0.7.1 | 1 |

Python protobuf 生成器 v36.1 生成 7.36.1 代码；BSR Python gRPC 生成器的最新版本是 1.83.1，其运行库最低要求由当前 grpcio 1.84.0 满足。生成器与运行库的版本号分别核对。

`googleapis/googleapis` schema 固定到 `c17df5b2beca46928cc87d5656bd5343`。Python、Go、OpenAPI 均已重新生成。`make proto` 从 gateway 的锁定依赖重建 `gen/go/go.mod` 和 `go.sum`，无需在空目录重新选择最新 Go 依赖。

启动入口及 Makefile 使用 PATH 中的 Go，移除机器专有路径和强制 `GOTOOLCHAIN=local`，运行时使用 `-mod=readonly`。`scripts/start_project.sh` 默认不设置数据库 DSN，Hello 可独立启动。业务代码与 Hello proto 契约未改动。

CI 已更新为：安装固定工具版本、Buf lint、清空并重建生成物、检查生成一致性、构建 gateway、运行完整测试。Buf Action 仅用于安装工具。

## 3. 实际验收结果

环境为 macOS ARM64、Python 3.13.3、Go 1.27.1、uv 0.12.13、Buf 1.73.0。

| 验证 | 结果 |
| --- | --- |
| 原依赖基线测试 | 2/2 通过 |
| 新 lock 解算与 `uv sync --frozen` | 通过 |
| Buf lint/build | 通过 |
| 清空生成目录后 `make proto` | 15 个生成文件逐字节一致，包括两个生成 Go 模块文件 |
| `make gateway-build` | 通过，二进制实际链接模块已核对 |
| 两个 Go 模块 `go mod verify` / `go test ./...` | 通过；目前没有 Go 单元测试，`go test` 验证包构建 |
| 最终完整 unittest | **7/7 通过**，含真实 `cmd/main.py` 启动的 HTTP/gRPC 测试 |
| Python 编译、shell 语法、Compose 配置 | 通过 |
| protobuf 导入路径及 descriptor | 通过；Google API annotations 来自本地生成代码，两个 Hello 导入名指向同一 descriptor |
| Injector/async session/greenlet | 对象构造、异步桥接和关闭通过，未连接数据库 |
| Alembic/Mako | 原项目模板生成临时迁移并编译通过，未执行数据库迁移 |

[新增集成测试](../tests/test_hello_transport.py) 覆盖默认值、空字符串、命名请求、中文与特殊字符、10 路 HTTP 并发、HTTP 404、gRPC UNIMPLEMENTED。测试使用临时端口，并清理其启动的进程。

最终另行启动项目手动验收。本机 8000 已由 OrbStack 占用，使用 HTTP **18000**、gRPC **50051**：

```bash
curl -fsS -i 'http://127.0.0.1:18000/v1/hello?name=Codex'
# HTTP/1.1 200 OK
# {"message":"Hello, Codex!"}

uv run --locked python cmd/grpc_client_demo.py
# Response received: Hello, Antigravity!
```

HTTP 响应包含 `Grpc-Metadata-Content-Type: application/grpc`；请求实际经过 Go grpc-gateway 转发至 Python Hello gRPC 服务。

## 4. 复现

```bash
uv sync --frozen
make proto
uv run --locked python -m unittest discover -s tests -p 'test_*.py' -v

# 本机 8000 被占用时使用以下启动方式；无需数据库。
POSTGRES_DSN= GRPC_HOST=127.0.0.1 \
GATEWAY_HTTP_ADDR=127.0.0.1:18000 \
uv run --locked python cmd/main.py
```

真实 PostgreSQL 18、数据库事务/迁移、Windows 及远程 GitHub Actions 运行不在此次实际验收结果内。当前按要求只改 PostgreSQL 配置；原 `postgres-data/` 保留。

官方核对来源：[PyPI](https://pypi.org/)、[Go 发布](https://go.dev/dl/)、[Buf 1.73.0](https://github.com/bufbuild/buf/releases/tag/v1.73.0)、[Buf 生成器固定方式](https://buf.build/docs/bsr/remote-plugins/usage/)、[PostgreSQL 镜像目录说明](https://github.com/docker-library/docs/blob/master/postgres/README.md#pgdata)。各 Actions 的发行链接见前述升级评估。
