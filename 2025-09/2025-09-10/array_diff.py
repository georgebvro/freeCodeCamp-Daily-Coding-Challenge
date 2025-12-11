def array_diff(arr1, arr2):

    return sorted( \
    [element1 for element1 in arr1 if not any([element1 in arr2])] + \
    [element2 for element2 in arr2 if not any([element2 in arr1])] \
    )

print(array_diff(["apple", "banana"], ["apple", "banana", "cherry"]))
print(array_diff(["apple", "banana", "cherry"], ["apple", "banana"]))
print(array_diff(["one", "two", "three", "four", "six"], ["one", "three", "eight"]))
print(array_diff(["two", "four", "five", "eight"], ["one", "two", "three", "four", "seven", "eight"]))
print(array_diff(["I like freeCodeCamp"], ["I like rocks"]))

# --- TEST SUITE ---

tests_text = '''
1. array_diff(["apple", "banana"], ["apple", "banana", "cherry"]) should return ["cherry"].
2. array_diff(["apple", "banana", "cherry"], ["apple", "banana"]) should return ["cherry"].
3. array_diff(["one", "two", "three", "four", "six"], ["one", "three", "eight"]) should return ["eight", "four", "six", "two"].
4. array_diff(["two", "four", "five", "eight"], ["one", "two", "three", "four", "seven", "eight"]) should return ["five", "one", "seven", "three"].
5. array_diff(["I", "like", "freeCodeCamp"], ["I", "like", "rocks"]) should return ["freeCodeCamp", "rocks"].
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