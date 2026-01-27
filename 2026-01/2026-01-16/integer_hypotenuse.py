def is_integer_hypotenuse(a, b):
    hypotenuse = (a ** 2 + b ** 2) ** (1 / 2)

    return hypotenuse.is_integer()

# --- TEST SUITE ---

tests_text = r'''
1. is_integer_hypotenuse(3, 4) should return True.
2. is_integer_hypotenuse(2, 3) should return False.
3. is_integer_hypotenuse(5, 12) should return True.
4. is_integer_hypotenuse(10, 10) should return False.
5. is_integer_hypotenuse(780, 1040) should return True.
6. is_integer_hypotenuse(250, 333) should return False.
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