"""The module generator produces importable, consistently named sources."""

from __future__ import annotations

import shutil
import subprocess
import tempfile
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent


class TestModuleScaffold(unittest.TestCase):
    def test_generator_renames_usecase_and_port_files(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            workspace = Path(directory)
            shutil.copytree(ROOT / "internal", workspace / "internal")
            shutil.copytree(ROOT / "api", workspace / "api")
            shutil.copy(ROOT / "scripts" / "new_module_from_scaffold.sh", workspace)

            result = subprocess.run(
                ["/bin/bash", "new_module_from_scaffold.sh", "user_manager"],
                cwd=workspace,
                capture_output=True,
                text=True,
            )

            self.assertEqual(result.returncode, 0, result.stderr)
            module_root = workspace / "internal" / "modules" / "user_manager"
            self.assertTrue((module_root / "biz" / "usecase" / "user_manager_usecase.py").is_file())
            self.assertFalse((module_root / "biz" / "usecase" / "hello_usecase.py").exists())
            self.assertIn("user_manager_usecase", (workspace / "tests" / "test_user_manager.py").read_text())


if __name__ == "__main__":
    unittest.main()
