def shift_array(arr, n):
    n = n % len(arr)

    return arr[n:] + arr[:n]

print(shift_array([1, 2, 3], 1))
print(shift_array([1, 2, 3], -1))
print(shift_array(["alpha", "bravo", "charlie"], 5))
print(shift_array(["alpha", "bravo", "charlie"], -11))
print(shift_array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 15))

print(shift_array([4, 5, 6], 0))

# --- TEST SUITE ---

tests_text = '''
1. shift_array([1, 2, 3], 1) should return [2, 3, 1].
2. shift_array([1, 2, 3], -1) should return [3, 1, 2].
3. shift_array(["alpha", "bravo", "charlie"], 5) should return ["charlie", "alpha", "bravo"].
4. shift_array(["alpha", "bravo", "charlie"], -11) should return ["bravo", "charlie", "alpha"].
5. shift_array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 15) should return [5, 6, 7, 8, 9, 0, 1, 2, 3, 4].
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