# 全部依赖升级至最新稳定版：影响评估

评估日期：2026-09-14。目标为官方已发布、未撤回的最新稳定版。`uv.lock` 和两个 `go.mod` 仅用于确定当前基线，不作为目标版本。正式实施前应重新查询版本；预发布分支单独讨论。

## 1. 结论

**当前 Hello 骨架的 Python 依赖整体升级可行，暂未发现必须修改业务代码的稳定版 API 迁移。主要工作在 Proto 生成链路、Go 工具链、迁移验收和 CI；若包含 PostgreSQL 大版本升级，则必须单独安排数据迁移。**

本次在 `/tmp` 创建了当前依赖与最新依赖两个独立环境，运行现有测试及兼容性冒烟；另在源码副本中更新 Go 依赖、重新生成协议、构建 gateway，并验证 HTTP → Go gateway → Python gRPC。原项目的依赖声明、锁文件、业务代码和生成代码均未修改。

| 分类 | 范围 | 实际影响 |
| --- | --- | --- |
| 可低成本升级 | SQLAlchemy 2.0、greenlet、APScheduler 3.11、common-protos 及小型传递依赖 | 当前用法未发现 API 改写要求；仍需针对性验收。 |
| 已经最新 | asyncpg、MarkupSafe | 无需更换库或追预发布版。 |
| 需成组升级 | grpcio、protobuf、远程生成器、Go gateway | 生成代码与运行库必须兼容，已复现新代码搭配旧 protobuf 导入失败。 |
| 有兼容性门槛 | Go x 系列库、CI Actions、Alembic | Go 至少 1.26；Actions 跨多个 major；Alembic 需核对迁移行为。 |
| 明确的大版本迁移 | PostgreSQL 16 → 18.6 | 集群数据迁移，以及 Docker 数据卷目录变化。 |
| 未来另评 | SQLAlchemy 2.1、APScheduler 4.0 | 仍为预发布，其 breaking changes 不是本次稳定版升级必经项。 |

“低成本”不等于已完成生产验收。项目目前只有一个 Hello RPC、两个 usecase 测试，ORM 只有 `Base`，调度器未使用；业务规模增加后需重新评估。

## 2. Python 直接依赖

目标来自 PyPI JSON 元数据，已检查非预发布且存在未撤回的发行文件。

