from datetime import datetime

def digital_detox(logs):
    logs_datetime_objects = sorted([datetime.strptime(log, "%Y-%m-%d %H:%M:%S") for log in logs])
    logs_date_objects = [datetime.date(log) for log in logs_datetime_objects]
    FOUR_HOURS_PERIOD_IN_SECONDS = 4 * 60 * 60

    for log_index in range(len(logs) - 1):
        if abs(logs_datetime_objects[log_index] - logs_datetime_objects[log_index + 1]).total_seconds() < FOUR_HOURS_PERIOD_IN_SECONDS \
        or logs_date_objects.count(logs_date_objects[log_index]) > 2:
            return False

    return True

# --- TEST SUITE ---

tests_text = r'''
1. digital_detox(["2026-02-01 08:00:00", "2026-02-01 12:30:00"]) should return True.
2. digital_detox(["2026-02-01 04:00:00", "2026-02-01 07:30:00"]) should return False.
3. digital_detox(["2026-01-31 08:21:30", "2026-01-31 14:30:00", "2026-02-01 08:00:00", "2026-02-01 12:30:00"]) should return True.
4. digital_detox(["2026-01-31 10:40:21", "2026-01-31 15:19:41", "2026-01-31 21:49:50", "2026-02-01 09:30:00"]) should return False.
5. digital_detox(["2026-02-05 10:00:00", "2026-02-01 09:00:00", "2026-02-03 22:15:00", "2026-02-02 12:10:00", "2026-02-02 07:15:00", "2026-02-04 09:45:00", "2026-02-01 16:50:00", "2026-02-03 09:30:00"]) should return True.
6. digital_detox(["2026-02-05 10:00:00", "2026-02-01 09:00:00", "2026-02-03 22:15:00", "2026-02-02 12:10:00", "2026-02-02 07:15:00", "2026-02-04 01:45:00", "2026-02-01 16:50:00", "2026-02-03 09:30:00"]) should return False.
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