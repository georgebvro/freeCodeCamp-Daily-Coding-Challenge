def spiral_matrix(matrix):
    THRESHOLD = 8 # if there are at least 8 elements at the edge of the matrix, it means there are more elements in the interior of the matrix

    top = matrix[0]
    right = [row[-1] for row in matrix][1:]
    bottom = matrix[-1][-2::-1]
    left = [row[0] for row in matrix][-2:0:-1]

    array = top + right + bottom + left

    return array + spiral_matrix([row[1:-1] for row in matrix[1:-1]]) if len(array) >= THRESHOLD \
        else array

# --- TEST SUITE ---

tests_text = r'''
1. spiral_matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) should return [1, 2, 3, 6, 9, 8, 7, 4, 5].
2. spiral_matrix([["a", "b", "c", "d"], ["l", "m", "n", "e"], ["k", "p", "o", "f"], ["j", "i", "h", "g"]]) should return ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p"].
3. spiral_matrix([[True, False, False], [False, True, True], [False, True, False], [True, True, False]]) should return [True, False, False, True, False, False, True, True, False, False, True, True].
4. spiral_matrix([[25, 24, 23, 22, 21], [10, 9, 8, 7, 20], [11, 2, 1, 6, 19], [12, 3, 4, 5, 18], [13, 14, 15, 16, 17]]) should return [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1].
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