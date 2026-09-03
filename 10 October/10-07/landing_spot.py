def find_landing_spot(matrix):
    safest_landing_spot = None
    smallest_danger = None

    for i, _ in enumerate(matrix):
        for j, _ in enumerate(matrix[i]):
            if matrix[i][j] == 0:
                current_danger = 0

                if i - 1 >= 0:
                    current_danger += matrix[i - 1][j]

                if i + 1 <= len(matrix) - 1:
                    current_danger += matrix[i + 1][j]

                if j - 1 >= 0:
                    current_danger += matrix[i][j - 1]

                if j + 1 <= len(matrix[i]) - 1:
                    current_danger += matrix[i][j + 1]

                if smallest_danger == None or current_danger < smallest_danger:
                    smallest_danger = current_danger
                    safest_landing_spot = [i, j]

    return safest_landing_spot

print(find_landing_spot([[1, 0], [2, 0]]))
print(find_landing_spot([[9, 0, 3], [7, 0, 4], [8, 0, 5]]))
print(find_landing_spot([[1, 2, 1], [0, 0, 2], [3, 0, 0]]))
print(find_landing_spot([[9, 6, 0, 8], [7, 1, 1, 0], [3, 0, 3, 9], [8, 6, 0, 9]]))

# --- TEST SUITE ---

tests_text = '''
1. find_landing_spot([[1, 0], [2, 0]]) should return [0, 1].
2. find_landing_spot([[9, 0, 3], [7, 0, 4], [8, 0, 5]]) should return [1, 1].
3. find_landing_spot([[1, 2, 1], [0, 0, 2], [3, 0, 0]]) should return [2, 2].
4. find_landing_spot([[9, 6, 0, 8], [7, 1, 1, 0], [3, 0, 3, 9], [8, 6, 0, 9]]) should return [2, 1].
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