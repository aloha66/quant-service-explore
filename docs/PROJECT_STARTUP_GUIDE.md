# Project Startup Guide

## 1. Goal
This guide helps you start the repository in a clean state.

## 2. Prerequisites
- Python 3.13 (the existing interpreter is retained; `.python-version` selects this series)
- `uv` 0.12.13
- Go 1.27.1 (for grpc-gateway; also declared in `gateway/go.mod`)
- Buf 1.73.0 (for proto management)

Put `uv`, `go`, and `buf` on `PATH`. The build no longer requires Homebrew paths.

## 3. Install Dependencies
```bash
uv sync --frozen
```

## 4. Database Setup (Optional)
Hello does not require a database. Leave `POSTGRES_DSN` unset to start it without one.
The optional Compose configuration uses PostgreSQL 18.6 and a separate
`postgres-data-18/` directory mounted at `/var/lib/postgresql`.
Existing PostgreSQL 16 data in `postgres-data/` is not migrated or reused by this configuration.

This scaffold includes SQLAlchemy and Alembic infrastructure. If your business logic requires a database:
1. Set `POSTGRES_DSN` to the Compose database, for example `postgresql+asyncpg://root:root@127.0.0.1:5432/quant`.
2. Run migrations:
```bash
uv run alembic upgrade head
```
`POSTGRES_DSN` is the single migration configuration source. Automatic migration is
opt-in: set `APP_ENV=local` when starting the application locally. A migration failure
stops startup and never advances Alembic's version with `stamp`.

## 5. Generate Protocol Code
```bash
make proto
```

## 6. Start Service (gRPC + Gateway)
```bash
uv run --locked python cmd/main.py
```
This starts the Python gRPC server on port 50051 and grpc-gateway on port 8000.
`scripts/start_project.sh` starts the same entry point without requiring a database.
The Python server and gateway are separate listeners: native gRPC connects directly to
Python, while HTTP/JSON is translated by grpc-gateway.

## 7. Verify Health
Verify the gateway is running:
```bash
curl -fsS 'http://127.0.0.1:8000/v1/hello?name=Codex'
# {"message":"Hello, Codex!"}

uv run --locked python cmd/grpc_client_demo.py
# Response received: Hello, Antigravity!
```

## 8. Automated Acceptance
```bash
uv run --locked python -m unittest discover -s tests -p 'test_*.py' -v
```
The transport tests start the actual `cmd/main.py` on temporary local ports and verify
direct gRPC, HTTP through grpc-gateway, empty/default names, Unicode, concurrent
requests, and unknown routes/methods. They stop their own processes after testing.
These integration tests require Go on `PATH` and run on macOS/Linux.

`make clean-proto && make proto` reconstructs all generated artifacts, including
`gen/go/go.mod` and `gen/go/go.sum`, from the pinned Buf generators and the gateway's
locked Go dependencies. CI checks this reconstruction and runs the same acceptance tests.

## 9. Optional Local MCP Configuration

`.vscode/mcp.example.json` is an optional local PostgreSQL-tool example; it is not
required to build or run the scaffold. Copy it to `.vscode/mcp.json` only when you
want that editor integration, and replace its connection details for your environment.
