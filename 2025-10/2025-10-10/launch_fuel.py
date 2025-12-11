def launch_fuel(payload):
    additional_fuel = payload / 5
    total_fuel = additional_fuel

    while additional_fuel >= 1:
        additional_fuel = additional_fuel / 5
        total_fuel += additional_fuel

    return round(total_fuel, 1)

# Recursive solution that should work but it fails Test #3 because of the rounding.
#def launch_fuel(payload):
#    additional_fuel = payload / 5
#
#    if additional_fuel < 1:
#        return additional_fuel
#
#    return round(additional_fuel + launch_fuel(additional_fuel), 1)

print(launch_fuel(50))
print(launch_fuel(500))
print(launch_fuel(243))
print(launch_fuel(11000))
print(launch_fuel(6214))

# --- TEST SUITE ---

tests_text = '''
1. launch_fuel(50) should return 12.4.
2. launch_fuel(500) should return 124.8.
3. launch_fuel(243) should return 60.7.
4. launch_fuel(11000) should return 2749.8.
5. launch_fuel(6214) should return 1553.4.
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