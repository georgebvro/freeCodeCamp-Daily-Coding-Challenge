import datetime as dt

def alarm_check(alarm_time, wake_time):
    SNOOZE_MINUTES = 10

    dummy_date = dt.date(1, 1, 1)

    alarm_datetime_object = dt.datetime.combine(dummy_date, dt.time.fromisoformat(alarm_time))
    wake_datetime_object = dt.datetime.combine(dummy_date, dt.time.fromisoformat(wake_time))
    snooze_datetime_object = alarm_datetime_object + dt.timedelta(minutes = SNOOZE_MINUTES)

    return "early" if wake_datetime_object < alarm_datetime_object \
        else "on time" if wake_datetime_object <= snooze_datetime_object \
        else "late"

# --- TEST SUITE ---

tests_text = r'''
1. alarm_check("07:00", "06:45") should return "early".
2. alarm_check("06:30", "06:30") should return "on time".
3. alarm_check("08:10", "08:15") should return "on time".
4. alarm_check("09:30", "09:45") should return "late".
5. alarm_check("08:15", "08:25") should return "on time".
6. alarm_check("05:45", "05:56") should return "late".
7. alarm_check("04:30", "04:00") should return "early".
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