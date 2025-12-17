from copy import deepcopy

def game_of_life(grid):
    rows = len(grid)
    cols = len(grid[0])
    next_state = deepcopy(grid)

    for i in range(rows):
        for j in range(cols):
            neighbor_sum = (
                  cell_state(i - 1, j - 1, rows, cols, grid)
                + cell_state(i - 1, j    , rows, cols, grid)
                + cell_state(i - 1, j + 1, rows, cols, grid)
                + cell_state(i    , j - 1, rows, cols, grid)
                + cell_state(i    , j + 1, rows, cols, grid)
                + cell_state(i + 1, j - 1, rows, cols, grid)
                + cell_state(i + 1, j    , rows, cols, grid)
                + cell_state(i + 1, j + 1, rows, cols, grid)
                )

            if grid[i][j] == 1 and (neighbor_sum < 2 or neighbor_sum > 3):
                next_state[i][j] = 0

            if grid[i][j] == 0 and neighbor_sum == 3:
                next_state[i][j] = 1

    return next_state

def cell_state(row_index, col_index, rows, cols, grid):
    if (0 <= row_index < rows and 0 <= col_index < cols):
        return grid[row_index][col_index]
    else:
        return 0

# --- TEST SUITE ---

tests_text = '''
1. game_of_life([[0, 1, 0], [0, 1, 1], [1, 1, 0]]) should return [[0, 1, 1], [0, 0, 1], [1, 1, 1]].
2. game_of_life([[1, 1, 0, 0], [1, 0, 1, 0], [0, 1, 1, 1], [0, 0, 1, 0]]) should return [[1, 1, 0, 0], [1, 0, 0, 1], [0, 0, 0, 1], [0, 1, 1, 1]].
3. game_of_life([[1, 0, 0], [0, 1, 0], [0, 0, 1]]) should return [[0, 0, 0], [0, 1, 0], [0, 0, 0]].
4. game_of_life([[0, 1, 1, 0], [1, 1, 0, 1], [0, 1, 1, 0], [0, 0, 1, 0]]) should return [[1, 1, 1, 0], [1, 0, 0, 1], [1, 0, 0, 1], [0, 1, 1, 0]].
'''

import re

tests_regex = re.compile(r"(?P<number>\d+)\.\s(?P<function_call>.+) should return (?P<output>.+?)\.?$", re.MULTILINE)
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