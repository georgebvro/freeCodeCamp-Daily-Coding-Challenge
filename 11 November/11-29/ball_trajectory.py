def get_next_location(matrix):
    previous_location = None
    current_location = None

    for i, row in enumerate(matrix):
        try:
            previous_location_index = row.index(1)
        except ValueError:
            pass
        else:
            previous_location = (i, previous_location_index)

        try:
            current_location_index = row.index(2)
        except ValueError:
            pass
        else:
            current_location = (i, current_location_index)

        if (previous_location and current_location):
            break

    horizontal_direction = current_location[1] - previous_location[1]
    vertical_direction = current_location[0] - previous_location[0]

    next_horizontal_position = current_location[1] + horizontal_direction
    next_vertical_position = current_location[0] + vertical_direction

    if next_horizontal_position >= len(matrix[0]):
        next_horizontal_position -= 2

    elif next_horizontal_position < 0:
        next_horizontal_position += 2

    if next_vertical_position >= len(matrix):
        next_vertical_position -= 2

    elif next_vertical_position < 0:
        next_vertical_position += 2

    return [next_vertical_position, next_horizontal_position]

# --- TEST SUITE ---

tests_text = '''
1. get_next_location([[0,0,0,0], [0,0,0,0], [0,1,2,0], [0,0,0,0]]) should return [2, 3].
2. get_next_location([[0,0,0,0], [0,0,1,0], [0,2,0,0], [0,0,0,0]]) should return [3, 0].
3. get_next_location([[0,2,0,0], [1,0,0,0], [0,0,0,0], [0,0,0,0]]) should return [1, 2].
4. get_next_location([[0,0,0,0], [0,0,0,0], [2,0,0,0], [0,1,0,0]]) should return [1, 1].
5. get_next_location([[0,0,0,0], [0,0,0,0], [0,0,1,0], [0,0,0,2]]) should return [2, 2].
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
        function_call_output = eval(test['function_call'])
        test_output = eval(test['output'])
        
        if function_call_output == test_output:
            print(f"{test['number']}.✅ PASS - Function Call:\n{test['function_call']}")
        else:
            print(f"{test['number']}.❌ FAIL - Function Call:\n{test['function_call']}\nExpected:\n{test_output}\nGot:\n{function_call_output}")
            all_passed = False
            fail_count += 1

    print("----------------------------");

    if (all_passed):
        print("🎉 SUCCESS: All tests PASSED.");
    else:
        print(f"⚠️ WARNING: {fail_count}/{len(test_data)} tests FAILED.");

run_tests(test_data)