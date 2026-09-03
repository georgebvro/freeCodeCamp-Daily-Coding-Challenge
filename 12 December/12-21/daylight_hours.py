import math

def daylight_hours(latitude):
    latitude_in_map = latitude
    latitude_interval = 15
    latitude_hours = {
        -90: 24, -75: 23, -60: 21, -45: 15, -30: 13, -15: 12,
        0: 12, 15: 11, 30: 10, 45: 9, 60: 6, 75: 2, 90: 0
    }

    if not latitude_hours.get(latitude):
        quotient = math.floor(abs(latitude) / latitude_interval)
        remainder = abs(latitude) % latitude_interval

        latitude_in_map = \
            latitude_interval * quotient if remainder < latitude_interval / 2 \
            else latitude_interval * (quotient + 1)

        if latitude < 0:
            latitude_in_map = -latitude_in_map

    return latitude_hours.get(latitude_in_map)

print(daylight_hours(45))
print(daylight_hours(0))
print(daylight_hours(-90))
print(daylight_hours(-10))
print(daylight_hours(23))
print(daylight_hours(88))
print(daylight_hours(-33))
print(daylight_hours(70))

# --- TEST SUITE ---

tests_text = '''
1. daylight_hours(45) should return 9.
2. daylight_hours(0) should return 12.
3. daylight_hours(-90) should return 24.
4. daylight_hours(-10) should return 12.
5. daylight_hours(23) should return 10.
6. daylight_hours(88) should return 0.
7. daylight_hours(-33) should return 13.
8. daylight_hours(70) should return 2.
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