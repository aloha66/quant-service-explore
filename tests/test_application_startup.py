"""Application-startup behavior that must not leave partial services running."""

from __future__ import annotations

import importlib.util
from pathlib import Path
from types import SimpleNamespace
from unittest import TestCase
from unittest.mock import patch

_MAIN_PATH = Path(__file__).resolve().parent.parent / "cmd" / "main.py"
_SPEC = importlib.util.spec_from_file_location("scaffold_main", _MAIN_PATH)
assert _SPEC and _SPEC.loader
main = importlib.util.module_from_spec(_SPEC)
_SPEC.loader.exec_module(main)


class TestAutoMigration(TestCase):
    def test_failed_migration_stops_startup_without_stamping_schema(self) -> None:
        for stderr in ("relation required_item does not exist", "DuplicateTableError: existing_item"):
            with self.subTest(stderr=stderr):
                failed_migration = SimpleNamespace(returncode=1, stdout="", stderr=stderr)
                with (
                    patch.dict(main.os.environ, {"APP_ENV": "local", "POSTGRES_DSN": "postgresql://test"}, clear=True),
                    patch.object(main.subprocess, "run", return_value=failed_migration) as run,
                    self.assertRaisesRegex(SystemExit, "Auto migration failed"),
                ):
                    main._run_local_auto_migration()

                self.assertEqual(run.call_count, 1)
                self.assertIn("upgrade", run.call_args.args[0])
                self.assertNotIn("stamp", run.call_args.args[0])


if __name__ == "__main__":
    import unittest

    unittest.main()
