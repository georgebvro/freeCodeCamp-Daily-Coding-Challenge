import datetime as dt

def can_retake(finish_time, current_time):
    HOURS_IN_DAY = 24;
    MINUTES_IN_HOUR = 60;
    SECONDS_IN_MINUTE = 60;
    EXAM_COOLDOWN_HOURS = 48;

    finish_time_object = dt.datetime.fromisoformat(finish_time)
    current_time_object = dt.datetime.fromisoformat(current_time)
    time_difference = current_time_object - finish_time_object

    time_difference_hours = \
        time_difference.days * HOURS_IN_DAY + \
        time_difference.seconds / SECONDS_IN_MINUTE / MINUTES_IN_HOUR
    
    return True if time_difference_hours >= EXAM_COOLDOWN_HOURS else False

# --- TEST SUITE ---

tests_text = r'''
1. can_retake("2026-03-23T08:00:00", "2026-03-25T14:00:00") should return True.
2. can_retake("2026-03-24T14:00:00", "2026-03-25T10:00:00") should return False.
3. can_retake("2026-03-23T09:25:00", "2026-03-25T09:25:00") should return True.
4. can_retake("2026-03-25T11:50:00", "2026-03-23T11:49:59") should return False.
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