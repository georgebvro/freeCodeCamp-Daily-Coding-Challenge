def solve_magic_square(grid):
    global_line_sum = None

    def check_line_sum(line):
        nonlocal global_line_sum

        if all(number != 0 for number in line):
            current_line_sum = sum(line)

            if global_line_sum == None:
                global_line_sum = current_line_sum
            else:
                if global_line_sum != current_line_sum:
                    return "impossible"

    for row in grid:
        if check_line_sum(row) == "impossible":
            return "impossible"

    for j in range(len(grid[0])):
        column = []

        for i in range(len(grid)):
            column.append(grid[i][j])

        if check_line_sum(column) == "impossible":
            return "impossible"

    for row in grid:
        if any(number == 0 for number in row):
            return global_line_sum - sum(row)

# --- TEST SUITE ---

tests_text = r'''
1. solve_magic_square([[2, 7, 6], [9, 0, 1], [4, 3, 8]]) should return 5.
2. solve_magic_square([[0, 14, 12], [18, 10, 2], [8, 6, 16]]) should return 4.
3. solve_magic_square([[12, 17, 16], [19, 0, 10], [14, 13, 18]]) should return "impossible".
4. solve_magic_square([[15, 35, 31], [43, 27, 11], [23, 19, 0]]) should return 39.
5. solve_magic_square([[26, 41, 14], [47, 35, 0], [32, 29, 44]]) should return "impossible".
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