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
    - `biz/`: Core business logic (usecases, with domain objects and ports when needed)
    - `service.py`: Protocol adaptation (gRPC input/output and context)
    - `data/`: Outbound adapters, persistence models, clients, mappers, and resource factories
- `internal/server/`: Transport layer servers (gRPC, HTTP)
- `internal/conf/`: Configuration and Dependency Injection (injector.py)

Source imports point from server to service to biz, and from data to biz-owned
ports/models. At runtime, usecases invoke injected data implementations through
ports. The composition root spans `cmd` startup logic and the injector: the
injector assembles business objects and owns foundational resources, while `cmd`
coordinates server construction, startup, and shutdown. Resources, repositories,
usecases, services, and servers follow that overall dependency order; their
constructors need not share one file. `cmd` coordinates server shutdown and
injector cleanup, including partial initialization failure.
See [Architecture Layers](ARCH_LAYERS.md) for the full boundaries.

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
3. Implement the usecase and `service.py` in `internal/modules/<module>/`. Add domain objects, ports, application DTOs, and data adapters only as needed; a simple usecase may accept and return `str`.
4. Run `make proto`, then register the Python service in `internal/conf/injector.py` and `internal/server/grpc/servicer.py`. Let the injector own new foundational resources and their cleanup; it may call data factories for construction details. Keep server startup/shutdown coordination in `cmd`.
5. Register the generated `Register<Service>HandlerFromEndpoint` handler in `gateway/cmd/grpc_gateway/main.go`.
6. When adding ORM models, inherit from `internal.data.base.Base`, create an Alembic revision, and verify autogenerate sees both old and new modules.
7. Add usecase tests and direct gRPC/HTTP smoke tests. Verify HTTP route, JSON/error semantics, and OpenAPI consistency; both protocol entrypoints must pass before the module is considered wired.
8. If the module introduces resources, verify cleanup on normal shutdown and partial initialization failure, including relevant close failures.
