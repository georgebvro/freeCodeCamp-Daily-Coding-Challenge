def is_sorted(arr):
    ascending = True
    descending = True

    for i in range(1, len(arr)):
        if arr[i - 1] > arr[i]:
            ascending = False
            break

    for i in range(1, len(arr)):
        if arr[i - 1] < arr[i]:
            descending = False
            break

    return "Ascending" if ascending else "Descending" if descending else "Not sorted"

# --- TEST SUITE ---

tests_text = r'''
1. is_sorted([1, 2, 3, 4, 5]) should return "Ascending".
2. is_sorted([10, 8, 6, 4, 2]) should return "Descending".
3. is_sorted([1, 3, 2, 4, 5]) should return "Not sorted".
4. is_sorted([3.14, 2.71, 1.61, 0.57]) should return "Descending".
5. is_sorted([12.3, 23.4, 34.5, 45.6, 56.7, 67.8, 78.9]) should return "Ascending".
6. is_sorted([0.4, 0.5, 0.3]) should return "Not sorted".
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