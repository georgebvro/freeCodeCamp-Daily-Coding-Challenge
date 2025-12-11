import math

def infected(days):
    infected_computers = 1

    for day in range(1, days + 1):
        infected_computers *= 2

        if day % 3 == 0:
            infected_computers -= math.ceil(infected_computers * 20 / 100)

    return infected_computers

print(infected(1))
print(infected(3))
print(infected(8))
print(infected(17))
print(infected(25))

print(infected(0))

# --- TEST SUITE ---

tests_text = '''
1. infected(1) should return 2.
2. infected(3) should return 6.
3. infected(8) should return 152.
4. infected(17) should return 39808.
5. infected(25) should return 5217638.
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