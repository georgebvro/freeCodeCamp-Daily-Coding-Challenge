def fizz_buzz_mini(n):
    if not(n % 3) and not(n % 5):
        return "FizzBuzz"

    if not(n % 3):
        return "Fizz"

    if not(n % 5):
        return "Buzz"

    return str(n)

# --- TEST SUITE ---

tests_text = r'''
1. fizz_buzz_mini(3) should return "Fizz".
2. fizz_buzz_mini(4) should return "4".
3. fizz_buzz_mini(35) should return "Buzz".
4. fizz_buzz_mini(75) should return "FizzBuzz".
5. fizz_buzz_mini(98) should return "98".
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