def generate_hex(color):
    output_color = ""
    max_possible_value = 255

    color_object = {
    'red_component':   {'is_dominant': None, 'hex_code': None},
    'green_component': {'is_dominant': None, 'hex_code': None},
    'blue_component':  {'is_dominant': None, 'hex_code': None}
  }

    if color == "red" or color == "green" or color == "blue":
        color_object[color + '_component']['is_dominant'] = True
    else:
        return "Invalid color"

    for color_component in color_object:
        if color_object[color_component]['is_dominant']:
            color_object[color_component]['hex_code'] = generate_random_color_code(True, max_possible_value)
            max_possible_value = int(color_object[color_component]['hex_code'], 16) - 1
            break

    for color_component in color_object:
        if not color_object[color_component]['is_dominant']:
            color_object[color_component]['hex_code'] = generate_random_color_code(False, max_possible_value)
        output_color += color_object[color_component]['hex_code']

    return output_color

def generate_random_color_code(is_dominant, max_value):
    import random

    min_value = 0
    if is_dominant:
        min_value = 1

    return f"{random.randint(min_value, max_value):02X}"

print(generate_hex("yellow"))
print(generate_hex("red"))
print(generate_hex("green"))
print(generate_hex("blue"))