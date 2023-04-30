TRANSITIONS = {
    #   CURRENT           NEW STATE           ACTION TO TAKE
    'look_for_string': {
        '"':        ('in_string',       'start_new_string'),
        'default':  ('look_for_string', 'ignore')
    },
    'in_string': {
        '"':        ('look_for_string', 'finish_current_string'),
        '\\':       ('copy_next_char',  'ignore'),
        'default':  ('in_string',       'add_current_to_string')
    },
    'copy_next_char': {
        'default':  ('in_string',       'add_current_to_string')
    }
}

# NON-GENERIC
string = r'"Lol",lele "Lawl\"\" "    \\'
state = 'look_for_string'
result = []
part = ""
for char in string:
    state, action = TRANSITIONS[state].get(char) or TRANSITIONS[state]['default']
    match action:
        case 'ignore':
            ...
        case 'start_new_string':
            part = ""
        case 'add_current_to_string':
            part += char
        case 'finish_current_string':
            result.append(part)

print(result)

# GENERIC
class FSM:
    def __init__(self, transitions, initial_state) -> None:
        self.transitions = transitions
        self.state = initial_state

    def accept(self, event):
        self.state, action = self.transitions[self.state].get(event) or self.transitions[self.state]['default']
        return action

fsm = FSM(TRANSITIONS, 'look_for_string')
result = []
part = ""
for char in string:
    action = fsm.accept(char)
    match action:
        case 'ignore':
            ...
        case 'start_new_string':
            part = ""
        case 'add_current_to_string':
            part += char
        case 'finish_current_string':
            result.append(part)

print(result)