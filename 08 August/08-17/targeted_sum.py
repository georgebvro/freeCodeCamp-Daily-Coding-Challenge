def find_target(arr, target):
    for i, _ in enumerate(arr):
        for j, _ in enumerate(arr):
            if arr[i] != arr[j] and arr[i] + arr[j] == target:
                return [i, j]

    return "Target not found"

print(find_target([2, 7, 11, 15], 9))
print(find_target([3, 2, 4, 5], 6))
print(find_target([1, 3, 5, 6, 7, 8], 15))
print(find_target([1, 3, 5, 7], 14))

# --- TEST SUITE ---

tests_text = '''
1. find_target([2, 7, 11, 15], 9) should return [0, 1].
2. find_target([3, 2, 4, 5], 6) should return [1, 2].
3. find_target([1, 3, 5, 6, 7, 8], 15) should return [4, 5].
4. find_target([1, 3, 5, 7], 14) should return 'Target not found'.
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