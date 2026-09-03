def speed_check(speed_mph, speed_limit_kph):
    warning_overspeed = 5;
    miles_to_km_conversion_rate = 1.60934
    speed_kph = speed_mph * miles_to_km_conversion_rate

    return "Not Speeding" if speed_kph <= speed_limit_kph \
        else "Warning" if speed_kph <= speed_limit_kph + warning_overspeed \
        else "Ticket"

# --- TEST SUITE ---

tests_text = '''
1. speed_check(30, 70) should return "Not Speeding".
2. speed_check(40, 60) should return "Warning".
3. speed_check(40, 65) should return "Not Speeding".
4. speed_check(60, 90) should return "Ticket".
5. speed_check(65, 100) should return "Warning".
6. speed_check(88, 40) should return "Ticket".
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