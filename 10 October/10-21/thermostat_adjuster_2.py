def adjust_thermostat(current_f, target_c):
    difference = round(target_c * 1.8 + 32 - current_f, 1)

    return f"Heat: {difference} degrees Fahrenheit" if difference > 0 \
        else f"Cool: {abs(difference)} degrees Fahrenheit" if difference < 0 \
        else "Hold"

print(adjust_thermostat(32, 0))
print(adjust_thermostat(70, 25))
print(adjust_thermostat(72, 18))
print(adjust_thermostat(212, 100))
print(adjust_thermostat(59, 22))

# --- TEST SUITE ---

tests_text = '''
1. adjust_thermostat(32, 0) should return "Hold".
2. adjust_thermostat(70, 25) should return "Heat: 7.0 degrees Fahrenheit".
3. adjust_thermostat(72, 18) should return "Cool: 7.6 degrees Fahrenheit".
4. adjust_thermostat(212, 100) should return "Hold".
5. adjust_thermostat(59, 22) should return "Heat: 12.6 degrees Fahrenheit".
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