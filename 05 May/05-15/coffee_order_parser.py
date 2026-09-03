def format_coffee_order(order):
    MENU_ITEMS = {
        "cold brew": "$4.50",
        "oat latte": "$5.00",
        "cappuccino": "$4.75",
        "espresso": "$3.00",
        "vanilla syrup": "$0.75",
        "caramel drizzle": "$0.60",
        "extra shot": "$0.50",
        "oat milk": "$0.75",
        "cream": "$0.75"
    }
    ordered_items = []
    total = 0

    for item, price in MENU_ITEMS.items():
        if re.search(item, order):
            ordered_items.append(item)
            total += float(re.match("^\$(\d+\.\d+)$", price)[1])

    return f"{' + '.join(ordered_items)}: ${total:.2f}"

# --- TEST SUITE ---

tests_text = r'''
1. format_coffee_order("I'd like an oat latte with vanilla syrup and an extra shot please.") should return "oat latte + vanilla syrup + extra shot: $6.25".
2. format_coffee_order("Give me a cappuccino with caramel drizzle, vanilla syrup, and some oat milk.") should return "cappuccino + vanilla syrup + caramel drizzle + oat milk: $6.85".
3. format_coffee_order("Can I get a cold brew with some cream and an extra shot.") should return "cold brew + extra shot + cream: $5.75".
4. format_coffee_order("Just an espresso please.") should return "espresso: $3.00".
5. format_coffee_order("I'll take an oat latte with cream and an extra shot, and some vanilla syrup and caramel drizzle.") should return "oat latte + vanilla syrup + caramel drizzle + extra shot + cream: $7.60".
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