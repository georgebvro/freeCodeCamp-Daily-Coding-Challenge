from collections import Counter

def fix_prank_number(arr):
    differences = [None if index == 0 else number - arr[index - 1] for index, number in enumerate(arr)]
    counts = dict(Counter(differences))

    max_count = 0

    for difference, count in counts.items():
        if count > max_count:
            pattern = difference
            max_count = count

    fixed_arr = arr[:]

    for index, difference in enumerate(differences):
        if difference == pattern:
            continue

        if index == 0 and differences[1] != pattern and differences[2] == pattern:
            fixed_arr[0] = arr[1] - pattern
            break

        if 0 < index < len(differences) - 1 and differences[index + 1] != pattern \
        or index == len(differences) - 1:
            fixed_arr[index] = arr[index - 1] + pattern
            break

    return fixed_arr

# --- TEST SUITE ---

tests_text = r'''
1. fix_prank_number([2, 4, 7, 8, 10]) should return [2, 4, 6, 8, 10].
2. fix_prank_number([10, 10, 8, 7, 6]) should return [10, 9, 8, 7, 6].
3. fix_prank_number([12, 24, 36, 48, 61, 72, 84, 96]) should return [12, 24, 36, 48, 60, 72, 84, 96].
4. fix_prank_number([4, 1, -2, -5, -8, -5]) should return [4, 1, -2, -5, -8, -11].
5. fix_prank_number([0, 100, 200, 300, 150, 500]) should return [0, 100, 200, 300, 400, 500].
6. fix_prank_number([400, 425, 400, 375, 350, 325, 300]) should return [450, 425, 400, 375, 350, 325, 300].
7. fix_prank_number([-5, 5, 10, 15, 20]) should return [0, 5, 10, 15, 20].
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