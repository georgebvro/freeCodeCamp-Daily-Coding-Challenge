def fizz_buzz_count(start, end):
    fizz_buzz_counts = {'fizz': 0, 'buzz': 0}

    for number in range(start, end + 1):
        if not number % 3:
            fizz_buzz_counts['fizz'] += 1

        if not number % 5:
            fizz_buzz_counts['buzz'] += 1

    return fizz_buzz_counts

# --- TEST SUITE ---

tests_text = r'''
1. fizz_buzz_count(1, 11) should return {"fizz": 3, "buzz": 2}.
2. fizz_buzz_count(14, 41) should return {"fizz": 9, "buzz": 6}.
3. fizz_buzz_count(24, 100) should return {"fizz": 26, "buzz": 16}.
4. fizz_buzz_count(-635, -14) should return {"fizz": 207, "buzz": 125}.
5. fizz_buzz_count(-5432, 6789) should return {"fizz": 4074, "buzz": 2444}.
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