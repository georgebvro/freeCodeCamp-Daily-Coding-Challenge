def find_signal(grid):
    from functools import reduce
    import json

    potential_locations = []

    def check_location(i, j):
        return True if 0 <= i < len(grid) and 0 <= j < len(grid[i]) and grid[i][j] == 0 else False

    for i in range(len(grid)):
        for j in range(len(grid[i])):
            if grid[i][j] != 0:
                new_tower = []

                if check_location(i, j - grid[i][j]):
                    new_tower.append([i, j - grid[i][j]])

                if check_location(i, j + grid[i][j]):
                    new_tower.append([i, j + grid[i][j]])

                if check_location(i - grid[i][j], j):
                    new_tower.append([i - grid[i][j], j])

                if check_location(i + grid[i][j], j):
                    new_tower.append([i + grid[i][j], j])

                if check_location(i - grid[i][j], j - grid[i][j]):
                    new_tower.append([i - grid[i][j], j - grid[i][j]])

                if check_location(i + grid[i][j], j + grid[i][j]):
                    new_tower.append([i + grid[i][j], j + grid[i][j]])

                if check_location(i + grid[i][j], j - grid[i][j]):
                    new_tower.append([i + grid[i][j], j - grid[i][j]])

                if check_location(i - grid[i][j], j + grid[i][j]):
                    new_tower.append([i - grid[i][j], j + grid[i][j]])

                potential_locations.append(set([json.dumps(coords) for coords in new_tower]))

    common_location = reduce(lambda intersect, set: intersect & set, potential_locations)

    groups_dict = re.match(r"^\[(?P<row>\d+), (?P<column>\d+)]$", [coords for coords in common_location][0]).groupdict()

    return [int(groups_dict['row']), int(groups_dict['column'])]

# --- TEST SUITE ---

tests_text = r'''
1. find_signal([[0, 0, 1], [0, 1, 0], [0, 0, 1]]) should return [1, 2].
2. find_signal([[0, 2, 0], [1, 0, 0], [0, 0, 1]]) should return [2, 1].
3. find_signal([[0, 0, 2, 0], [0, 0, 0, 0], [2, 0, 0, 0], [0, 0, 0, 1]]) should return [2, 2].
4. find_signal([[0, 3, 0, 0, 0], [0, 0, 0, 0, 2], [0, 0, 0, 0, 0], [4, 0, 0, 0, 0], [0, 0, 0, 0, 0]]) should return [3, 4].
5. find_signal([[3, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 2, 0, 0, 0, 2]]) should return [3, 3].
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