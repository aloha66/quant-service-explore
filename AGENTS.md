# AGENTS.md

## 1. 目标与范围
- 项目：`python-kratos-scaffold`（Python 3.13+，`uv` 管理依赖）
- 定位：这是 **go-kratos 架构思想的 Python 实现**
- 当前重点：通用 gRPC/HTTP 协议骨架、proto 生成链路、Clean Architecture 实践
- 你的任务：在不破坏分层架构的前提下，完成功能、修复问题、补充测试

## 2. 核心约束（必须）
- 采用 Clean Architecture：`server -> service -> biz/usecase -> biz/domain`
- `biz` 层不能依赖具体框架/数据库/外部 API
- `data` 层负责实现 `biz/port` 中定义的接口
- 虽然语言是 Python，但默认按 go-kratos 开发思想：先契约、后实现；入口薄、业务内聚、基础设施下沉

## 3. 规范文档（引用）
- Kratos 风格评审清单：`docs/agent-guides/kratos-review-checklist.md`
- Clean Architecture评审清单：`docs/agent-guides/clean-architecture-review-checklist.md`

## 4. 目录速览
- `api/proto/`：proto 契约
- `cmd/`：服务入口（`main.py`）
- `internal/modules/`：业务模块（service/usecase/domain/data）
- `internal/server/`：HTTP/gRPC/scheduler 适配层
- `internal/conf/`：配置与依赖注入
- `gen/`：生成代码（**IMPORTANT**: 此目录支持删除后通过 `make proto` 完整重建，手动改动会被覆盖）
- `tests/`：测试
- `docs/`：架构与使用文档

## 5. 本地开发与验证命令
- 安装依赖：`uv sync`
- 启动服务（gRPC + gateway）：`uv run python cmd/main.py`
- 生成协议代码：`make proto`
- 运行测试：`uv run python -m unittest discover -s tests -p 'test_*.py' -v`
- 编译检查：`uv run python -m py_compile $(find internal tests cmd -name '*.py' -type f)`

## 6. 代码改动规则
- 只修改与当前任务直接相关的文件
- 不要重命名/迁移目录，除非任务明确要求
- 生成代码目录 `gen/` 发生变化时，需一并提交
- 优先小步提交
- 未经明确要求，不引入新的重依赖

## 7. API 与协议规则
- 变更接口优先改 `api/proto/...`，再执行 `make proto`（**IMPORTANT**: `make proto` 会自动处理 Python 包初始化与 Go Module 初始化，确保 `gen/` 目录完整性）
- 若变更涉及 `google.api.http` 注解或 service/rpc，必须同步完成 gateway 更新
- HTTP handler 与 gRPC handler 仅做协议适配，不写核心业务逻辑
- 业务编排放在 `usecase`，跨层访问通过 `port` 抽象


## 8. 配置与环境变量
- `POSTGRES_DSN`：涉及数据库链路时必须设置
- 示例：`postgresql+asyncpg://root:root@127.0.0.1:5432/quant`
- 不要把密钥或凭据写入代码仓库

## 9. 禁止事项
- 不要无依据地“顺手重构”大面积代码
- 不要跳过验证就宣称“已修复”
- 不要修改与任务无关的生成物、配置或测试基线
- 不要写出违背 go-kratos 分层思想的跨层耦合代码

## 10. 命名与身份约束
- 跨边界契约命名（数据库字段、Proto 字段、HTTP JSON 字段）统一使用 `snake_case`
- Python 代码内命名使用 `snake_case`
- 关联数据按用户隔离，至少包含 `user_id`（或等价的 actor 标识）维度
- 在用户模块未落地前，统一使用占位身份 `admin`

## 11. 数据库策略（SQLAlchemy 2.0 ORM + Alembic）
- 本项目默认不使用数据库外键（FOREIGN KEY）
- 关联一致性由应用层维护
- 必须通过索引、非空约束等保障数据正确性
- 数据库访问必须使用 SQLAlchemy ORM/Query API；禁止手写原生 SQL
- schema 变更必须通过 Alembic 迁移管理

## 12. 依赖注入（Wire 风格）
- 统一在 `internal/conf/injector.py` 进行对象装配与生命周期管理
- 禁止在 `handler` / `usecase` 内部自行 new 具体 repo/client
- 重型资源必须由 injector 统一初始化与关闭
