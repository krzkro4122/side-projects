def safe_list_get(l, idx, default):
    try:
        return l[idx]
    except IndexError:
        return default


def interpret(string: str) -> list[str]:
    parsed = []
    part = ""
    isInside = False
    isEscaped = False

    for i in range(len(string)):
        match string[i]:

            case '"':
                if isInside:
                    if isEscaped:
                        part += '"'
                    else:
                        if part:
                            parsed.append(part)
                            part = ""
                if not isEscaped:
                    isInside = not isInside

            case '\\':
                if safe_list_get(string, i + 1, False) == '"':
                    isEscaped = True
                    continue

            case other:
                if isInside:
                    part += other

        isEscaped = False
    return parsed


def main():
    string = r'"Lol",lele "Lawl\"\" "    \\'
    parsed_string_parts = interpret(string)
    print(parsed_string_parts)


if __name__ == "__main__":
    main()
