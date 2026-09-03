def second_largest(arr):

    return sorted(set(arr))[-2]

print(second_largest([1, 2, 3, 4]))
print(second_largest([20, 139, 94, 67, 31]))
print(second_largest([2, 3, 4, 6, 6]))
print(second_largest([10, -17, 55.5, 44, 91, 0]))
print(second_largest([1, 0, -1, 0, 1, 0, -1, 1, 0]))

# --- TEST SUITE ---

tests_text = '''
1. second_largest([1, 2, 3, 4]) should return 3.
2. second_largest([20, 139, 94, 67, 31]) should return 94.
3. second_largest([2, 3, 4, 6, 6]) should return 4.
4. second_largest([10, -17, 55.5, 44, 91, 0]) should return 55.5.
5. second_largest([1, 0, -1, 0, 1, 0, -1, 1, 0]) should return 0.
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