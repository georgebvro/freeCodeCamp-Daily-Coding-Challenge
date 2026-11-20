import copy

def bucket_fill(grid, target_color):
    updated_grid = copy.copy(grid)

    def find_cell_to_change(color_to_check):
        for i in range(len(updated_grid)):
            for j in range(len(updated_grid[i])):
                if updated_grid[i][j] != color_to_check:
                    return [i, j]

    def paint(pos, color):
        row, col = pos
        original_color = updated_grid[row][col]
        updated_grid[row][col] = color

        if row - 1 >= 0 and updated_grid[row - 1][col] == original_color:
            paint([row - 1, col], color)

        if row + 1 < len(updated_grid) and updated_grid[row + 1][col] == original_color:
            paint([row + 1, col], color)

        if col - 1 >= 0 and updated_grid[row][col - 1] == original_color:
            paint([row, col - 1], color)

        if col + 1 < len(updated_grid[row]) and updated_grid[row][col + 1] == original_color:
            paint([row, col + 1], color)

    clicks = 0

    while True:
        start_cell_to_change = find_cell_to_change(target_color)

        if (start_cell_to_change):
            paint(start_cell_to_change, target_color)
            clicks += 1
        else:
            break

    return clicks

# --- TEST SUITE ---

tests_text = r'''
1. bucket_fill([["R", "R"], ["R", "R"]], "G") should return 1.
2. bucket_fill([["B", "B", "B"], ["B", "B", "B"], ["B", "B", "B"]], "B") should return 0.
3. bucket_fill([["G", "Y", "Y"], ["G", "Y", "G"], ["Y", "Y", "G"]], "R") should return 3.
4. bucket_fill([["G", "G", "P", "Y"], ["O", "P", "P", "P"], ["O", "O", "P", "G"], ["G", "O", "O", "G"]], "P") should return 5.
5. bucket_fill([["G", "G", "C", "C", "O"], ["B", "Y", "B", "Y", "O"], ["B", "J", "O", "J", "B"], ["G", "Y", "Y", "Y", "B"], ["G", "P", "P", "G", "G"]], "Y") should return 12.
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