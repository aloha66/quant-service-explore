class HelloUsecase:
    def __init__(self):
        # In a real module, you might inject a Repository here
        pass

    async def say_hello(self, name: str) -> str:
        name = name or "World"
        return f"Hello, {name}!"
