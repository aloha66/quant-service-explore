# Clean Architecture 代码评审清单

本清单是本项目对 Python 业务层的严格政策，参考 Kratos 的依赖倒置与分层思想。官方 Go 模板允许部分框架辅助库进入 biz，不能据此放宽本项目隔离要求。规则来源见 [官方基线研究](../2026-09-15-kratos-v3-official-baseline.md)，依赖图见 [架构说明](../ARCH_LAYERS.md)。

逐项按当前模块能力记录“通过 / 不适用 / 待验证”；发现违反要求时明确记录问题，不得用“不适用”代替。未实现数据库业务或 streaming 的模块，相应 adapter/流式测试可标为不适用；已实现但未实测的能力应标为待验证。已创建的基础资源仍须检查生命周期。

## 1. 依赖方向

- 源码依赖是否为 `server -> service -> biz/usecase`、`usecase -> port/domain`、`data -> biz/port、biz/domain`，禁止 `biz -> data` 或业务层反向依赖 service/server。
- 是否区分运行时调用：usecase 经业务 port 执行注入的 data 实现；data 是出站适配器，属于业务请求的实际执行路径。
- Python `biz` 是否不依赖 FastAPI、SQLAlchemy、gRPC、协议 DTO、ORM/session、外部 SDK 或具体 adapter。
- server/service 是否只在协议边界使用协议框架与生成类型；service 不得依赖具体 repo/client。
- 是否识别装配入口的合法跨层依赖：composition root 由 `cmd` 启动逻辑与 `internal/conf/injector.py` 共同构成，两者可依赖各自装配所需的层；不得将其视作业务层依赖倒置违规。

## 2. 边界与模型

- Domain Entity 是否表达业务语义，而不是数据库字段搬运。
- usecase 和业务 port 的输入输出是否使用业务参数、command 或 domain 值，不泄漏协议 DTO、ORM 模型、数据库 session 或 driver 类型。
- domain/port/应用 DTO 是否按实际需要建立；简单用例可使用 `str` 等标量，不强制增加只转发字段的包装类或无用途 port。
- domain 是否避免 IO；usecase 是否通过 port 编排外部 IO，而不是直接操作数据库、网络或外部 SDK。
- data 内部是否允许持久化模型（PO）、client、mapper、缓存和资源工厂，并将它们限制在基础设施边界；工厂向装配入口返回资源/cleanup 是合法例外，不是业务 port。

## 3. 用例完整性

- 每个业务动作是否可定位到明确 usecase。
- 业务不变量是否由 usecase/domain 保证，不仅依赖 HTTP/gRPC 入口校验；协议结构校验留在入口。
- 用例流程是否可读、可测；需要回放的业务是否显式控制时钟、随机值与外部输入，不将“可回放”机械套用于所有用例。
- 错误是否按边界分类和转换：已知基础设施错误映射到业务合同，协议层映射为对外错误；保留内部原因且避免每层重复包装或泄漏异常细节。

## 4. 适配器质量

- Repository/Source 是否满足 port 契约；允许同一个 port 有多个实现、缓存装饰器或组合，不要求文件数量一一对应。
- 适配器是否处理异常转换、超时与取消；确需重试时，是否满足幂等和可重试错误条件，避免超过请求期限。
- 是否避免把业务判断下沉到 data 适配器。
- 替换同一 port 的实现是否只需调整外层装配/配置，不需要改变 usecase 的业务逻辑。

## 5. 装配与资源生命周期

- 整个 composition root 是否按资源 → repo → usecase → service → server 的依赖顺序装配：injector 统一装配业务对象并拥有基础资源生命周期，`cmd` 协调 server 创建、启动和关闭；不要求全部构造写在同一个文件。
- injector 是否可调用 data 工厂封装具体 client 构造；`cmd` 是否协调 server 停止与 injector 的基础资源清理。
- handler/service/usecase 是否未自行构造具体 repo/client；资源工厂是否明确返回资源与清理方式。
- 正常停止、部分初始化失败、未完全启动和重复关闭时，是否正确清理已创建资源；单个 cleanup 失败是否仍执行其余清理。

## 6. 测试覆盖

- usecase 是否有脱离真实基础设施的单元测试。
- 有外部 IO 的模块是否通过替身验证 port 可替换，并对实际 adapter 验证相关合同；无数据库的模块不强制创建数据库测试。
- handler 是否有最小 smoke 测试验证 HTTP/gRPC 路由、序列化、错误与必要的上下文传播；HTTP 实际行为是否与 OpenAPI 一致。
- 生命周期测试是否覆盖正常退出与部分初始化失败，以及本次改动涉及的关闭异常。
- bug 修复是否附带回归测试并能稳定复现。
