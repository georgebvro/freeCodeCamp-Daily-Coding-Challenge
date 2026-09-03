import datetime as dt
SECONDS_IN_HALF_DAY = 43200

def get_direction(time1, time2):
    dummy_date = dt.date(1, 1, 1)
    time1_datetime_object = dt.datetime.combine(dummy_date, dt.time.fromisoformat(time1))
    time2_datetime_object = dt.datetime.combine(dummy_date, dt.time.fromisoformat(time2))

    difference = time2_datetime_object - time1_datetime_object

    return "forward" if difference.seconds < SECONDS_IN_HALF_DAY \
        else "backward" if difference.seconds > SECONDS_IN_HALF_DAY \
        else "equal"

# --- TEST SUITE ---

tests_text = r'''
1. get_direction("10:00", "12:00") should return "forward".
2. get_direction("11:00", "05:00") should return "backward".
3. get_direction("00:00", "12:00") should return "equal".
4. get_direction("15:45", "01:10") should return "forward".
5. get_direction("03:30", "19:50") should return "backward".
6. get_direction("06:30", "18:30") should return "equal".
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