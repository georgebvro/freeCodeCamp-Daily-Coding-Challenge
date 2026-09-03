from datetime import time as t

def get_shadow(time):
    time_object = t.fromisoformat(time)
    noon_object = t.fromisoformat("12:00")

    time_minutes_since_midnight = time_object.hour * 60 + time_object.minute
    noon_minutes_since_midnight = noon_object.hour * 60 + noon_object.minute
    noon_difference_minutes = time_minutes_since_midnight - noon_minutes_since_midnight
    noon_difference_hours = noon_difference_minutes / 60

    if noon_difference_hours < -6 or noon_difference_hours >= 6 or noon_difference_minutes == 0:
        return "No shadow"

    shadow_length = str(abs(noon_difference_hours ** 3)).rstrip("0").rstrip(".")
    shadow_direction = "east" if noon_difference_minutes > 0 else "west"

    return f"{shadow_length}ft {shadow_direction}"

# --- TEST SUITE ---

tests_text = r'''
1. get_shadow("10:00") should return "8ft west".
2. get_shadow("15:00") should return "27ft east".
3. get_shadow("12:00") should return "No shadow".
4. get_shadow("17:30") should return "166.375ft east".
5. get_shadow("05:00") should return "No shadow".
6. get_shadow("06:00") should return "216ft west".
7. get_shadow("18:00") should return "No shadow".
8. get_shadow("07:30") should return "91.125ft west".
9. get_shadow("00:00") should return "No shadow".
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