"""Business errors remain independent from transport frameworks."""

from __future__ import annotations

import builtins
import subprocess
import sys
import unittest


class TestErrorContract(unittest.TestCase):
    def test_business_errors_import_without_grpc(self) -> None:
        source = """
import builtins
original_import = builtins.__import__
def guarded_import(name, *args, **kwargs):
    if name == 'grpc' or name.startswith('grpc.'):
        raise ImportError('grpc must not be imported')
    return original_import(name, *args, **kwargs)
builtins.__import__ = guarded_import
from internal.pkg.errors.errors import NotFoundError
assert NotFoundError('missing').reason == 'not_found'
"""
        result = subprocess.run([sys.executable, "-c", source], capture_output=True, text=True)
        self.assertEqual(result.returncode, 0, result.stderr)


if __name__ == "__main__":
    unittest.main()
