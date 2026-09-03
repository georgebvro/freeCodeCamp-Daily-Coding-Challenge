def connect_three(matrix):
    # Horizontal
    for i in range(len(matrix)):
        for j in range(1, len(matrix[i]) - 1):
            if matrix[i][j] and matrix[i][j - 1] == matrix[i][j] and matrix[i][j] == matrix[i][j + 1]:
                return [matrix[i][j], [i, j - 1], [i, j], [i, j + 1]]

    # Vertical
    for i in range(1, len(matrix) - 1):
        for j in range(len(matrix[i])):
            if matrix[i][j] and matrix[i - 1][j] == matrix[i][j] and matrix[i][j] == matrix[i + 1][j]:
                return [matrix[i][j], [i - 1, j], [i, j], [i + 1, j]]

    # Diagonal
    for i in range(1, len(matrix) - 1):
        for j in range(1, len(matrix[i]) - 1):
            if matrix[i][j] and matrix[i - 1][j - 1] == matrix[i][j] and matrix[i][j] == matrix[i + 1][j + 1]:
                return [matrix[i][j], [i - 1, j - 1], [i, j], [i + 1, j + 1]]

            if matrix[i][j] and matrix[i - 1][j + 1] == matrix[i][j] and matrix[i][j] == matrix[i + 1][j - 1]:
                return [matrix[i][j], [i - 1, j + 1], [i, j], [i + 1, j - 1]]

    return []

# --- TEST SUITE ---

tests_text = r'''
1. connect_three([["", "", "", ""], ["", "", "", ""], ["", "Y", "", ""], ["Y", "R", "R", "R"]]) should return ["R", [3, 1], [3, 2], [3, 3]].
2. connect_three([["", "", "", ""], ["", "Y", "Y", ""], ["", "Y", "R", "R"], ["", "Y", "R", "R"]]) should return ["Y", [1, 1], [2, 1], [3, 1]].
3. connect_three([["", "", "Y", "R"], ["", "Y", "R", "Y"], ["", "R", "Y", "R"], ["", "R", "Y", "R"]]) should return ["R", [0, 3], [1, 2], [2, 1]].
4. connect_three([["", "Y", "", ""], ["", "Y", "Y", ""], ["", "R", "R", "Y"], ["R", "R", "Y", "R"]]) should return ["Y", [0, 1], [1, 2], [2, 3]].
5. connect_three([["Y", "R", "R", "Y"], ["R", "Y", "Y", "R"], ["Y", "R", "R", "Y"], ["R", "Y", "Y", "R"]]) should return [].
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