# AGENTS.md

## 1. 目标与范围
- 项目：`python-kratos-scaffold`（Python 3.13+，`uv` 管理依赖）
- 定位：这是 **go-kratos 架构思想的 Python 实现**
- 当前重点：通用 gRPC/HTTP 协议骨架、proto 生成链路、Clean Architecture 实践
- 你的任务：在不破坏分层架构的前提下，完成功能、修复问题、补充测试

## 2. 核心约束（必须）
- 本项目采用 Kratos 分层思想，并对 Python `biz` 实施更严格的 Clean Architecture 政策；不把官方 Go 模板的库选择或目录形式当作跨语言强制规范
- 源码依赖：`server -> service -> biz/usecase`，`usecase -> port/domain`，`data -> biz/port、biz/domain`；`server/service` 可依赖协议框架和生成的协议类型，composition root（装配入口）可跨层依赖并组装对象
- 运行时：`usecase` 经 `port` 调用注入的 `data` 实现；这是出站 IO 调用，不代表 `biz` 可以 import `data`
- Python `biz` 不得依赖具体框架、ORM、协议 DTO、数据库会话、外部 SDK 或 `data` 实现；domain 不执行 IO，usecase 可通过 port 编排 IO
- `data` 实现业务 port，内部可包含持久化模型（PO）、client、mapper、缓存和资源工厂；业务 port 的参数/返回值不得泄漏 ORM/session/协议 DTO。资源工厂向装配入口返回资源及 cleanup 属于合法装配边界
- 一个 port 可有多个实现或装饰器，不要求接口、实现或文件一一对应。domain、port 和应用 DTO 按业务需要建立；简单用例可使用 `str` 等标量，无需无用途的包装层
- 虽然语言是 Python，但默认按 go-kratos 开发思想：先契约、后实现；入口薄、业务内聚、基础设施下沉

## 3. 规范文档（引用）
- 架构与依赖方向：[docs/ARCH_LAYERS.md](docs/ARCH_LAYERS.md)
- Kratos 风格评审清单：[docs/agent-guides/kratos-review-checklist.md](docs/agent-guides/kratos-review-checklist.md)
- Clean Architecture 评审清单：[docs/agent-guides/clean-architecture-review-checklist.md](docs/agent-guides/clean-architecture-review-checklist.md)
- 官方依据及项目政策区别：[Kratos v3 官方基线](docs/2026-09-15-kratos-v3-official-baseline.md)

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
- 核心业务编排放在 `usecase`，具体外部 IO 能力通过 `port` 抽象；纯函数库不因来自第三方就必须包装成 port
- 协议 DTO 在 `service` 边界转换为业务参数/command/domain 值，协议结构校验与业务不变量分别在入口和 usecase/domain 保证
- HTTP 路由、JSON/错误编码、OpenAPI 声明和实际响应必须一致；涉及协议变更时验证 HTTP 与直接 gRPC 行为及生成物同步


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
- Python 模块、函数、变量和属性使用 `snake_case`；类名使用 `PascalCase`，常量使用 `UPPER_SNAKE_CASE`。Proto 类型/service/rpc 名和生成的 RPC override 保留协议及生成器要求的命名，不为统一字段风格而改名
- 关联数据按用户隔离，至少包含 `user_id`（或等价的 actor 标识）维度
- 在用户模块未落地前，统一使用占位身份 `admin`

## 11. 数据库策略（SQLAlchemy 2.0 ORM + Alembic）
- 本项目默认不使用数据库外键（FOREIGN KEY）
- 关联一致性由应用层维护
- 必须通过索引、非空约束等保障数据正确性
- 数据库访问必须使用 SQLAlchemy ORM/Query API；禁止手写原生 SQL
- schema 变更必须通过 Alembic 迁移管理

## 12. 依赖注入（Wire 风格）
- composition root 由 `cmd` 启动逻辑与 `internal/conf/injector.py` 共同构成：injector 统一装配业务对象并拥有基础资源生命周期，`cmd` 协调 server 的创建、启动和关闭；两者均可依赖各自装配所需的层
- 整个组合入口按资源 → repo → usecase → service → server 的依赖顺序装配；这是初始化顺序，不是业务源码 import 方向，也不要求全部构造代码写在同一个文件
- 禁止在 `handler` / `service` / `usecase` 内部自行创建具体 repo/client
- injector 可以调用 `data` 等外层的资源工厂；工厂负责具体初始化细节，injector 负责基础资源所有权和 cleanup，`cmd` 负责协调 server 停止与 injector 清理
- 正常退出和部分初始化失败都必须释放已创建的资源；停止流程不得因一个资源关闭失败而跳过其余清理，需验证重复关闭或未完全启动时的处理

## Agent skills

### Impeccable 前端界面设计与审查

当任务涉及前端界面或交互体验时，使用项目内 skill：`.agents/skills/impeccable/SKILL.md`。典型场景包括：

- 新建或重设计网站、Landing Page、Dashboard、应用壳、组件、表单、设置页、Onboarding、空状态等 UI
- 评审或改进现有 UI 的视觉层次、信息架构、可用性、认知负担、无障碍、响应式行为、主题、排版、间距、颜色与布局
- 做 UI 技术质量审计，包括可访问性、性能、不同设备适配、错误状态、边界情况和国际化
- 对已有界面进行 polish、bolder、quieter、distill、harden、clarify、animate、colorize、typeset、layout 或 optimize 等专项改进
- 需要在浏览器中进行视觉迭代、生成界面变体，或让安全/单调的设计更有个性时

该 skill 仅适用于 UI/UX 和视觉设计工作；纯后端、数据层、协议、脚本或非界面任务无需加载。使用前按 skill 中的 Setup 和命令路由执行，并在实际修改 UI 前读取其质量基线说明。

### A 股数据获取

当任务需要实际获取 A 股行情、K 线、财务、研报、公告、资金面、新闻、指数、交易日历或其他市场数据时，可使用项目内 skill：`.agents/skills/a-stock-data/SKILL.md`。使用前按需阅读对应数据端点和数据源说明；仅讨论 A 股概念、投资观点或策略而不需要调用数据接口时，无需加载该 skill。

### Issue tracker

Issues are tracked in GitHub Issues for `aloha66/quant-service-explore` using the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

Triage uses the default five-label vocabulary: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Domain documentation uses the single-context layout: root `CONTEXT.md` plus repo-wide ADRs under `docs/adr/`. See `docs/agents/domain.md`.
