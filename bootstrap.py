from __future__ import annotations

import sys
from pathlib import Path


def configure_import_paths(current_file: str, include_generated: bool = False) -> Path:
    root = Path(current_file).resolve().parent.parent
    if str(root) not in sys.path:
        sys.path.insert(0, str(root))

    if include_generated:
        gen_python = root / "gen" / "python"
        if str(gen_python) not in sys.path:
            sys.path.insert(0, str(gen_python))
    return root
