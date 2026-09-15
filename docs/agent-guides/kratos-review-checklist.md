# Kratos 风格代码评审清单

本清单采用 Kratos 的协议优先、依赖倒置和统一装配思想；`internal/modules/`、Python biz 框架隔离、`make proto` 等属于本项目政策。Go v3 API 迁移项仅适用于使用 Kratos 的 Go 组件。依据见 [官方基线研究](../2026-09-15-kratos-v3-official-baseline.md)，依赖图见 [架构说明](../ARCH_LAYERS.md)。

逐项按当前模块能力记录“通过 / 不适用 / 待验证”；发现违反要求时明确记录问题，不得用“不适用”代替。未实现数据库业务或 streaming 的模块，相应 adapter/流式测试可标为不适用；已实现但未实测的能力应标为待验证。已创建的基础资源仍须检查生命周期。

## 1. 分层职责

- `server` 层是否只负责创建服务、注册协议服务与配置中间件。
- `service` 层是否只做协议适配、参数校验、错误映射与上下文适配，不直接写 SQL/HTTP 第三方调用。
- `usecase` 是否承载核心业务流程与规则，业务不变量是否不依赖单一协议入口才能成立。
- `data` 是否通过 biz 定义的 port 实现外部能力；内部可包含 PO/client/mapper/资源工厂，但业务 port 不得输出 ORM/session/协议 DTO。
- 是否区分源码依赖（server → service → biz，data → biz）、运行时调用（usecase 经 port 调用 data）与装配顺序（资源 → repo → usecase → service → server）。
- server/service 的协议依赖和 composition root 的跨层组装是否被正确识别；Python biz 仍禁止依赖具体框架、协议 DTO 或 data 实现。

## 2. 契约优先

- 公开接口变更是否先改 proto；具体外部 IO 能力变更是否先定义/更新业务 port，再改实现。
- 协议 DTO 是否在 service 边界转换为业务参数/command/domain 值；简单用例可直接使用标量，不强制新增 domain、port 或 DTO 文件。
- 是否避免“未定义契约先编码”的临时实现。
- HTTP 注解、gateway 注册、JSON 字段/错误编码、OpenAPI 与真实响应是否一致；协议变更是否验证 HTTP 和直接 gRPC 两种入口。
- 使用 Kratos v3 的 Go 组件是否明确 JSON/protojson codec、正确使用 `/v3` 路径并重生成受影响代码；不将 Go 库要求套用到 Python biz。

## 3. 可替换性

- 具体外部 IO 依赖是否通过业务 port 接入；纯函数库不需要仅因第三方来源而额外包装 port。
- 是否可通过外层装配/配置替换数据源或存储实现；允许同一 port 有多个实现和装饰器，不要求实现与接口一一对应。
- 是否出现跨层直接依赖具体实现（如 usecase 直接 import repo 实现）。

## 4. 可观测性

- 关键路径是否保留 trace_id、身份与请求上下文；有下游调用时是否传递 deadline 与取消语义，避免无界等待。
- 错误日志是否包含必要上下文且不泄露敏感信息。
- 已知错误是否按业务合同映射到协议层，未分类异常是否返回稳定且脱敏的对外错误，避免逐层重复包装。

## 5. 装配与生命周期

- composition root 是否由 `cmd` 启动逻辑与 `internal/conf/injector.py` 协作完成：injector 统一装配业务对象并拥有基础资源生命周期，`cmd` 协调 server 创建、启动和关闭，两者可依赖各自装配所需的层。
- 资源 → repo → usecase → service → server 是否被理解为整个组合入口的依赖顺序；injector 可调用 data 资源工厂，不要求全部构造写在同一个文件，`cmd` 协调 server 停止与基础资源清理。
- handler/service/usecase 是否未自行创建具体 repo/client。
- 正常退出、部分初始化失败、重复关闭和未完全启动时，是否清理已创建资源；单个清理异常是否不会阻断其余清理。

## 6. 工程一致性

- 新增模块目录是否对齐 `internal/modules/<module>/` 约定。
- 是否按实际能力补齐单元、协议 smoke 与生命周期测试，不用“存在测试”替代行为验收。
- proto 变更后是否执行 `make proto`，同步 gateway/OpenAPI 并提交生成物；生成目录是否仍可删除后完整重建。
- 字段是否使用 snake_case；Python 类、常量、Proto 类型/service/rpc 和生成 RPC override 是否保留各自合法命名约定。
