def get_spoken_time(hour_angle, minute_angle):
    DEGREES_IN_CLOCK_FACE = 360
    HOURS_IN_CLOCK_FACE = 12
    MINUTES_IN_HOUR = 60

    hour = int(hour_angle / DEGREES_IN_CLOCK_FACE * HOURS_IN_CLOCK_FACE)
    minutes = int(minute_angle / DEGREES_IN_CLOCK_FACE * MINUTES_IN_HOUR)

    if minutes == 0:
        return f"{hour} o'clock"

    if 1 <= minutes <= 29:
        return f"quarter past {hour}" if minutes == 15 else f"{minutes} minutes past {hour}"

    if minutes == 30:
        return f"half past {hour}"

    if 31 <= minutes <= 59:
        return f"quarter to {hour + 1}" if minutes == 45 else f"{MINUTES_IN_HOUR - minutes} minutes to {hour + 1}"

    return hour_angle

# --- TEST SUITE ---

tests_text = r'''
1. get_spoken_time(90, 0) should return "3 o'clock".
2. get_spoken_time(160, 120) should return "20 minutes past 5".
3. get_spoken_time(255, 180) should return "half past 8".
4. get_spoken_time(67.5, 92) should return "quarter past 2".
5. get_spoken_time(200, 240) should return "20 minutes to 7".
6. get_spoken_time(322.5, 273) should return "quarter to 11".
7. get_spoken_time(117.5, 335) should return "5 minutes to 4".
'''

import re

tests_regex = re.compile(r"(?P<number>\d+)\.\s(?P<function_call>.+) should return (?P<output>.+?)\.?$", re.MULTILINE)
test_data = [item.groupdict() for item in re.finditer(tests_regex, tests_text)]

def run_tests(test_data):
    print("——————————————————————————",
        "\n🧪 Starting Verification...",
        "\n——————————————————————————")

    fail_count = 0

    for test in test_data:
        function_call_output = eval(test['function_call'])
        test_output = eval(test['output'])
        
        if function_call_output == test_output:
            print(f"{test['number']}.✅ PASS - Function Call:\n{test['function_call']}")
        else:
            print(f"{test['number']}.❌ FAIL - Function Call:\n{test['function_call']}\nExpected:\n{test_output}\nGot:\n{function_call_output}")
            fail_count += 1

        print("————————————————————————————")

    print(
        f"⚠️ WARNING: {fail_count}/{len(test_data)} tests FAILED." if fail_count
        else "🎉 SUCCESS: All tests PASSED."
    )

run_tests(test_data)