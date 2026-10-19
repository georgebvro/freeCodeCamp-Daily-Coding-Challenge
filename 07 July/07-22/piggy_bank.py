def piggy_bank(coins):
    COINS = {
        'pennies': 0.01,
        'nickels': 0.05,
        'dimes': 0.10,
        'quarters': 0.25
    }

    return f"${sum([COINS[coin[0]] * coin[1] for coin in coins.items()]):.2f}"

# --- TEST SUITE ---

tests_text = r'''
1. piggy_bank({"pennies": 3, "nickels": 5, "dimes": 2, "quarters": 6}) should return "$1.98".
2. piggy_bank({"pennies": 1, "nickels": 1, "dimes": 1, "quarters": 1}) should return "$0.41".
3. piggy_bank({"nickels": 8, "dimes": 6, "quarters": 5}) should return "$2.25".
4. piggy_bank({}) should return "$0.00".
5. piggy_bank({"pennies": 146, "nickels": 11, "dimes": 0, "quarters": 19}) should return "$6.76".
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