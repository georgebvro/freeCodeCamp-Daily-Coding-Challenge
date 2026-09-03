def nth_fibonacci(n):
    prev_prev_number = 0
    prev_number = 1
    current_number = prev_prev_number + prev_number
    numbers_generated = 2

    while numbers_generated < n:
        current_number = prev_prev_number + prev_number
        prev_prev_number = prev_number
        prev_number = current_number

        numbers_generated += 1

    return current_number

# --- TEST SUITE ---

tests_text = r'''
1. nth_fibonacci(4) should return 2.
2. nth_fibonacci(10) should return 34.
3. nth_fibonacci(15) should return 377.
4. nth_fibonacci(40) should return 63245986.
5. nth_fibonacci(75) should return 1304969544928657.
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