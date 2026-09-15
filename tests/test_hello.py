import unittest
import asyncio
from internal.modules.hello.biz.usecase.hello_usecase import HelloUsecase

class TestHello(unittest.IsolatedAsyncioTestCase):
    def setUp(self):
        self.usecase = HelloUsecase()

    async def test_say_hello_with_name(self):
        message = await self.usecase.say_hello("Antigravity")
        self.assertEqual(message, "Hello, Antigravity!")

    async def test_say_hello_default(self):
        message = await self.usecase.say_hello("")
        self.assertEqual(message, "Hello, World!")

if __name__ == "__main__":
    unittest.main()
