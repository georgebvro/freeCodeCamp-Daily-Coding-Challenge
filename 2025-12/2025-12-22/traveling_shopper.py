def buy_items(funds, items):
    exchange_rates = {
        'USD': 1.00,
        'EUR': 1.10,
        'GBP': 1.25,
        'JPY': 0.0070,
        'CAD': 0.75
    }
    amount_remaining_usd = float(funds[0]) * exchange_rates[funds[1]]
    afforded_items_count = 0

    for item in items:
        amount_remaining_usd -= float(item[0]) * exchange_rates[item[1]]

        if amount_remaining_usd < 0:
            return f"Buy the first {afforded_items_count} items."

        afforded_items_count += 1

    return "Buy them all!"

print(buy_items(["150.00", "USD"], [["50.00", "USD"], ["75.00", "USD"], ["30.00", "USD"]]))
print(buy_items(["200.00", "EUR"], [["50.00", "USD"], ["50.00", "USD"]]))
print(buy_items(["100.00", "CAD"], [["20.00", "USD"], ["15.00", "EUR"], ["10.00", "GBP"], ["6000", "JPY"], ["5.00", "CAD"], ["10.00", "USD"]]))
print(buy_items(["5000", "JPY"], [["3.00", "USD"], ["1000", "JPY"], ["5.00", "CAD"], ["2.00", "EUR"], ["4.00", "USD"], ["2000", "JPY"]]))
print(buy_items(["200.00", "USD"], [["50.00", "USD"], ["40.00", "EUR"], ["30.00", "GBP"], ["5000", "JPY"], ["25.00", "CAD"], ["20.00", "USD"]]))

print(buy_items(["100.00", "USD"], [["50.00", "USD"], ["50.00", "USD"]]))
print(buy_items(["0.00", "USD"], [["50.00", "USD"], ["50.00", "USD"]]))

# --- TEST SUITE ---

tests_text = '''
1. buy_items(["150.00", "USD"], [["50.00", "USD"], ["75.00", "USD"], ["30.00", "USD"]]) should return "Buy the first 2 items.".
2. buy_items(["200.00", "EUR"], [["50.00", "USD"], ["50.00", "USD"]]) should return "Buy them all!".
3. buy_items(["100.00", "CAD"], [["20.00", "USD"], ["15.00", "EUR"], ["10.00", "GBP"], ["6000", "JPY"], ["5.00", "CAD"], ["10.00", "USD"]]) should return "Buy the first 3 items.".
4. buy_items(["5000", "JPY"], [["3.00", "USD"], ["1000", "JPY"], ["5.00", "CAD"], ["2.00", "EUR"], ["4.00", "USD"], ["2000", "JPY"]]) should return "Buy them all!".
5. buy_items(["200.00", "USD"], [["50.00", "USD"], ["40.00", "EUR"], ["30.00", "GBP"], ["5000", "JPY"], ["25.00", "CAD"], ["20.00", "USD"]]) should return "Buy the first 5 items.".
'''

import re

tests_regex = re.compile(r"(?P<number>\d+)\.\s(?P<function_call>.+) should return (?P<output>.+?)\.?$", re.MULTILINE)
test_data = [item.groupdict() for item in re.finditer(tests_regex, tests_text)]

def run_tests(test_data):
    print("--------------------------")
    print("🧪 Starting Verification...")
    print("--------------------------")

    all_passed = True
    fail_count = 0

    for test in test_data:
        function_call_output = eval(test['function_call'])
        test_output = eval(test['output'])
        
        if function_call_output == test_output:
            print(f"{test['number']}.✅ PASS - Function Call:\n{test['function_call']}")
        else:
            print(f"{test['number']}.❌ FAIL - Function Call:\n{test['function_call']}\nExpected:\n{test_output}\nGot:\n{function_call_output}")
            all_passed = False
            fail_count += 1

    print("----------------------------");

    if (all_passed):
        print("🎉 SUCCESS: All tests PASSED.");
    else:
        print(f"⚠️ WARNING: {fail_count}/{len(test_data)} tests FAILED.");

run_tests(test_data)