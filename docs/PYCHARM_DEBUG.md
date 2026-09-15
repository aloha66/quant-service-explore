# PyCharm 调试指南（Python + grpc-gateway）

## 1. 调试 Python 主入口（推荐）

目标：在 PyCharm 里直接断点调试 `cmd/main.py`，不走 `sh` 包装。

### 配置步骤
1. 打开 `Run | Edit Configurations...`
2. 新建 `Python` 配置
3. 设置：
   - `Script path`: `<项目绝对路径>/cmd/main.py`
   - `Working directory`: `<项目绝对路径>`
   - `Python interpreter`: 项目解释器（建议 `.venv` / `uv` 环境）
4. 设置环境变量：
   - 可选：`POSTGRES_DSN=postgresql+asyncpg://root:root@127.0.0.1:5432/quant`
   - 需要自动迁移时：`APP_ENV=local`
5. 运行 `Debug`

### 说明
- 该入口会同时拉起：
  - gRPC: `127.0.0.1:50051`
  - grpc-gateway: `127.0.0.1:8000`

## 2. 调试 grpc-gateway（Go）

> 建议使用 GoLand；若 PyCharm 已安装 Go 插件，也可按下述方式配置。

### 配置步骤
1. 新建 `Go Build`（或 `Go Application`）配置
2. 设置：
   - `Run kind`: `Package`
   - `Package path`: `./cmd/grpc_gateway`
   - `Working directory`: `<项目绝对路径>/gateway`
3. 环境变量：
   - `GATEWAY_HTTP_ADDR=:8000`
   - `GATEWAY_GRPC_BACKEND_ADDR=127.0.0.1:50051`
4. 运行 `Debug`

## 3. 常见问题

### Q1: `cannot find module providing package ...`
- 原因通常是工作目录不对，导致没有读取 `gateway/go.mod`。
- 请确认启动 gateway 时 `Working directory` 为：
  - `<项目绝对路径>/gateway`

### Q2: gateway 返回 502/504
- 检查 gRPC 后端是否在 `127.0.0.1:50051` 正常监听。
