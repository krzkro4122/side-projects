def safe_list_get(l, idx, default):
    try:
        return l[idx]
    except IndexError:
        return default


def interpret(string: str) -> list[str]:
    i = 0
    parsed = []
    part = ""
    isInside = False
    isEscaped = False

    while safe_list_get(string, i, False):
        match string[i]:
            case '"':
                if isInside:
                    if isEscaped:
                        part += string[i]
                    else:
                        parsed.append(part)
                        part = ""
                        isInside = not isInside
                else:
                    isInside = not isInside

            case other:
                if isInside:
                    part += other
        i += 1
    return parsed


def main():
    string = '"Lol",lele "Lawl\""'
    parsed_string_parts = interpret(string)
    print(parsed_string_parts)


if __name__ == "__main__":
    main()
