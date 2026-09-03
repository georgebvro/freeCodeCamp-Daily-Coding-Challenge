def is_in_crossword(char):
    GRID = [
        [0, 1, 0, 0, 0, 0, 0, 1],
        [0, 1, 1, 0, 1, 1, 1, 1],
        [0, 1, 0, 0, 0, 1, 0, 0],
        [0, 1, 1, 0, 0, 1, 0, 1],
        [0, 1, 0, 1, 0, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 0],
        [0, 1, 1, 0, 1, 0, 0, 0],
        [1, 0, 1, 0, 1, 1, 1, 0],
    ]
    grid_all_possible_numbers = []

    for row in GRID:
        grid_all_possible_numbers.extend(["".join(map(str, row)), "".join(map(str, reversed(row)))])

    for j in range(len(GRID[0])):
        number = "".join([str(row[j]) for row in GRID])

        grid_all_possible_numbers.extend([number, number[::-1]])

    return any(number == "{:08b}".format(ord(char)) for number in grid_all_possible_numbers)

# --- TEST SUITE ---

tests_text = r'''
1. is_in_crossword("I") should return True.
2. is_in_crossword("D") should return True.
3. is_in_crossword("0") should return True.
4. is_in_crossword("u") should return True.
5. is_in_crossword("Y") should return False.
6. is_in_crossword("p") should return False.
7. is_in_crossword("1") should return False.
8. is_in_crossword("Q") should return False.
'''

import re

tests_regex = re.compile(r"(?P<number>\d+)\.\s(?P<function_call>.+) should return (?P<output>.+?)\.?$", re.MULTILINE)
test_data = [item.groupdict() for item in re.finditer(tests_regex, tests_text)]

def run_tests(test_data):
    print("——————————————————————————",
        "\n🧪 Starting Verification...",
        "\n——————————————————————————")

    fail_count = 0

    for test in test_data:
        function_call_output = eval(test['function_call'])
        test_output = eval(test['output'])
        
        if function_call_output == test_output:
            print(f"{test['number']}.✅ PASS - Function Call:\n{test['function_call']}")
        else:
            print(f"{test['number']}.❌ FAIL - Function Call:\n{test['function_call']}\nExpected:\n{test_output}\nGot:\n{function_call_output}")
            fail_count += 1

        print("————————————————————————————")

    print(
        f"⚠️ WARNING: {fail_count}/{len(test_data)} tests FAILED." if fail_count
        else "🎉 SUCCESS: All tests PASSED."
    )

run_tests(test_data)