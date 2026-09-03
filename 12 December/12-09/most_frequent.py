def most_frequent(arr):

    return max(set(arr), key=arr.count)

print(most_frequent(["a", "b", "a", "c"]))
print(most_frequent([2, 3, 5, 2, 6, 3, 2, 7, 2, 9]))
print(most_frequent([True, False, "False", "True", False]))
print(most_frequent([40, 20, 70, 30, 10, 40, 10, 50, 40, 60]))

# --- TEST SUITE ---

tests_text = '''
1. most_frequent(["a", "b", "a", "c"]) should return "a".
2. most_frequent([2, 3, 5, 2, 6, 3, 2, 7, 2, 9]) should return 2.
3. most_frequent([True, False, "False", "True", False]) should return False.
4. most_frequent([40, 20, 70, 30, 10, 40, 10, 50, 40, 60]) should return 40.
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