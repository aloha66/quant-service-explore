"""Import contracts that every normal project entry point must satisfy."""

from __future__ import annotations

import subprocess
import sys
import unittest


class TestImportContracts(unittest.TestCase):
    def test_service_and_injector_import_without_bootstrap_side_effects(self) -> None:
        result = subprocess.run(
            [
                sys.executable,
                "-c",
                (
                    "from internal.conf.injector import AppRuntime; "
                    "from internal.modules.hello.service import HelloService"
                ),
            ],
            capture_output=True,
            text=True,
        )

        self.assertEqual(result.returncode, 0, result.stderr)


if __name__ == "__main__":
    unittest.main()
