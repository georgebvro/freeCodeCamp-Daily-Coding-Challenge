def transpose(matrix):
    transposed_matrix = []

    for j in range(len(matrix[0])):
        transposed_row = [];
    
        for i in range(len(matrix)):
            transposed_row.append(matrix[i][j])
            
        transposed_matrix.append(transposed_row)

    return transposed_matrix

# --- TEST SUITE ---

tests_text = r'''
1. transpose([[1, 2, 3], [4, 5, 6]]) should return [[1, 4], [2, 5], [3, 6]].
2. transpose([[1, 2], [3, 4], [5, 6]]) should return [[1, 3, 5], [2, 4, 6]].
3. transpose([[1, 2], [3, 4], [5, 6], [7, 8]]) should return [[1, 3, 5, 7], [2, 4, 6, 8]].
4. transpose([["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"], ["j", "k", "l"]]) should return [["a", "d", "g", "j"], ["b", "e", "h", "k"], ["c", "f", "i", "l"]].
5. transpose([[True, False, True, False], [False, True, False, True], [True, True, False, False], [False, False, True, True], [True, False, False, True]]) should return [[True, False, True, False, True], [False, True, True, False, False], [True, False, False, True, False], [False, True, False, True, True]].
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