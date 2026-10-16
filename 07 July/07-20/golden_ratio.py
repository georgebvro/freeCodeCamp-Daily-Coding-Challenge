def is_golden_ratio(a, b):
    GOLDEN_RATIO = 1.618
    TOLERANCE = 0.01

    return abs(max(a, b) / min(a, b) - GOLDEN_RATIO) <= TOLERANCE

# --- TEST SUITE ---

tests_text = r'''
1. is_golden_ratio(21, 34) should return True.
2. is_golden_ratio(15, 20) should return False.
3. is_golden_ratio(8, 13) should return True.
4. is_golden_ratio(10, 16) should return False.
5. is_golden_ratio(1618, 1000) should return True.
6. is_golden_ratio(88, 55) should return False.
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