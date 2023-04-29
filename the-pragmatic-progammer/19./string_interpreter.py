from __future__ import annotations
from typing import Optional, Protocol


class Context():
    def __init__(self, state: State) -> None:
        self.index = 0
        self.string = ""
        self.transition_to(state)

    def transition_to(self, state: State):
        print(f"Context: Transition to {type(state).__name__}")
        self._state = state
        self._state.context = self


class State(Protocol):

    _context: Context
    _index: int

    @property
    def context(self) -> Context:
        return self._context

    @context.setter
    def context(self, context: Context) -> None:
        self._context = context

    def run(self) -> Optional[str]:
        ...


class LookingForString(State):

    def run(self) -> Optional[str]:
        match self.context.string[self.context.index]:
            case '"':
                self.context.transition_to(InString())
        return []
    `   `

class InString(State):

    def run(self) -> Optional[str]:
        print("Handling 1...")


class CopyNextCharacter(State):

    def run(self) -> Optional[str]:
        print("Handling 1...")


class Interpeter(Context):
    def _parse(self) -> list[str]:
        parsed = []
        while len(self.string) > self.index:
            if self._state.run() 

        return parsed

    def _run(self) -> list[str]:
        self.transition_to(LookingForString())
        return self._parse()

    def interpret(self, string: str) -> list[str]:
        assert isinstance(string, str), f"Wrong input type. Needed a str but got: {type(string)}"
        self.string = string
        return [] if not self.string else self._run()


if __name__ == "__main__":
    context = Context(LookingForString())
    context.request1()
    context.request2()
