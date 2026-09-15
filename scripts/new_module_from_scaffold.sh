#!/usr/bin/env bash
set -euo pipefail

if [ "$#" -ne 1 ]; then
  echo "Usage: $0 <new_module_name>"
  echo "Example: $0 user_manager"
  exit 1
fi

NEW_MODULE="$1"
if ! [[ "$NEW_MODULE" =~ ^[a-z][a-z0-9_]*$ ]]; then
  echo "Error: module name must match ^[a-z][a-z0-9_]*$"
  exit 1
fi

SRC_MODULE="hello"
SRC_DIR="internal/modules/${SRC_MODULE}"
DST_DIR="internal/modules/${NEW_MODULE}"
SRC_PROTO_DIR="api/proto/${SRC_MODULE}/v1"
DST_PROTO_DIR="api/proto/${NEW_MODULE}/v1"

if [ ! -d "$SRC_DIR" ]; then
  echo "Error: scaffold source not found: $SRC_DIR"
  exit 1
fi

if [ -e "$DST_DIR" ]; then
  echo "Error: target module already exists: $DST_DIR"
  exit 1
fi

if [ -e "$DST_PROTO_DIR" ]; then
  echo "Error: target proto path already exists: $DST_PROTO_DIR"
  exit 1
fi

if ! command -v perl >/dev/null 2>&1; then
  echo "Error: perl is required before creating a module."
  exit 1
fi

snake_to_pascal() {
  local s="$1"
  local out=""
  local part
  IFS='_' read -r -a parts <<< "$s"
  for part in "${parts[@]}"; do
    first="$(printf '%s' "${part%${part#?}}" | tr '[:lower:]' '[:upper:]')"
    out+="${first}${part#?}"
  done
  echo "$out"
}

NEW_MODULE_PASCAL="$(snake_to_pascal "$NEW_MODULE")"
SRC_MODULE_PASCAL="Hello"

echo "[1/5] Copy module scaffold"
cp -R "$SRC_DIR" "$DST_DIR"

echo "[2/5] Replace module identifiers in files"
while IFS= read -r -d '' file; do
  # Use perl for safe in-place replacement
  perl -pi -e "s/${SRC_MODULE}/${NEW_MODULE}/g; s/${SRC_MODULE_PASCAL}/${NEW_MODULE_PASCAL}/g" "$file"
done < <(find "$DST_DIR" -type f -name '*.py' -print0)
mv "$DST_DIR/biz/usecase/hello_usecase.py" "$DST_DIR/biz/usecase/${NEW_MODULE}_usecase.py"

echo "[3/5] Copy and update proto"
mkdir -p "$DST_PROTO_DIR"
cp "$SRC_PROTO_DIR/${SRC_MODULE}.proto" "$DST_PROTO_DIR/${NEW_MODULE}.proto"
perl -pi -e "s/${SRC_MODULE}/${NEW_MODULE}/g; s/${SRC_MODULE_PASCAL}/${NEW_MODULE_PASCAL}/g" "$DST_PROTO_DIR/${NEW_MODULE}.proto"

echo "[4/5] Create test scaffold"
mkdir -p "tests"
cat > "tests/test_${NEW_MODULE}.py" <<PY
import unittest
from internal.modules.${NEW_MODULE}.biz.usecase.${NEW_MODULE}_usecase import ${NEW_MODULE_PASCAL}Usecase
from internal.modules.${NEW_MODULE}.service import ${NEW_MODULE_PASCAL}Service

class Test${NEW_MODULE_PASCAL}(unittest.IsolatedAsyncioTestCase):
    def setUp(self):
        self.usecase = ${NEW_MODULE_PASCAL}Usecase()

    async def test_service_can_be_constructed(self):
        self.assertIsInstance(${NEW_MODULE_PASCAL}Service(self.usecase), ${NEW_MODULE_PASCAL}Service)

if __name__ == "__main__":
    unittest.main()
PY

echo "[5/5] Done"
echo "Created module: $DST_DIR"
echo "Created proto:  $DST_PROTO_DIR/${NEW_MODULE}.proto"
echo "Created test:   tests/test_${NEW_MODULE}.py"
echo
echo "Next steps:"
echo "1) Run: make proto"
echo "2) Wire service into internal/conf/injector.py and internal/server/grpc/servicer.py"
echo "3) Register ${NEW_MODULE_PASCAL}ServiceHandlerFromEndpoint in gateway/cmd/grpc_gateway/main.go"
echo "4) Add biz/port contracts only when the usecase needs an external capability; if models are added, use internal.data.base.Base and create an Alembic revision"
echo "5) Run direct gRPC and HTTP smoke tests, then: uv run python -m unittest tests/test_${NEW_MODULE}.py -v"