| 依赖 | 声明 | 当前 lock | 最新稳定版 | 项目影响 |
| --- | --- | --- | --- | --- |
| [grpcio](https://pypi.org/project/grpcio/) | `>=1.74.0` | 1.78.0 | **1.84.0** | 中低风险。使用 `grpc.aio`、unary RPC、拦截器、`context.abort`。新版成功调用、默认值和错误映射均通过；底层传输、AsyncIO 注册方法、Metadata、StatusCode 有变化，仍需并发/取消/超时/关闭测试。 |
| [SQLAlchemy](https://pypi.org/project/SQLAlchemy/) | `>=2.0.43` | 2.0.48 | **2.0.52** | 低风险，仍为 2.0 系列。项目已用 `DeclarativeBase`、`create_async_engine`、`async_sessionmaker`，没有 1.x API 迁移包袱；当前没有实体读写业务，需补真实事务验证。 |
| [greenlet](https://pypi.org/project/greenlet/) | `>=3.2.4` | 3.3.2 | **3.5.5** | 低风险，经 SQLAlchemy 异步桥接使用。上游有 Python 下限、解释器关闭行为和平台二进制修复；项目 Python ≥3.13，未使用相关关闭期 API。保留显式依赖或用 SQLAlchemy asyncio extra 表达需要。 |
| [Alembic](https://pypi.org/project/alembic/) | `>=1.16.0` | 1.18.4 | **1.20.0** | 中风险，主要是迁移验收。1.20 移除 SQLAlchemy 1.4 支持，本项目满足 ≥2.0。1.19 新增 CHECK 按名称检测，1.19.2 又改为默认关闭；不能把中间版本行为当作目标行为。原模板生成/编译已通过，数据库迁移未执行。 |
| [asyncpg](https://pypi.org/project/asyncpg/) | `>=0.30.0` | 0.31.0 | **0.31.0** | 已最新。部署环境若实际仍为 0.30，需按真实安装版本另比较；声明下限不等于实际版本。PostgreSQL 升级仍需驱动联调。 |
| [APScheduler](https://pypi.org/project/APScheduler/) | `>=3.11.0` | 3.11.2 | **3.11.3** | 低风险，没有 import、scheduler、任务或 job store，当前无调度 API 改造。4.0 仍是 alpha。 |
| [protobuf](https://pypi.org/project/protobuf/) | `==7.34.1` | 7.34.1 | **7.36.1** | 必须修改精确固定值。仍是 7.x 内升级；旧生成代码可用新库，新生成代码不能搭配旧库，已复现。需配套更新生成产物。 |
| [googleapis-common-protos](https://pypi.org/project/googleapis-common-protos/) | `>=1.63.0` | 1.74.0 | **1.75.3** | 低风险但与 protobuf 成组验证。要求 `protobuf>=6.33.5,<8.0.0`、Python ≥3.10，目标组合满足；关注本地生成的 `google/api` 与安装包之间的导入路径。 |

实际用法：[依赖声明](../pyproject.toml)、[对象装配/连接池](../internal/conf/injector.py)、[ORM Base](../internal/modules/hello/data/repo/models.py)、[Alembic 环境](../alembic/env.py)、[服务](../internal/modules/hello/service.py)、[错误拦截器](../internal/server/grpc/interceptors/error.py)、[trace 拦截器](../internal/server/grpc/interceptors/trace.py)。

官方变化依据：[gRPC 1.84](https://github.com/grpc/grpc/releases/tag/v1.84.0)、[SQLAlchemy 2.0.52](https://www.sqlalchemy.org/blog/2026/08/11/sqlalchemy-2.0.52-released/)、[greenlet changelog](https://greenlet.readthedocs.io/en/latest/changes.html)、[Alembic changelog](https://alembic.sqlalchemy.org/en/latest/changelog.html)、[common-protos changelog](https://github.com/googleapis/google-cloud-python/blob/main/packages/googleapis-common-protos/CHANGELOG.md)。

### 2.1 全部 Python 传递依赖

当前 lock 除项目自身外共 13 个包：8 个直接依赖、5 个传递依赖。临时项目将八个直接依赖固定为最新稳定版后，解算出的五个传递依赖也全部是最新稳定版，无冲突。

| 依赖 | 当前 → 最新稳定版 | 引入路径 | 影响 |
| --- | --- | --- | --- |
| [Mako](https://pypi.org/project/Mako/) | 1.3.10 → **1.4.1** | Alembic | Python 下限提高至 3.10，不影响项目。模板编译/错误报告有修复；用项目原 `script.py.mako` 实际生成并编译迁移文件，通过。 |
| [MarkupSafe](https://pypi.org/project/MarkupSafe/) | 3.0.3 → **3.0.3** | Mako | 已最新。 |
| [typing-extensions](https://pypi.org/project/typing-extensions/) | 4.15.0 → **4.16.0** | grpcio / SQLAlchemy / Alembic | 低风险，项目无直接依赖其特殊反射行为。 |
| [tzlocal](https://pypi.org/project/tzlocal/) | 5.3.1 → **5.4.4** | APScheduler | Python 下限 3.10，时区配置读取修复；当前未使用调度。未来任务应显式指定 `Asia/Shanghai`。 |
| [tzdata](https://pypi.org/project/tzdata/) | 2025.3 → **2026.4** | tzlocal，仅 Windows 条件安装 | 时区数据变化。需 Windows 实际调度验收；本次 macOS 未安装此条件依赖。 |

来源：[Mako changelog](https://github.com/sqlalchemy/mako/blob/main/doc/build/changelog.rst)、[tzlocal changelog](https://github.com/regebro/tzlocal/blob/master/CHANGES.txt)。未启用的测试/文档 extras 不纳入生产依赖。

### 2.2 声明与解算策略

- 单独 `uv lock --upgrade` 仍遵守 `protobuf==7.34.1`，无法实现全部最新；必须修改声明。
- 其余七项只有下限，允许升级但没有表达验收边界。实施时提升最低版本，并可为兼容边界设置上限，例如 protobuf `<8`、APScheduler `<4`、SQLAlchemy `<2.1`；下一稳定系列发布后重新评估并更新边界。
- 兼容上限用于管理验收范围，不能把当前 lock 当作长期终点。正式升级后仍需提交新 lock，保证复现。
- `grpcio-tools` 不在项目依赖中，当前使用 BSR 远程生成，无需强行新增。若未来转本地生成，最新 1.84.0 要求 `grpcio>=1.84.0`、`protobuf>=7.35.1,<8`，旧 protobuf 精确值会冲突。[官方元数据](https://pypi.org/pypi/grpcio-tools/1.84.0/json)

## 3. Proto：已经复现的兼容错误

[buf.gen.yaml](../buf.gen.yaml) 六个远程插件都没有版本/revision；[buf.lock](../buf.lock) 只锁 schema，不锁生成器。不指定版本会使用最新插件，因此同一 proto 在不同日期可生成不同结果。[Buf 官方说明](https://buf.build/docs/bsr/remote-plugins/usage/)

在临时副本执行 `buf dep update`、`buf generate`，观察如下：

| 生成器/schema | 当前产物或固定状态 | 本次最新远程生成结果 |
| --- | --- | --- |
| `protocolbuffers/python` | Python gencode 7.34.1 | **7.36.1** |
| `protocolbuffers/go` | protoc-gen-go 1.36.11 | **1.36.12** |
| `grpc/go` | protoc-gen-go-grpc 1.6.1 | **1.6.2** |
| `grpc/python` | 未固定，产物无生成器版本 | 成功生成，Hello 文件移除显式 `object` 基类。精确 BSR 标签未核验。 |
| `grpc-ecosystem/gateway` | 未固定，产物无生成器版本 | 成功生成，request body 清理代码位置变化；已与最新 runtime 构建并联调。精确 BSR 标签未核验。 |
| `community/google-gnostic-openapi` | 未固定，产物无生成器版本 | 成功生成，当前 Hello OpenAPI 逐字相同。精确 BSR 标签未核验。 |
| `googleapis/googleapis` | `004180b77378443887d3b55cabc00384` | **`c17df5b2beca46928cc87d5656bd5343`** |

BSR label 查询没有返回这些插件的版本列表。能从产物读取的版本已记录，其余不把上游库版本冒充 BSR 标签。正式实施必须补齐六个插件的版本/revision，并验证固定配置可重建；本次成功生成不等于已完成生成器锁定。

| Python 生成代码 | protobuf 运行库 | 实测结果 |
| --- | --- | --- |
| 当前 7.34.1 | 当前 7.34.1 | 通过 |
| 当前 7.34.1 | 最新 7.36.1 | 通过 |
| 新生成 7.36.1 | 当前 7.34.1 | **导入失败：`VersionError`** |
| 新生成 7.36.1 | 最新 7.36.1 | 通过，含真实 gRPC 调用 |

失败明确报告 `gencode 7.36.1 runtime 7.34.1`，运行库不能早于生成代码。这是当前配置重新生成即可触发的错误，不必等 Protobuf 8。官方也不支持“新生成代码 + 旧运行库”。[Protobuf 跨版本保证](https://protobuf.dev/support/cross-version-runtime-guarantee/)

应先确定并固定生成器组合，再提升运行库、生成 Python/Go/OpenAPI、更新两个 Go 模块并联调。无需因此修改 proto 字段、HTTP 路由或业务 usecase。

此外，项目混合 `gen.python.hello.v1` 与生成代码中的 `hello.v1` 导入名，本地 `gen/python/google/api` 与安装包共存。本次路径配置下通过，但重建验收应继续检查实际导入来源和 descriptor 注册，不能只验证解算。[路径配置](../bootstrap.py)

## 4. Go gateway

涉及 [gateway/go.mod](../gateway/go.mod)、[gen/go/go.mod](../gen/go/go.mod)。本地 `replace` 模块 `gen/go v0.0.0` 是占位版本，不是需要到公网升级的旧库。

下表覆盖最终 gateway 二进制实际链接的全部八个外部模块，已由 `go version -m` 核对。`go.sum` 中上游测试/工具依赖不等同于线上运行依赖。

| 模块 | 当前 → 最新稳定/伪版本 | 影响 |
| --- | --- | --- |
| [grpc-gateway/v2](https://github.com/grpc-ecosystem/grpc-gateway/releases/tag/v2.30.0) | 2.28.0 → **2.30.0** | 仍为 v2，`NewServeMux` 和注册入口未需改写。生成器/runtime 配套升级；回归可选字段、HTTP method override、错误路径。新增 OpenAPI v3 生成器不要求替换现有 gnostic。 |
| [google.golang.org/grpc](https://github.com/grpc/grpc-go/releases) | 1.80.0 → **1.83.2** | 1.81 起要求 Go 1.25；1.82 取消关闭严格 RPC path 校验的开关，LB registry 改为大小写敏感。当前标准路径、普通直连未触发这些迁移点，已联调。 |
| [google.golang.org/protobuf](https://proxy.golang.org/google.golang.org/protobuf/@latest) | 1.36.11 → **1.36.12** | 低风险，与新生成代码构建通过。Go/Python protobuf 编号体系不同，不要求版本数字相同。 |
| [golang.org/x/net](https://proxy.golang.org/golang.org/x/net/@latest) | 0.49.0 → **0.59.0** | **Go ≥1.26.0**。 |
| [golang.org/x/sys](https://proxy.golang.org/golang.org/x/sys/@latest) | 0.40.0 → **0.48.0** | **Go ≥1.26.0**。 |
| [golang.org/x/text](https://proxy.golang.org/golang.org/x/text/@latest) | 0.34.0 → **0.42.0** | **Go ≥1.26.0**。 |
| [genproto/googleapis/api](https://proxy.golang.org/google.golang.org/genproto/googleapis/api/@latest) | `20260401024825-9d38bb4040a9` → **`v0.0.0-20260911204522-f61a6ca850bd`** | 与 schema、rpc/runtime 对齐；要求 Go ≥1.25。 |
| [genproto/googleapis/rpc](https://proxy.golang.org/google.golang.org/genproto/googleapis/rpc/@latest) | `20260401001100-f93e5f3e9f0f` → **`v0.0.0-20260911204522-f61a6ca850bd`** | 同上，伪版本是正常发布形式。 |

最低 Go 版本来自目标 `.mod`：[x/net](https://proxy.golang.org/golang.org/x/net/@v/v0.59.0.mod)、[x/sys](https://proxy.golang.org/golang.org/x/sys/@v/v0.48.0.mod)、[x/text](https://proxy.golang.org/golang.org/x/text/@v/v0.42.0.mod)。

当前机器 Go 1.25.2、模块声明 1.25.0、CI 却配 1.24；启动又设置 `GOTOOLCHAIN=local`，不会自动下载新工具链。所以全量升级不能维持现有工具链配置。最新稳定 Go 是 **1.27.1**，本次已实际用于构建；依赖最低门槛 1.26 与最新目标 1.27.1 要区分。[Go 官方发布](https://go.dev/dl/)

[Makefile](../Makefile) 还有现有问题：硬编码 `/opt/homebrew/bin/go`，Ubuntu CI 无法直接使用；生成流程写死 `go mod edit -go=1.25`。启动脚本和入口也硬编码路径。升级时要统一版本与 PATH；这些不是新版 Go 移除业务 API 造成的问题。

## 5. 工具、CI、数据库

| 项目 | 当前 → 最新目标 | 影响 |
| --- | --- | --- |
| [Python](https://www.python.org/downloads/release/python-3147/) | 声明 ≥3.13，CI 3.13，本机可用 3.13.3 → **3.14.7** | 升级库不强制升解释器。本次运行验证为 3.13.3；若解释器也全部最新，增加标准 GIL 版 3.14.7 验收。主要 native 包已有 cp314/ABI3 wheel，不代表 free-threaded 已验收。 |
| [uv](https://pypi.org/project/uv/) | 本机 0.6.14，项目未固定 → **0.12.13** | 跨多个 0.x minor。新版本检查 lock 格式、解算及 `sync --frozen`，统一本机/CI。简单配置未发现必须改写选项，但本次仍使用旧 CLI，未验证新 CLI。 |
| [Buf CLI](https://github.com/bufbuild/buf/releases/tag/v1.73.0) | 本机 1.57.2 → **1.73.0** | v2 配置未发现强制格式迁移；新 CLI 仍需 lint/generate/breaking 验收。本次远程生成使用本机 1.57.2。 |
| [actions/checkout](https://github.com/actions/checkout/releases/tag/v7.0.1) | v4 → **v7.0.1** | v5 使用 Node 24；v6 更改凭据保存位置；v7 限制敏感事件下 fork PR checkout。项目普通 PR/push 未触发后者。自托管 runner 需核对最低版本。 |
| [actions/setup-python](https://github.com/actions/setup-python/releases/tag/v7.0.0) | v5 → **v7.0.0** | v6 的 Node 24 要求 runner ≥2.327.1；v7 转 ESM，公开 inputs/outputs/行为保持。 |
| [actions/setup-go](https://github.com/actions/setup-go/releases/tag/v7.0.0) | v5 → **v7.0.0** | 同样涉及 Node 24；v6 改 Go/toolchain 读取和默认 cache key。模块在子目录，需显式版本文件/缓存路径。 |
| [astral-sh/setup-uv](https://github.com/astral-sh/setup-uv/releases/tag/v10.1.0) | v5 → **v10.1.0** | 跨多 major，验证安装/缓存/解释器选择。v10 默认自动缓存不再覆盖部分敏感事件；本项目显式 `enable-cache: true` 且普通 PR/push，不能直接判为会失败。[v10 说明](https://github.com/astral-sh/setup-uv/releases/tag/v10.0.0) |
| [bufbuild/buf-setup-action](https://github.com/bufbuild/buf-setup-action) | v1，已归档弃用 | 迁移至 **[bufbuild/buf-action v1.4.0](https://github.com/bufbuild/buf-action/releases/tag/v1.4.0)**。新 action 可执行多种检查，需明确所需行为，保留生成一致性验证，不能只换名字并依赖默认行为。 |
| [PostgreSQL](https://www.postgresql.org/support/versioning/) | Compose `postgres:16`，实际小版本未知 → **18.6** | 高风险集群迁移。16 系列最新 16.15 只可作为维护中间步骤，不是全部最新的最终目标。 |

Actions 迁移依据：[checkout README](https://github.com/actions/checkout/blob/v7.0.1/README.md)、[setup-python README](https://github.com/actions/setup-python/blob/v7.0.0/README.md)、[setup-go README](https://github.com/actions/setup-go/blob/v7.0.0/README.md)。当前 [workflow](../.github/workflows/proto-sync.yml) 只做生成一致性检查，不包含单元测试、数据库或 HTTP 联调。

### PostgreSQL 不能只改镜像 tag

当前 [Compose](../docker-compose.yml) 挂载 `/var/lib/postgresql/data`。官方镜像从 18 起默认 `PGDATA=/var/lib/postgresql/18/docker`，数据卷挂载点改为 `/var/lib/postgresql`；旧 16 数据文件也不能直接供 18 使用。[官方镜像说明](https://github.com/docker-library/docs/blob/master/postgres/README.md#pgdata)

需要 `pg_upgrade` 或逻辑备份/恢复，在隔离实例演练，检查数据、角色/权限、扩展、排序规则、索引、查询计划和停机窗口。Alembic 不能替代集群格式迁移。[官方升级说明](https://www.postgresql.org/docs/18/upgrading.html)

本次未访问数据库或 `postgres-data`，实际版本、数据量、扩展和可接受停机时间未知，不执行迁移、不估算数据库切换耗时。

## 6. 预发布分支的 breaking changes

| 分支 | 当前状态 | 未来稳定后要处理 | 当前项目暴露面 |
| --- | --- | --- | --- |
| SQLAlchemy **2.1.0rc2** | 预发布，稳定目标 2.0.52 | 默认安装不再带 greenlet，异步需 `[asyncio]` 或显式依赖；默认 autoflush 扩展至所有 statement 执行；dataclass defaults、composite 等行为变化。[迁移指南](https://docs.sqlalchemy.org/en/21/changelog/migration_21.html) | 已显式依赖 greenlet；无实体写入、dataclass mapping、composite 或复杂 Session 编排，当前影响小，未来可能增加。 |
| APScheduler **4.0.0a6** | alpha，稳定目标 3.11.3 | Task/Schedule/Job 拆分、AnyIO 异步架构、存储/事件代理/方法/生命周期变化，不能假设 3.x 持久任务可原样迁移。[迁移指南](https://apscheduler.readthedocs.io/en/master/migration.html) | 尚未实现 scheduler，无旧任务迁移；未来开发前需决定稳定 3.x 或专门验证 4.x。 |

Python 3.15、PostgreSQL 19 等预发布也不属于本次稳定目标，未开启全局允许预发布。

## 7. 实测结果与未覆盖项

运行环境：macOS ARM64，Python 3.13.3，Go 1.27.1；全部安装/代码生成/构建均在临时目录，未修改业务代码以使测试通过。

| 验证 | 结果 | 范围 |
| --- | --- | --- |
| Python 全部最新版本元数据及统一解算 | 通过 | 8 个直接、5 个传递依赖全部最新，无解算冲突。 |
| 当前/最新环境安装 | 通过 | 各安装 12 个包；Windows 条件 tzdata 不在 macOS 安装。 |
| 原有 unittest discover | 两环境各 **2/2 通过** | 仅 Hello usecase，不触达数据库。 |
| 旧生成代码 + 最新库 | 通过 | 导入、protobuf binary/JSON 往返。 |
| Injector 生命周期、async session 构造 | 通过 | 无 DSN/模拟 DSN 对象构造和关闭，**没有连接数据库**。 |
| Alembic/Mako 原模板 | 通过 | 临时生成并编译迁移文件，未执行迁移。 |
| gRPC 成功/default/错误映射 | 两环境通过 | INVALID_ARGUMENT、INTERNAL，检查内部错误详情未透出。 |
| 最新 schema + 六个远程生成器 | 通过 | Hello OpenAPI 不变，部分生成器精确标签仍待固定。 |
| 新生成代码 + 旧 protobuf | **按预期失败，已复现** | 导入时 `VersionError`，证明必须配套升级。 |
| 新生成代码 + 最新 Python 库 | 通过 | 同样的导入、DI、模板和真实 RPC 冒烟。 |
| 全部最新 Go 运行依赖 + 新生成代码 | 构建通过 | 临时 tidy、`go get -u ./...`、build；二进制模块版本与第 4 节一致。 |
| 最新 gateway → 最新 Python gRPC | 通过 | 本机随机端口，HTTP JSON 命名请求和默认值。 |
| 真实数据库/迁移/事务/连接池、并发/取消/超时、Windows/Linux | **未验证** | 实施阶段独立验收。 |
| Python 3.14.7、uv 0.12.13、Buf 1.73.0、GitHub CI 实际运行 | **未验证** | 已核对版本/影响，未将本机工具全部升级。 |

本次不是完整漏洞扫描；“可升级”不代表目标组合已通过安全审计。

## 8. 实施顺序与工作量判断

1. **工具链与生成约束**：统一 Go 版本（最新 1.27.1，最低 ≥1.26）、uv/Buf/Actions，移除机器专有路径，固定全部远程插件版本/revision。保持现有业务分层与契约。
2. **Python 全部稳定依赖**：修改 protobuf 固定值、更新兼容范围与 lock；跑现有测试、协议冒烟及隔离数据库的事务/连接池/Alembic 验证。
3. **生成产物与两个 Go 模块**：更新 schema lock、重新生成 Python/Go/OpenAPI，同步两份 go.mod/go.sum；CI 从空 gen 重建检查一致性，验收 HTTP/gRPC 错误、取消、超时和关闭。正式升级需提交生成物。
4. **解释器对照**：若包含 Python 最新稳定版，用 3.14.7 运行同一验收集合，区分解释器与依赖的影响。
5. **数据库独立迁移**：其他部分稳定后演练 PostgreSQL 16 → 18.6，验证备份恢复、回退和新挂载目录，再安排切换。

当前骨架的库升级和构建适配预计工作量较小；交付成本主要由集成验证和数据库现状决定。只升级应用依赖可独立完成前四步；若要求整个运行环境全部最新，数据库迁移不可省略。
