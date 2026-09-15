import asyncio
import grpc
import sys
from pathlib import Path

_PROJECT_ROOT = Path(__file__).resolve().parent.parent
if str(_PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(_PROJECT_ROOT))
from bootstrap import configure_import_paths
configure_import_paths(__file__)

from internal import _GENERATED_PYTHON_ROOT  # noqa: F401
from hello.v1 import hello_pb2, hello_pb2_grpc

async def run():
    async with grpc.aio.insecure_channel('localhost:50051') as channel:
        stub = hello_pb2_grpc.HelloServiceStub(channel)
        print("Calling SayHello...")
        response = await stub.SayHello(hello_pb2.SayHelloRequest(name="Antigravity"))
    print("Response received:", response.message)

if __name__ == "__main__":
    asyncio.run(run())
