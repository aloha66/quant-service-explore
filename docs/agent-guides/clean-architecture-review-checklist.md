# Clean Architecture 代码评审清单

## 1. 依赖方向
- 入站依赖是否单向向内：`server -> service -> usecase -> domain`；数据适配器只实现 `biz/port`，不属于入站调用链。
- `domain/usecase` 是否不依赖 FastAPI、SQLAlchemy、gRPC 等框架细节。
- `data/adapter/infrastructure` 是否仅实现 port，不反向污染业务层。
- `domain/usecase/service` 是否禁止 import `infrastructure/adapter` 具体实现（DB/HTTP SDK/消息队列客户端等）。

## 2. 边界与模型
- Domain Entity 是否表达业务语义，而不是数据库字段搬运。
- Usecase 输入输出是否与协议层 DTO 解耦。
- 是否避免在 domain 中出现 IO/网络/持久化逻辑。

## 3. 用例完整性
- 每个业务动作是否可定位到明确 usecase。
- 用例内流程是否可读、可测、可回放（纯业务逻辑优先）。
- 错误是否按 domain/application/infrastructure 分层处理。

## 4. 适配器质量
- Repository/Source 实现是否与 port 定义一一对应。
- 适配器是否处理了异常转换、超时、重试等基础设施问题。
- 是否避免把业务判断下沉到 data 适配器。

## 5. 测试覆盖
- usecase 是否有脱离真实基础设施的单元测试。
- handler 是否有最小 smoke 测试验证路由与序列化。
- bug 修复是否附带回归测试并能稳定复现。
