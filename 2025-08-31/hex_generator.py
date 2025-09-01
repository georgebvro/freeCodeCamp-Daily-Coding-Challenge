def generate_hex(color):
    outputColor = ""
    maxPossibleValue = 255

    colorObject = {
    'redComponent':   {'isDominant': None, 'hexCode': None},
    'greenComponent': {'isDominant': None, 'hexCode': None},
    'blueComponent':  {'isDominant': None, 'hexCode': None}
  }

    if color == "red" or color == "green" or color == "blue":
        colorObject[color + 'Component']['isDominant'] = True
    else:
        return "Invalid color"

    for colorComponent in colorObject:
        if colorObject[colorComponent]['isDominant']:
            colorObject[colorComponent]['hexCode'] = generate_random_color_code(True, maxPossibleValue)
            maxPossibleValue = int(colorObject[colorComponent]['hexCode'], 16) - 1
            break

    for colorComponent in colorObject:
        if not colorObject[colorComponent]['isDominant']:
            colorObject[colorComponent]['hexCode'] = generate_random_color_code(False, maxPossibleValue)
        outputColor += colorObject[colorComponent]['hexCode']

    return outputColor

def generate_random_color_code(isDominant, maxValue):
    import random

    minValue = 0
    if isDominant:
        minValue = 1

    return f"{random.randint(minValue, maxValue):02X}"

print(generate_hex("yellow"))
print(generate_hex("red"))
print(generate_hex("green"))
print(generate_hex("blue"))