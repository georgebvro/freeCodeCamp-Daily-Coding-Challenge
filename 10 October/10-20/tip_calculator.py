def calculate_tips(meal_price, custom_tip):
    import re

    meal_price_dict = re.match(r"\$(?P<meal_price_value>\d+\.\d+)", meal_price).groupdict()
    custom_tip_dict = re.match(r"(?P<custom_tip_value>\d+)%", custom_tip).groupdict()

    tip15 = f"${float(meal_price_dict['meal_price_value']) * 15 / 100 :.2f}"
    tip20 = f"${float(meal_price_dict['meal_price_value']) * 20 / 100 :.2f}"
    tip_custom = f"${float(meal_price_dict['meal_price_value']) * float(custom_tip_dict['custom_tip_value']) / 100 :.2f}"

    return [ tip15, tip20, tip_custom ]

print(calculate_tips("$10.00", "25%"))
print(calculate_tips("$89.67", "26%"))
print(calculate_tips("$19.85", "9%"))

# --- TEST SUITE ---

tests_text = '''
1. calculate_tips("$10.00", "25%") should return ["$1.50", "$2.00", "$2.50"].
2. calculate_tips("$89.67", "26%") should return ["$13.45", "$17.93", "$23.31"].
3. calculate_tips("$19.85", "9%") should return ["$2.98", "$3.97", "$1.79"].
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