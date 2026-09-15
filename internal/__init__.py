"""Application package bootstrap.

Generated protobuf modules are a first-class runtime dependency.  The Python
generators import them from their protobuf package name (for example
``hello.v1``), so make that generated source root available whenever the
application package is imported.
"""

from __future__ import annotations

import sys
from pathlib import Path


_GENERATED_PYTHON_ROOT = Path(__file__).resolve().parent.parent / "gen" / "python"
if str(_GENERATED_PYTHON_ROOT) not in sys.path:
    sys.path.insert(0, str(_GENERATED_PYTHON_ROOT))
