def get_loan_schedule(loan_amount, annual_rate, monthly_payment):
    remaining_balance = loan_amount
    balances = [loan_amount]

    while remaining_balance > 0:
        remaining_balance += remaining_balance * annual_rate / 100 / 12 - monthly_payment
        balances.append(round(remaining_balance) if remaining_balance > 0 else 0)

    return balances

# --- TEST SUITE ---

tests_text = r'''
1. get_loan_schedule(1000, 0, 200) should return [1000, 800, 600, 400, 200, 0].
2. get_loan_schedule(1000, 5, 200) should return [1000, 804, 608, 410, 212, 13, 0].
3. get_loan_schedule(10, 50, 1) should return [10, 9, 9, 8, 8, 7, 6, 5, 5, 4, 3, 2, 1, 0, 0].
4. get_loan_schedule(5500, 8, 400) should return [5500, 5137, 4771, 4403, 4032, 3659, 3283, 2905, 2525, 2141, 1756, 1367, 977, 583, 187, 0].
5. get_loan_schedule(50000, 5.2, 1650) should return [50000, 48567, 47127, 45681, 44229, 42771, 41306, 39835, 38358, 36874, 35384, 33887, 32384, 30874, 29358, 27835, 26306, 24770, 23227, 21678, 20122, 18559, 16990, 15413, 13830, 12240, 10643, 9039, 7428, 5810, 4186, 2554, 915, 0].
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