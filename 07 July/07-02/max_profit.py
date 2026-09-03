def get_max_profit(prices, budget):
    def calculate_profit_per_share(index_price):
        index = index_price[0]
        price = index_price[1]
        max_profit_per_share = float("-inf")

        for i in range(index + 1, len(prices)):
            profit = prices[i] - price
            max_profit_per_share = profit if profit > max_profit_per_share else max_profit_per_share

        return max_profit_per_share

    profit_per_share = list(map(calculate_profit_per_share, enumerate(prices)))

    buying_day = profit_per_share.index(max(profit_per_share))
    shares_bought = budget // prices[buying_day]

    return "0.00" if all(profit < 0 for profit in profit_per_share) \
        else f"{profit_per_share[buying_day] * shares_bought:.2f}"

# --- TEST SUITE ---

tests_text = r'''
1. get_max_profit([5, 6], 50) should return "10.00".
2. get_max_profit([8, 2, 5, 10], 20) should return "80.00".
3. get_max_profit([4, 5, 3, 6], 20) should return "18.00".
4. get_max_profit([54.40, 51.22, 53.99, 50.28, 53.01, 52.84], 200) should return "8.31".
5. get_max_profit([15.38, 15.01, 14.99, 14.62, 14.28], 80) should return "0.00".
6. get_max_profit([121.45, 126.82, 122.91, 124.65, 128.83, 128.83, 127.33], 1230.25) should return "73.80".
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