# Project Usage Documentation

## 1. Quick Start
```bash
uv sync
make proto
uv run python cmd/main.py
```

## 2. Architecture
Following Clean Architecture:
- `api/proto/`: API contracts (protobuf)
- `internal/modules/`: Business modules
    - `biz/`: Core business logic (domain, usecase, ports)
    - `service.py`: Protocol adaptation (gRPC input/output and context)
    - `data/`: Persistence implementation (Repository)
- `internal/server/`: Transport layer servers (gRPC, HTTP)
- `internal/conf/`: Configuration and Dependency Injection (injector.py)

## 3. Common Commands
- **make proto**: Generate code from definitions in `api/proto/`
- **uv sync**: Synchronize python dependencies
- **uv run python cmd/main.py**: Start the full service

## 4. Testing
Run the test suite:
```bash
uv run python -m unittest discover -s tests -p 'test_*.py' -v
```

## 5. Adding a New Module
1. Define the service in `api/proto/`.
2. Run `make proto`.
3. Implement `biz/domain`, `biz/usecase`, `service` and `data` in `internal/modules/`.
4. Run `make proto`, then register the Python service in `internal/conf/injector.py` and `internal/server/grpc/servicer.py`.
5. Register the generated `Register<Service>HandlerFromEndpoint` handler in `gateway/cmd/grpc_gateway/main.go`.
6. When adding ORM models, inherit from `internal.data.base.Base`, create an Alembic revision, and verify autogenerate sees both old and new modules.
7. Add direct gRPC and HTTP smoke tests. Both must pass before the module is considered wired.
