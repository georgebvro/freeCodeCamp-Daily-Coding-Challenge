def pairwise(arr, target):
    sum = 0

    for i in range(len(arr) - 1):
        for j in range(i + 1, len(arr)):
            sum += i + j if arr[i] + arr[j] == target else 0

    return sum

# --- TEST SUITE ---

tests_text = '''
1. pairwise([2, 3, 4, 6, 8], 10) should return 9.
2. pairwise([4, 1, 5, 2, 6, 3], 7) should return 15.
3. pairwise([-30, -15, 5, 10, 15, -5, 20, -40], -20) should return 22.
4. pairwise([7, 9, 13, 19, 21, 6, 3, 1, 4, 8, 12, 22], 24) should return 10.
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