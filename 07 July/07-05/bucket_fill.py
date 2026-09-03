import copy

def bucket_fill(grid, pos, new_value):
    updated_grid = copy.copy(grid)
    row, col = pos
    start_value = grid[row][col]

    updated_grid[row][col] = new_value

    if row - 1 >= 0 and grid[row - 1][col] == start_value:
        updated_grid = bucket_fill(updated_grid, [row - 1, col], new_value)

    if row + 1 < len(grid) and grid[row + 1][col] == start_value:
        updated_grid = bucket_fill(updated_grid, [row + 1, col], new_value)

    if col - 1 >= 0 and grid[row][col - 1] == start_value:
        updated_grid = bucket_fill(updated_grid, [row, col - 1], new_value)

    if col + 1 < len(grid[row]) and grid[row][col + 1] == start_value:
        update_grid = bucket_fill(updated_grid, [row, col + 1], new_value)

    return updated_grid

# --- TEST SUITE ---

tests_text = r'''
1. bucket_fill([["R", "G"], ["R", "G"]], [0, 1], "B") should return [["R", "B"], ["R", "B"]].
2. bucket_fill([["Y", "G", "G"], ["Y", "Y", "Y"], ["B", "Y", "R"]], [1, 2], "B") should return [["B", "G", "G"], ["B", "B", "B"], ["B", "B", "R"]].
3. bucket_fill([["O", "O", "P"], ["P", "O", "O"], ["P", "P", "O"]], [2, 0], "R") should return [["O", "O", "P"], ["R", "O", "O"], ["R", "R", "O"]].
4. bucket_fill([["T", "T", "R", "T"], ["R", "T", "R", "T"], ["R", "T", "R", "T"], ["T", "T", "T", "T"]], [0, 3], "Y") should return [["Y", "Y", "R", "Y"], ["R", "Y", "R", "Y"], ["R", "Y", "R", "Y"], ["Y", "Y", "Y", "Y"]].
5. bucket_fill([["G", "B", "G", "B"], ["R", "B", "B", "G"], ["B", "G", "B", "R"], ["B", "G", "G", "B"]], [2, 2], "G") should return [["G", "G", "G", "B"], ["R", "G", "G", "G"], ["B", "G", "G", "R"], ["B", "G", "G", "B"]].
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