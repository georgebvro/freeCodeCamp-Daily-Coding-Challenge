def cost_to_fill(tank_size, fuel_level, price_per_gallon):

    return '${:.2f}'.format((tank_size - fuel_level) * price_per_gallon)

print(cost_to_fill(20, 0, 4.00))
print(cost_to_fill(15, 10, 3.50))
print(cost_to_fill(18, 9, 3.25))
print(cost_to_fill(12, 12, 4.99))
print(cost_to_fill(15, 9.5, 3.98))

# --- TEST SUITE ---

tests_text = '''
1. cost_to_fill(20, 0, 4.00) should return "$80.00".
2. cost_to_fill(15, 10, 3.50) should return "$17.50".
3. cost_to_fill(18, 9, 3.25) should return "$29.25".
4. cost_to_fill(12, 12, 4.99) should return "$0.00".
5. cost_to_fill(15, 9.5, 3.98) should return "$21.89".
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