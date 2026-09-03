def get_rotation(n):
    digits = [*str(n)]
    digit_count = len(digits)

    for rotation_count in range(digit_count):
        if not int("".join(digits)) % digit_count:
            return rotation_count

        digits.append(digits[0])
        del digits[0]

    return "none"

# --- TEST SUITE ---

tests_text = r'''
1. get_rotation(123) should return 0.
2. get_rotation(13579) should return 3.
3. get_rotation(24681) should return "none".
4. get_rotation(84138789345) should return 6.
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