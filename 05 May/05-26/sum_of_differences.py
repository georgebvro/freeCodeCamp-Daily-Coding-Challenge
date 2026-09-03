def sum_of_differences(arr):

    return sum([arr[index + 1] - number if index < len(arr) - 1 else 0 for index, number in enumerate(arr)])

# --- TEST SUITE ---

tests_text = r'''
1. sum_of_differences([1, 3, 4]) should return 3.
2. sum_of_differences([5, -3, 3, 9, 10]) should return 5.
3. sum_of_differences([9, 6, 15, -20, 33, 14, 25, 16, -7]) should return -16.
4. sum_of_differences([50, 102, -46, 82, -49, 29, 71, 902, -237, 111, -61, 75]) should return 25.
'''

import re

tests_regex = re.compile(r"(?P<number>\d+)\.\s(?P<function_call>.+) should return (?P<output>.+?)\.?$", re.MULTILINE)
test_data = [item.groupdict() for item in re.finditer(tests_regex, tests_text)]

def run_tests(test_data):
    print("——————————————————————————",
        "\n🧪 Starting Verification...",
        "\n——————————————————————————")

    fail_count = 0

    for test in test_data:
        function_call_output = eval(test['function_call'])
        test_output = eval(test['output'])
        
        if function_call_output == test_output:
            print(f"{test['number']}.✅ PASS - Function Call:\n{test['function_call']}")
        else:
            print(f"{test['number']}.❌ FAIL - Function Call:\n{test['function_call']}\nExpected:\n{test_output}\nGot:\n{function_call_output}")
            fail_count += 1

        print("————————————————————————————")

    print(
        f"⚠️ WARNING: {fail_count}/{len(test_data)} tests FAILED." if fail_count
        else "🎉 SUCCESS: All tests PASSED."
    )

run_tests(test_data)