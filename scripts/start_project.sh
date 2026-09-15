#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

if ! command -v uv >/dev/null 2>&1; then
  echo "[ERROR] uv not found in PATH."
  exit 1
fi

# Optional database DSN
export POSTGRES_DSN="${POSTGRES_DSN:-}"
export APP_ENV="${APP_ENV:-local}"
export GATEWAY_HTTP_ADDR="${GATEWAY_HTTP_ADDR:-:8000}"
export GATEWAY_GRPC_BACKEND_ADDR="${GATEWAY_GRPC_BACKEND_ADDR:-127.0.0.1:50051}"

cd "$ROOT_DIR"
echo "[INFO] Starting scaffold service (main + gRPC + gateway)"
echo "[INFO] APP_ENV=$APP_ENV"
echo "[INFO] GATEWAY_HTTP_ADDR=$GATEWAY_HTTP_ADDR"
echo "[INFO] GATEWAY_GRPC_BACKEND_ADDR=$GATEWAY_GRPC_BACKEND_ADDR"

exec uv run --locked python cmd/main.py
