#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

export GATEWAY_HTTP_ADDR="${GATEWAY_HTTP_ADDR:-:8000}"
export GATEWAY_GRPC_BACKEND_ADDR="${GATEWAY_GRPC_BACKEND_ADDR:-127.0.0.1:50051}"

cd "$ROOT/gateway"
exec "${GO:-go}" run -mod=readonly ./cmd/grpc_gateway
