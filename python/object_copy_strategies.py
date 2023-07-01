import copy
import jsonpickle


class Deployment():
    def __init__(self) -> None:
        self.scaling_groups = {
            "properties": {
                "some": "props",
                "lol": 1
            }
        }

class Context():
    def __init__(self) -> None:
        self.deployment = Deployment()

ctx = Context()
ctx_assigned = ctx
ctx_shallow_copy = copy.copy(ctx)
ctx_deep_copy = copy.deepcopy(ctx)

print(ctx, jsonpickle.encode(ctx))
print(ctx_assigned, jsonpickle.encode(ctx_assigned))
print(ctx_shallow_copy, jsonpickle.encode(ctx_shallow_copy))
print(ctx_deep_copy, jsonpickle.encode(ctx_deep_copy))

ctx.deployment.scaling_groups["properties"] = 10

print(ctx, jsonpickle.encode(ctx))
print(ctx_assigned, jsonpickle.encode(ctx_assigned))
print(ctx_shallow_copy, jsonpickle.encode(ctx_shallow_copy))
print(ctx_deep_copy, jsonpickle.encode(ctx_deep_copy))