def sort_and_swap(arr):
    new_arr = sorted(arr)

# Solution using one counter
#    for i in range(3, len(arr), 3):
#        new_arr[i - 1], new_arr[i] = new_arr[i], new_arr[i - 1]

# Solution using two counters
    for i, j in zip(range(2, len(arr) - 1, 3), range(3, len(arr), 3)):
        new_arr[i], new_arr[j] = new_arr[j], new_arr[i]

    return new_arr

# --- TEST SUITE ---

tests_text = r'''
1. sort_and_swap([3, 1, 2, 4, 6, 5]) should return [1, 2, 4, 3, 5, 6].
2. sort_and_swap([9, 7, 5, 3, 1, 2, 4, 6, 8]) should return [1, 2, 4, 3, 5, 7, 6, 8, 9].
3. sort_and_swap([1, 2, 3, 4, 5, 6, 7, 8, 9]) should return [1, 2, 4, 3, 5, 7, 6, 8, 9].
4. sort_and_swap([12, 5, 8, 1, 3, 10, 2, 7, 6, 4, 9, 11]) should return [1, 2, 4, 3, 5, 7, 6, 8, 10, 9, 11, 12].
5. sort_and_swap([100, -50, 0, 75, -25, 50, -75, 25]) should return [-75, -50, 0, -25, 25, 75, 50, 100].
6. sort_and_swap([5, 9, 13, 77, 88, 313, -10, -65, 0, 8, 99, 101, -4, 2]) should return [-65, -10, 0, -4, 2, 8, 5, 9, 77, 13, 88, 101, 99, 313].
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