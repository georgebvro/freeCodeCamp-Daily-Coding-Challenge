def find_missing_numbers(arr):
    missing_numbers = []

    for i in range(1, max(arr) + 1):
        if i not in arr:
            missing_numbers.append(i)

    return missing_numbers

print(find_missing_numbers([1, 3, 5]))
print(find_missing_numbers([1, 2, 3, 4, 5]))
print(find_missing_numbers([1, 10]))
print(find_missing_numbers([10, 1, 10, 1, 10, 1]))
print(find_missing_numbers([3, 1, 4, 1, 5, 9]))
print(find_missing_numbers([1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 6, 8, 9, 3, 2, 10, 7, 4]))

# --- TEST SUITE ---

tests_text = '''
1. find_missing_numbers([1, 3, 5]) should return [2, 4].
2. find_missing_numbers([1, 2, 3, 4, 5]) should return [].
3. find_missing_numbers([1, 10]) should return [2, 3, 4, 5, 6, 7, 8, 9].
4. find_missing_numbers([10, 1, 10, 1, 10, 1]) should return [2, 3, 4, 5, 6, 7, 8, 9].
5. find_missing_numbers([3, 1, 4, 1, 5, 9]) should return [2, 6, 7, 8].
6. find_missing_numbers([1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 6, 8, 9, 3, 2, 10, 7, 4]) should return [11].
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