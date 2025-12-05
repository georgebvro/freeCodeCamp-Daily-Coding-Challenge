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

# --- TEST SUITE ---

tests_text = '''
1. generate_hex("yellow") should return "Invalid color".
2. generate_hex("red") should return a six-character string.
3. generate_hex("red") should return a valid six-character hex color code.
4. generate_hex("red") should return a valid hex color with a higher red value than other colors.
5. Calling generate_hex("red") twice should return two different hex color values where red is dominant.
6. Calling generate_hex("green") twice should return two different hex color values where green is dominant.
7. Calling generate_hex("blue") twice should return two different hex color values where blue is dominant.
'''

import re

tests_regex = re.compile(r"(?P<number>\d+)\.\s(?P<function_call>.+) should return (?P<output>.+)\.$", re.MULTILINE)
test_data = [item.groupdict() for item in re.finditer(tests_regex, tests_text)]

def run_tests(test_data):
    print("--------------------------")
    print("🧪 Starting Verification...")
    print("--------------------------")

    all_passed = True
    fail_count = 0

    for test in test_data:
        match test['number']:
            case "1":
                function_call_output = eval(test['function_call'])
                test_output = eval(test['output'])
                assertion = function_call_output == test_output
                
                if assertion:
                    print(f"{test['number']}.✅ PASS - Function Call:\n{test['function_call']}")
                else:
                    print(f"{test['number']}.❌ FAIL - Function Call:\n{test['function_call']}\nExpected:\n{test_output}\nGot:\n{function_call_output}")
                    all_passed = False
                    fail_count += 1

            case "2":
                function_call_output = eval(test['function_call'])
                expected = 6
                got = len(function_call_output)
                assertion = expected == got

                if assertion:
                    print(f"{test['number']}.✅ PASS - Function Call:\n{test['function_call']}")
                else:
                    print(f"{test['number']}.❌ FAIL - Function Call:\n{test['function_call']}\nExpected:\n{expected}\nGot:\n{got}")
                    all_passed = False
                    fail_count += 1

            case "3":
                function_call_output = eval(test['function_call'])
                assertion = re.compile("^[\dA-F]{6}$", re.IGNORECASE).match(function_call_output)
                
                if assertion:
                    print(f"{test['number']}.✅ PASS - Function Call:\n{test['function_call']}")
                else:
                    print(f"{test['number']}.❌ FAIL - Function Call:\n{test['function_call']}\nExpected:\n{test['output']}\nGot:\n{function_call_output}")
                    all_passed = False
                    fail_count += 1

            case "4":
                function_call_output = eval(test['function_call'])
                assertion1 = re.compile(r"^[\dA-F]{6}$", re.IGNORECASE).match(function_call_output)
                assertion2 = check_dominant(function_call_output, re.search("(red|green|blue)", test['function_call'])[0])

                if assertion1 and assertion2:
                    print(f"{test['number']}.✅ PASS - Function Call:\n{test['function_call']}")
                else:
                    print(f"{test['number']}.❌ FAIL - Function Call:\n{test['function_call']}\nExpected:\n{test['output']}\nGot:\n{function_call_output}")
                    all_passed = False
                    fail_count += 1

            case "5" | "6" | "7":
                function_call_output_1 = eval(re.search(r"\w+\(.*\)", test['function_call'])[0])
                function_call_output_2 = eval(re.search(r"\w+\(.*\)", test['function_call'])[0])
                dominant_color = re.search("(red|green|blue)", test['function_call'])[0]
                assertion_1 = function_call_output_1 != function_call_output_2
                assertion_2 = check_dominant(function_call_output_1, dominant_color) and check_dominant(function_call_output_2, dominant_color)

                if assertion1 and assertion2:
                    print(f"{test['number']}.✅ PASS - Function Call:\n{test['function_call']}")
                else:
                    print(f"{test['number']}.❌ FAIL - Function Call:\n{test['function_call']}\nExpected:\n{test['output']}\nGot:\n{function_call_output_1}, {function_call_output_2}")
                    all_passed = False
                    fail_count += 1

    print("----------------------------");

    if (all_passed):
        print("🎉 SUCCESS: All tests PASSED.");
    else:
        print(f"⚠️ WARNING: {fail_count}/{len(test_data)} tests FAILED.");

def check_dominant(hex_color_code, dominant):
    regex = re.compile(r"^(?P<red>[\dA-F]{2})(?P<green>[\dA-F]{2})(?P<blue>[\dA-F]{2})$", re.IGNORECASE)
    groups_dict = re.match(regex, hex_color_code).groupdict()
    red = int(groups_dict['red'], 16)
    green = int(groups_dict['green'], 16)
    blue = int(groups_dict['blue'], 16)
    
    match dominant:
        case "red":
            return red > green and red > blue

        case "green":
            return green > red and green > blue

        case "blue":
            return blue > red and blue > green

        case _:
            print("Invalid dominant color")

run_tests(test_data)