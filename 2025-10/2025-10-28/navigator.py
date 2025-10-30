def navigate(commands):
    import re

    history = ["Home"]
    cursor = 0

    for command in commands:
        groups_dict = re.match(r"(?P<action>Visit|Back|Forward) ?(?P<page>.*)", command)

        match groups_dict['action']:
            case "Visit":
                history = history[:cursor + 1]
                history.append(groups_dict['page'])
                cursor += 1

            case "Back":
                if cursor > 0:
                    cursor -= 1
                
            case "Forward":
                if cursor < len(history) - 1:
                    cursor += 1

    return history[cursor]

print(navigate(["Visit About Us", "Back", "Forward"]))
print(navigate(["Forward"]))
print(navigate(["Back"]))
print(navigate(["Visit About Us", "Visit Gallery"]))
print(navigate(["Visit About Us", "Visit Gallery", "Back", "Back"]))
print(navigate(["Visit About", "Visit Gallery", "Back", "Visit Contact", "Forward"]))
print(navigate(["Visit About Us", "Visit Visit Us", "Forward", "Visit Contact Us", "Back"]))