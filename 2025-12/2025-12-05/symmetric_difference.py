def difference(arr1, arr2):
# Cannot use .symmetric_difference() method of set object because it doesn't guarantee order of elements

    return [element for element in arr1 if element not in arr2] \
        + [element for element in arr2 if element not in arr1]

print(difference([1, 2, 3], [3, 4, 5]))
print(difference(["a", "b"], ["c", "b"]))
print(difference([1, "a", 2], [2, "b", "a"]))
print(difference([1, 3, 5, 7, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]))

# --- TEST SUITE ---

tests_text = '''
1. difference([1, 2, 3], [3, 4, 5]) should return [1, 2, 4, 5].
2. difference(["a", "b"], ["c", "b"]) should return ["a", "c"].
3. difference([1, "a", 2], [2, "b", "a"]) should return [1, "b"].
4. difference([1, 3, 5, 7, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]) should return [2, 4, 6, 8].
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