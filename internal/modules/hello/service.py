import grpc
from hello.v1 import hello_pb2, hello_pb2_grpc
from internal.modules.hello.biz.usecase.hello_usecase import HelloUsecase
from internal.pkg.context.trace import get_trace_id

class HelloService(hello_pb2_grpc.HelloServiceServicer):
    def __init__(self, usecase: HelloUsecase):
        self.usecase = usecase

    async def SayHello(self, request: hello_pb2.SayHelloRequest, context: grpc.aio.ServicerContext) -> hello_pb2.SayHelloResponse:
        message = await self.usecase.say_hello(request.name)
        return hello_pb2.SayHelloResponse(message=message, request_id=get_trace_id())

def create_hello_handler(usecase: HelloUsecase) -> HelloService:
    return HelloService(usecase)
