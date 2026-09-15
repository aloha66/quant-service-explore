# Go-Kratos v3 官方依赖方向与本项目清单对照

> 取证日期：2026-09-15。范围：官方发布、固定版本源码、官方模板与官网文档；对照本项目两份评审清单。本文是研究结论与修订建议，不修改现行项目规范，也不把框架能力、模板示例和项目政策混为同一种强制要求。

> 后续状态：用户已授权将三项核心结论同步到 AGENTS、架构说明、两份评审清单和使用指南。本文的“现行条目”与旧章节号保留取证时的修订前快照；最新约束以相应文档为准，修复与复验见 [架构审查记录第 8 节](2026-09-15-kratos-v3-architecture-audit.md#8-授权整改与复验2026-09-15)。

## 1. 结论

本项目两份清单的核心方向与当前官方模板一致：协议适配在 service，业务规则在 biz，具体存储实现依赖业务定义的接口。**没有发现需要将依赖改成 `biz -> data` 的理由。** 需要调整的是规范表述的精确度、依据归属和遗漏的检查项。

不能把“与官方模板思路一致”“完全满足本项目 Clean Architecture 政策”“使用 Go-Kratos v3 API”互相替代。本项目是 Python 实现，部分 gateway 使用 Go；Python 层的严格纯业务边界可以继续保留，不需要为了模仿 Go 模板而引入框架错误或协议枚举。

## 2. 固定的官方基线

| 对象 | 本次核实结果 | 一手依据 |
| --- | --- | --- |
| Kratos 正式版本 | `v3.0.0` 已正式发布，发布页显示 2026-06-26；不是预发布假设。 | [正式 Release](https://github.com/go-kratos/kratos/releases/tag/v3.0.0) |
| 框架源码 | tag `v3.0.0` 与本次查询的 `main` 均为 `668db92c2c001e9552594ba5a8aede8456af6d7e`。commit 时间为 `2026-06-26T20:57:23+08:00`，该时间是提交时间，不是 Release 发布时间。 | [固定 commit](https://github.com/go-kratos/kratos/commit/668db92c2c001e9552594ba5a8aede8456af6d7e)；本次 `git ls-remote` 与 shallow clone 交叉验证 |
| Go 模块 | 框架模块名为 `github.com/go-kratos/kratos/v3`，要求 Go `1.25.0`。 | [v3.0.0 go.mod](https://github.com/go-kratos/kratos/blob/668db92c2c001e9552594ba5a8aede8456af6d7e/go.mod#L1-L20) |
| 当前官方 service 模板 | `go-kratos/kratos-layout` 的 `main` 为 `59ad406328acba9a70c9e7f426720a75a89a6b9f`，commit 时间 `2026-09-01T13:43:07+08:00`。依赖 Kratos `v3.0.0`；这是独立演进的模板快照。 | [模板 commit](https://github.com/go-kratos/kratos-layout/commit/59ad406328acba9a70c9e7f426720a75a89a6b9f)、[模板 go.mod](https://github.com/go-kratos/kratos-layout/blob/59ad406328acba9a70c9e7f426720a75a89a6b9f/go.mod#L44-L47) |
| CLI 与模板关系 | v3 CLI 的 service 选项引用 `kratos-layout`，支持 `--repo`、`--branch`；模板不是永久嵌入 CLI 的同版本副本。 | [CLI project.go](https://github.com/go-kratos/kratos/blob/668db92c2c001e9552594ba5a8aede8456af6d7e/cmd/kratos/internal/project/project.go#L19-L43)、[模板下载](https://github.com/go-kratos/kratos/blob/668db92c2c001e9552594ba5a8aede8456af6d7e/cmd/kratos/internal/base/repo.go#L85-L100) |

官方框架提供 transport、middleware、errors、encoding 等机制；官方模板展示一套服务组织方式；模板自身的 `AGENTS.md` 约束该模板的维护。这些资料没有共同形成一份适用于所有语言和项目的、不可定制的“Kratos 3.0 目录强制标准”。模板 README 也明确要求开发者用自己的领域模型替换示例。[官方模板定位](https://github.com/go-kratos/kratos-layout/blob/59ad406328acba9a70c9e7f426720a75a89a6b9f/README.md#L3-L9)

### 2.1 官网与模板存在自身漂移

1. 当前官网 Quick Start 仍展示安装 `cmd/kratos/v2@latest`，Wire 文档也保留旧 `log.Logger` 示例。它们可说明历史分层思想，不能直接证明 v3 API 用法。[Quick Start](https://go-kratos.dev/docs/getting-started/start/)、[Wire 文档](https://go-kratos.dev/docs/guide/wire/)
2. 官网 Layout 对 data 的描述仍写 PO → DTO；当前模板的明确边界却是 service DTO ↔ DO、data DO ↔ PO，并禁止 data 依赖 DTO。当前 `internal/data/todo.go` 的实际输入输出也都是 `biz.Todo`。因此不能照抄官网该句，要求 data 返回协议对象。[官网 Layout](https://go-kratos.dev/docs/intro/layout/)、[模板边界](https://github.com/go-kratos/kratos-layout/blob/59ad406328acba9a70c9e7f426720a75a89a6b9f/AGENTS.md#L35-L46)、[实际转换](https://github.com/go-kratos/kratos-layout/blob/59ad406328acba9a70c9e7f426720a75a89a6b9f/internal/data/todo.go#L14-L50)
3. 固定模板 HEAD 的 README 仍称示例为内存 repository，但同一个 commit 的 `data.NewData` 已通过 Ent 打开数据库。这是官方仓库文档与源码的真实不一致，不只是搜索缓存；审核实际实现时以固定源码为准。[README](https://github.com/go-kratos/kratos-layout/blob/59ad406328acba9a70c9e7f426720a75a89a6b9f/README.md#L31-L40)、[NewData](https://github.com/go-kratos/kratos-layout/blob/59ad406328acba9a70c9e7f426720a75a89a6b9f/internal/data/data.go#L22-L46)

## 3. 三种箭头必须分开

### 3.1 源码 import 依赖

```text
server  ──> service ──> biz
   │            └────> api（请求/响应 DTO）
   └─────────────────> api（注册生成的 HTTP/gRPC 服务）

data ──> biz（DO、Repo 接口、业务错误）
data ──> ORM / driver / 存储模型

cmd/Wire ──> server + service + biz + data + config
```

这不是一条囊括所有 import 的线性链。关键是 **biz 不 import data 具体实现，而 data 依赖 biz 拥有的接口和模型**。server 还需要生成的注册函数与配置，装配入口也必须看到所有待组装的模块。[server/http.go](https://github.com/go-kratos/kratos-layout/blob/59ad406328acba9a70c9e7f426720a75a89a6b9f/internal/server/http.go#L3-L40)、[service/todo.go](https://github.com/go-kratos/kratos-layout/blob/59ad406328acba9a70c9e7f426720a75a89a6b9f/internal/service/todo.go#L3-L43)、[data/todo.go](https://github.com/go-kratos/kratos-layout/blob/59ad406328acba9a70c9e7f426720a75a89a6b9f/internal/data/todo.go#L3-L37)

Go 模板把 entity、usecase、Repo interface 放在同一个 `biz` 包；并不要求每项独立成 `domain/`、`usecase/`、`port/` 子目录。拆分这些目录是本项目的组织方式，不是 v3 新增的强制规范。[biz/todo.go](https://github.com/go-kratos/kratos-layout/blob/59ad406328acba9a70c9e7f426720a75a89a6b9f/internal/biz/todo.go#L37-L103)

### 3.2 运行时调用与数据流

```text
HTTP/gRPC 请求
  -> 生成的协议 handler
  -> service：协议 DTO 转为业务 DO/参数
  -> usecase：规则与流程
  -> Repo 接口的方法（运行时执行注入的 data 实现）
  -> ORM / 外部系统
```

因此“data 不属于入站适配层”成立；“业务请求执行时不会调用 data”不成立。usecase 调用接口是运行时对外执行 IO 的入口，但源码依赖仍指向业务接口。entity 也不一定是链尾被调用的“最后一层”，它可能只是 usecase 与 Repo 接口共享的业务值。[usecase 实际调用](https://github.com/go-kratos/kratos-layout/blob/59ad406328acba9a70c9e7f426720a75a89a6b9f/internal/biz/todo.go#L106-L143)

### 3.3 DI 装配与生命周期

```text
NewData(config) -> Repo(data) -> Usecase(repo) -> Service(usecase)
               -> HTTP/gRPC Server(service) -> App
关闭 App / 启动失败 -> 释放已经创建的资源
```

当前 `cmd/server/wire_gen.go` 清楚体现这个初始化顺序；它合法 import 所有层。数据库构造细节在 `data.NewData`，该工厂返回 cleanup；Wire 装配入口持有 cleanup 并交给上层生命周期。**“统一初始化与关闭的责任”不等于“每个 client 的构造细节必须直接写在 injector 文件”。** 本项目可以让 `internal/conf/injector.py` 承担同等装配责任，而把基础设施构造细节保留在外层工厂。[Wire 生成结果](https://github.com/go-kratos/kratos-layout/blob/59ad406328acba9a70c9e7f426720a75a89a6b9f/cmd/server/wire_gen.go#L25-L40)、[资源工厂与清理](https://github.com/go-kratos/kratos-layout/blob/59ad406328acba9a70c9e7f426720a75a89a6b9f/internal/data/data.go#L22-L46)

## 4. 官方模板没有实施“biz 零第三方依赖”

当前 `biz/todo.go` 使用 Kratos `errors`、API error-reason 枚举、UUID 和 AIP filtering/ordering 类型；`biz/biz.go` 使用 Wire 声明 provider。它没有把 protobuf 请求/响应对象、Ent client 或 ORM model 传进 biz。这说明官方当前边界强调的是协议对象和具体存储细节隔离，不能推导出任何第三方库都禁止。[biz imports](https://github.com/go-kratos/kratos-layout/blob/59ad406328acba9a70c9e7f426720a75a89a6b9f/internal/biz/todo.go#L3-L20)、[biz provider](https://github.com/go-kratos/kratos-layout/blob/59ad406328acba9a70c9e7f426720a75a89a6b9f/internal/biz/biz.go#L1-L6)

本项目选择更严格的 Clean Architecture：domain/usecase 不依赖 FastAPI、SQLAlchemy、gRPC 等具体框架，错误用 Python 业务类型表达，再由外层映射。这是合理的项目政策，建议保持。应增加“这是本项目强化约束”的说明，而不是为追随模板放宽现有隔离规则。

同样，模板的 helper 布局、Ent、MySQL、Wire、AIP CRUD、错误 enum、共享 `Data` 容器都是具体工程取舍。不能据此要求 Python 项目迁移数据库、增加多余 DTO 文件，或改成相同目录。

## 5. 对两份清单逐项质疑

对照文件：

- [Clean Architecture 评审清单](agent-guides/clean-architecture-review-checklist.md)
- [Kratos 风格评审清单](agent-guides/kratos-review-checklist.md)

下表的“建议”是本次评审意见；现行政策在正式修订前仍按原文执行。

| 现行条目 | 判断 | 建议调整 |
| --- | --- | --- |
| Clean §1：`server -> service -> usecase -> domain`，data 不属于入站调用链 | 核心依赖倒置正确，但把 import、入站适配和运行时调用混在一起，且遗漏 usecase → port、data → port/domain 及装配入口。 | 分别列源码依赖、请求执行、装配三种图；改成“data 是出站适配器，运行时由 usecase 经 port 调用”。 |
| Clean §1：domain/usecase 不依赖框架 | 与本项目政策一致，严格于官方模板。 | 保留；注明是 Python 项目强化约束。不要引用 Go 模板宣称其本身零框架依赖。 |
| Clean §1：data/adapter/infrastructure “仅实现 port” | 若理解为职责概括则合理；若字面禁止模型、client、连接池、mapper，则与当前官方 data 包不符。 | 改成“通过 port 暴露业务能力；内部可包含 PO/ORM 模型、client、mapper、缓存和资源工厂”。 |
| Clean §1：domain/usecase/service 禁止具体 adapter import | 与模板边界一致。 | 保留，同时明确 composition root 合法跨层组装，避免把 injector 的 import 当违规。 |
| Clean §2：业务模型、usecase 输出与协议 DTO 解耦 | 与模板 DO/DTO/PO 区分一致。 | 明确 port 参数/返回值也不得泄漏 ORM/session/协议 DTO；允许简单业务使用标量或既有业务值，不强制每个动作创建包装 DTO。 |
| Clean §2：domain 不做 IO | 合理的纯领域规则。 | 保留，但说明 usecase 可以通过 port 编排 IO；“业务层纯粹”不等于 usecase 不能 await repository。 |
| Clean §3：每个动作定位 usecase、可回放、分层错误 | 业务归属合理；通用“可回放”与三层错误分类不是本次发现的 v3 强制条款。 | 明确回放适用场景和时钟/随机性/外部输入控制；规定业务错误分类与适配边界，避免每层重复包装同一个错误。 |
| Clean §4：Repository/Source 与 port “一一对应” | 容易与可替换性矛盾。一个 port 应能有内存、数据库、缓存装饰器等多个实现；源码/文件数不应一一对应。 | 改成“实现满足声明的 port 契约，允许多实现与组合；不暴露实现专有类型”。 |
| Clean §4：异常转换、超时、重试 | 基础设施责任正确，但不能理解为每个 adapter 都必须重试。 | 用端到端 deadline、取消传播、可重试错误与幂等前提检查替代机械重试要求。 |
| Kratos §1：server 创建/注册/中间件，service 协议适配，usecase 业务，data 基础设施 | 与当前模板的职责一致。 | 保留。协议结构校验放入口；不变量应在 usecase/domain 保障，供 HTTP/gRPC/调度入口共同复用。 |
| Kratos §2：先 proto 或 port，再实现 | 与模板添加资源的建议顺序相容。 | 区分公开 API 以 proto 为准、出站能力以 port 为准。简单流程不必为了目录形式创建无用途 port。 |
| Kratos §2：handler/service/usecase 使用 DTO/command | “DTO”若指协议对象，会与 Clean §2 自相矛盾。 | 写清 service 接受协议 DTO，service ↔ usecase 使用业务参数/command/DO；禁止协议对象继续深入。 |
| Kratos §3：外部依赖由 port 接入、可替换性 | 与模板依赖倒置一致。 | 明确替换的是业务调用边界；只读纯函数库无需为了“外部依赖”四字添加无价值 port。 |
| Kratos §4：trace_id/上下文、日志、错误映射 | 与框架方向相容，当前文字不足以证明端到端生效。 | 检查 deadline、取消、身份与 trace 传播；检查错误码/JSON 编码及日志脱敏，分别验收 HTTP 与 gRPC。 |
| Kratos §5：`internal/modules/<module>/`、`make proto`、生成物提交 | 前两项是本项目组织与命令约定。官方模板是平铺 `internal/{server,service,biz,data}`，生成命令为 `make api/config/all`。 | 保留项目约定，注明来源；不要以目录/命令与官方不同判定不合规。 |
| 两份清单测试部分 | 单元/协议测试方向正确；仅“有测试”无法证明层间独立或传输语义相同。 | 验证替身替换、port 合同、HTTP/gRPC 绑定/错误/上下文，以及真实资源生命周期。没有数据库的模块不强制建立数据库测试。 |

依据分布：源码与职责对应见本文 §3–4；官方添加资源与测试边界见 [模板 AGENTS 的 resource/testing 部分](https://github.com/go-kratos/kratos-layout/blob/59ad406328acba9a70c9e7f426720a75a89a6b9f/AGENTS.md#L100-L119)；实际生成入口见 [模板 Makefile](https://github.com/go-kratos/kratos-layout/blob/59ad406328acba9a70c9e7f426720a75a89a6b9f/Makefile#L11-L37)。表中关于本项目强化策略、适用性与措辞的判断是本次工程评审推论，不是声称官方逐条作出了这些规定。

### 5.1 建议最先补齐的可执行检查

1. **规则来源与适用范围**：标明 Kratos 模板共识、Python 项目强化政策、仅 Go v3 迁移项；明确纯函数库与具体外部 IO adapter 的区别。
2. **边界所有权**：业务拥有 port 与业务值；业务 port 的输入输出不包含 ORM/session/协议 DTO；protocol DTO 在 service 边界转换。基础设施工厂向组合入口返回客户端或资源容器不受此业务边界限制。
3. **装配例外与生命周期**：injector 可依赖所有层；验证正常退出、部分启动失败、重复 close、正在执行请求的取消，而非只检查构造位置。
4. **上下文与错误合同**：identity/trace/deadline/cancellation 跨 HTTP → gateway → gRPC → usecase → port 的实际传播；业务错误映射稳定，未分类异常不泄漏内部内容。
5. **生成链一致性**：proto、HTTP annotations、gateway 注册、生成器版本和产物同步；检验删除生成目录后的重建能力。该目录重建保证是本项目政策。

## 6. v3 真正改变了什么

v3 迁移指南主要处理框架耦合和显式依赖：模块路径改为 `/v3`；标准 JSON 与 protobuf JSON codec 分离；日志改用 `slog`；JWT 移到 contrib；默认熔断器不再依赖 Aegis；移除公开的 HTTP binding 包并要求重生成代码。这不是把业务层改成依赖 data 的架构重写。[固定 v3 迁移指南](https://github.com/go-kratos/kratos/blob/668db92c2c001e9552594ba5a8aede8456af6d7e/docs/migration/v2-to-v3.md)

对 Python 项目的适用性：

| 项目部分 | 应如何采用 v3 结论 |
| --- | --- |
| Python domain/usecase/service | 采用依赖倒置、协议边界、生命周期管理思想；不要求使用 Go `slog`、Wire 或 Kratos error 类型。 |
| 使用 Kratos v3 的 Go gateway | 逐项检查 `/v3` import、JSON/protojson 行为、错误编码、日志上下文、已移除 binding API、HTTP 生成代码。 |
| protobuf/gRPC 与 JSON 跨语言边界 | 用实际生成代码和联调验证字段名称、枚举、int64、缺失值和错误语义；不要假设两个 codec 天然等价。 |
| PostgreSQL / ORM / Alembic / 无外键 / `admin` 身份 | 这些是本项目自己的存储和身份策略；官方 Go 模板没有为本项目给出替代授权。 |

尤其不能把“v3 减少框架核心依赖”推导成“核心完全没有 protobuf/gRPC”或“业务一律禁止所有库”：框架 v3 的 `go.mod` 仍列出 gRPC、protobuf 等依赖。[框架依赖清单](https://github.com/go-kratos/kratos/blob/668db92c2c001e9552594ba5a8aede8456af6d7e/go.mod#L5-L18)

## 7. 本次证据与限制

- 联网核实了正式发布页、当前官网与固定源码；使用 `git ls-remote` 固定框架/tag/模板 SHA，再 shallow clone 到 `/private/tmp/kratos-v3-audit/`，未执行下载的程序。
- 直接阅读了模板的 `AGENTS.md`、service/biz/data/server、Wire 生成结果、go.mod 与 Makefile，以及框架 v3 的迁移指南和 CLI 模板选择/下载代码。
- 未将官网旧版示例、官方 README 自身漂移，或本仓库以前的评估文档当作当前源码事实。
- 本文只判断官方基线与清单表述。当前 Python/Go 项目的逐文件审查、测试结果与剩余问题由本次项目审查记录给出，不能由本文直接推出“项目完全符合”。
