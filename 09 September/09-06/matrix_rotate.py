def rotate(matrix):
    rotated_matrix = []
    number_of_rows = len(matrix)
    number_of_columns = len(matrix[0])

    for j in range(number_of_columns):
        rotated_matrix.append([])

        for i in range(number_of_rows - 1, -1, -1):
            print(f'Processing matrix[{i}][{j}]: {matrix[i][j]}')
            rotated_matrix[j].append(matrix[i][j])

    return rotated_matrix

print(rotate([[1]]))
print(rotate([[1, 2], [3, 4]]))
print(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
print(rotate([[0, 1, 0], [1, 0, 1], [0, 0, 0]]))

print(rotate([[1, 2, 3], [4, 5, 6]]))
print(rotate([[1, 2], [3, 4], [5, 6]]))

# --- TEST SUITE ---

tests_text = '''
1. rotate([[1]]) should return [[1]].
2. rotate([[1, 2], [3, 4]]) should return [[3, 1], [4, 2]].
3. rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) should return [[7, 4, 1], [8, 5, 2], [9, 6, 3]].
4. rotate([[0, 1, 0], [1, 0, 1], [0, 0, 0]]) should return [[0, 1, 0], [0, 0, 1], [0, 1, 0]].
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