import math

def fuel_to_add(current_gallons, required_liters):
    GALLONS_TO_LITTERS_CONVERSION_RATE = 3.78541
    additional_gallons_needed = math.ceil(required_liters / GALLONS_TO_LITTERS_CONVERSION_RATE - current_gallons)

    return additional_gallons_needed if additional_gallons_needed > 0 else 0

# --- TEST SUITE ---

tests_text = r'''
1. fuel_to_add(0, 1) should return 1.
2. fuel_to_add(5, 40) should return 6.
3. fuel_to_add(10, 30) should return 0.
4. fuel_to_add(896, 20500) should return 4520.
5. fuel_to_add(1000, 50000) should return 12209.
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