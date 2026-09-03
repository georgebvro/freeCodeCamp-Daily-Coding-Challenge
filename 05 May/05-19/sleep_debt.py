def sleep_debt(hours_slept, target_hours):
    hours_to_sleep_tonight = sum([target_hours - hours for hours in hours_slept]) + target_hours

    return 0 if hours_to_sleep_tonight < 0 else hours_to_sleep_tonight

# --- TEST SUITE ---

tests_text = r'''
1. sleep_debt([6, 6, 6, 6, 6, 6], 8) should return 20.
2. sleep_debt([6, 7, 8, 4, 8, 6], 7) should return 10.
3. sleep_debt([10, 10, 9, 10, 9, 11], 9) should return 4.
4. sleep_debt([8, 7, 6, 7, 6, 8], 6) should return 0.
5. sleep_debt([8, 9, 10, 9, 10, 7], 7) should return 0.
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