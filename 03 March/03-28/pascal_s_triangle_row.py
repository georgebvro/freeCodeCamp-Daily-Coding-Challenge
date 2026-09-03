def pascal_row(n):
    if n == 1:
        return [1]

    if n == 2:
        return [1, 1]

    previous_row = [1]
    current_row = [1, 1]

    while len(current_row) < n:
        previous_row = current_row[:]
        current_row = [1]

        for i in range(1, len(previous_row)):
            current_row.append(previous_row[i - 1] + previous_row[i])

        current_row.append(1)

    return current_row

# --- TEST SUITE ---

tests_text = r'''
1. pascal_row(5) should return [1, 4, 6, 4, 1].
2. pascal_row(3) should return [1, 2, 1].
3. pascal_row(1) should return [1].
4. pascal_row(10) should return [1, 9, 36, 84, 126, 126, 84, 36, 9, 1].
5. pascal_row(15) should return [1, 14, 91, 364, 1001, 2002, 3003, 3432, 3003, 2002, 1001, 364, 91, 14, 1].
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