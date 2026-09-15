#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
LOG_FILE="/tmp/quant-hello-smoke.log"

export POSTGRES_DSN="${POSTGRES_DSN:-}"
export SKIP_AUTO_MIGRATION="${SKIP_AUTO_MIGRATION:-1}"
export GRPC_HOST="${GRPC_HOST:-127.0.0.1}"
export GRPC_PORT="${GRPC_PORT:-50051}"
export GATEWAY_HTTP_ADDR="${GATEWAY_HTTP_ADDR:-127.0.0.1:8000}"
export GATEWAY_GRPC_BACKEND_ADDR="${GATEWAY_GRPC_BACKEND_ADDR:-127.0.0.1:${GRPC_PORT}}"
export UV_CACHE_DIR="${UV_CACHE_DIR:-/tmp/quant-dependency-audit/uv-cache}"
export GOCACHE="${GOCACHE:-/tmp/quant-dependency-audit/go-cache}"
export GOMODCACHE="${GOMODCACHE:-/tmp/quant-dependency-audit/go-mod}"

cleanup() {
  echo "[INFO] cleaning process..."
  if [[ -n "${SERVICE_PID:-}" ]]; then
    kill "${SERVICE_PID}" 2>/dev/null || true
    wait "${SERVICE_PID}" 2>/dev/null || true
  fi

  pkill -f 'python .*cmd/main.py' >/dev/null 2>&1 || true
  pkill -f 'python3.*cmd/main.py' >/dev/null 2>&1 || true
  pkill -f 'python .*cmd/grpc_main.py' >/dev/null 2>&1 || true
  pkill -f 'python3.*cmd/grpc_main.py' >/dev/null 2>&1 || true
  pkill -f 'grpc_gate' >/dev/null 2>&1 || true
}

trap cleanup EXIT

echo "[INFO] clear possible old processes"
pkill -f 'python .*cmd/main.py' >/dev/null 2>&1 || true
pkill -f 'python3.*cmd/main.py' >/dev/null 2>&1 || true
pkill -f 'python .*cmd/grpc_main.py' >/dev/null 2>&1 || true
pkill -f 'python3.*cmd/grpc_main.py' >/dev/null 2>&1 || true
pkill -f 'grpc_gate' >/dev/null 2>&1 || true
sleep 1

cd "$ROOT_DIR"

echo "[INFO] start service on $GATEWAY_HTTP_ADDR -> $GATEWAY_GRPC_BACKEND_ADDR"
nohup uv run --locked python cmd/main.py >"$LOG_FILE" 2>&1 &
SERVICE_PID=$!

for _ in $(seq 1 60); do
  if grep -q "grpc-gateway listening" "$LOG_FILE" 2>/dev/null; then
    break
  fi
  sleep 1
done

if ! grep -q "gRPC server listening" "$LOG_FILE" 2>/dev/null; then
  echo "[ERROR] service did not start, see log: $LOG_FILE"
  tail -n 60 "$LOG_FILE" || true
  exit 1
fi

if curl -sS "http://$GATEWAY_HTTP_ADDR/v1/hello?name=SideRun"; then
  echo
  echo "[INFO] grpc check"
else
  echo "[ERROR] http check failed"
  exit 1
fi

UV_CACHE_DIR="$UV_CACHE_DIR" uv run --locked python cmd/grpc_client_demo.py

echo "[INFO] done"
