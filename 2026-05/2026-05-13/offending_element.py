def find_offender(arr):
    for index, element in enumerate(arr):
        left_element = arr[index - 1] if index - 1 >= 0 else float("-inf")
        right_element = arr[index + 1] if index + 1 < len(arr) else float("inf")
        print( left_element, element, right_element)
        
        if not(left_element <= element <= right_element) and left_element <= right_element:
            return index

# --- TEST SUITE ---

tests_text = r'''
1. find_offender([1, 6, 2, 3, 4, 5]) should return 1.
2. find_offender([1, 2, 3, 5, 4, 5]) should return 3.
3. find_offender([2, 1]) should return 0.
4. find_offender([2, 4, 1, 6, 8]) should return 2.
5. find_offender([5, 18, 24, 33, 40, 55, 15, 68, 84, 91]) should return 6.
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