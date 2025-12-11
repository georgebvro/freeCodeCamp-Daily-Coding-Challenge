def speeding(speeds, limit):
    speeding_vehicles = 0
    overspeed = 0

    for speed in speeds:
        if speed > limit:
            speeding_vehicles += 1
            overspeed += speed - limit

    return [speeding_vehicles, overspeed / speeding_vehicles] if speeding_vehicles > 0 else [0, 0]

print(speeding([50, 60, 55], 60))
print(speeding([58, 50, 60, 55], 55))
print(speeding([61, 81, 74, 88, 65, 71, 68], 70))
print(speeding([100, 105, 95, 102], 100))
print(speeding([40, 45, 44, 50, 112, 39], 55))

# --- TEST SUITE ---

tests_text = '''
1. speeding([50, 60, 55], 60) should return [0, 0].
2. speeding([58, 50, 60, 55], 55) should return [2, 4].
3. speeding([61, 81, 74, 88, 65, 71, 68], 70) should return [4, 8.5].
4. speeding([100, 105, 95, 102], 100) should return [2, 3.5].
5. speeding([40, 45, 44, 50, 112, 39], 55) should return [1, 57].
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