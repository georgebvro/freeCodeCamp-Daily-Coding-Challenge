def guess_number(secret, guess):

    return "higher" if secret > guess else "lower" if secret < guess else "you got it!"

# --- TEST SUITE ---

tests_text = r'''
1. guess_number(50, 30) should return "higher".
2. guess_number(85, 99) should return "lower".
3. guess_number(2026, 2026) should return "you got it!".
4. guess_number(92904, 11283) should return "higher".
5. guess_number(230495, 423920) should return "lower".
6. guess_number(120349, 120349) should return "you got it!".
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