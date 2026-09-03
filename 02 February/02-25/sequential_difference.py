def find_differences(arr):

    # Solution using enumerate()
    #return [arr[index + 1] - number if index < len(arr) - 1 else 0 for index, number in enumerate(arr)]

    # Solution using zip()
    return [next_val - current_val for current_val, next_val in zip(arr, arr[1:])] + [0]

# --- TEST SUITE ---

tests_text = r'''
1. find_differences([1, 2, 4, 7]) should return [1, 2, 3, 0].
2. find_differences([10, 15, 19, 22, 24, 25]) should return [5, 4, 3, 2, 1, 0].
3. find_differences([25, 20, 16, 13, 11, 10]) should return [-5, -4, -3, -2, -1, 0].
4. find_differences([0, 1, 2, 2, 3, 3, 4, 5]) should return [1, 1, 0, 1, 0, 1, 1, 0].
5. find_differences([1, 2, 5, 12, 34, -15, -1, 41, 113, -222, -99, -40, 10, -18, -6, -2, -1]) should return [1, 3, 7, 22, -49, 14, 42, 72, -335, 123, 59, 50, -28, 12, 4, 1, 0].
'''

import re

tests_regex = re.compile(r"(?P<number>\d+)\.\s(?P<function_call>.+) should return (?P<output>.+?)\.?$", re.MULTILINE)
test_data = [item.groupdict() for item in re.finditer(tests_regex, tests_text)]

def run_tests(test_data):
    print("--------------------------")
    print("🧪 Starting Verification...")
    print("--------------------------")

    fail_count = 0

    for test in test_data:
        function_call_output = eval(test['function_call'])
        test_output = eval(test['output'])
        
        if function_call_output == test_output:
            print(f"{test['number']}.✅ PASS - Function Call:\n{test['function_call']}")
        else:
            print(f"{test['number']}.❌ FAIL - Function Call:\n{test['function_call']}\nExpected:\n{test_output}\nGot:\n{function_call_output}")
            fail_count += 1

    print("----------------------------",
        f"\n⚠️ WARNING: {fail_count}/{len(test_data)} tests FAILED." if fail_count
        else "\n🎉 SUCCESS: All tests PASSED."
    )

run_tests(test_data)