import datetime as dt

def get_greeting(s):
    MINUTES_IN_HOUR = 60

    dayPeriods = {
        'morning': { 'start': 5 * MINUTES_IN_HOUR, 'end': 11 * MINUTES_IN_HOUR + 59 },
        'afternoon': { 'start': 12 * MINUTES_IN_HOUR, 'end': 17 * MINUTES_IN_HOUR + 59 },
        'evening': { 'start': 18 * MINUTES_IN_HOUR, 'end': 21 * MINUTES_IN_HOUR + 59 },
        'night': { 'start': 22 * MINUTES_IN_HOUR, 'end': 4 * MINUTES_IN_HOUR + 59 }
    }

    dummy_date = dt.date(1, 1, 1)
    datetime_object = dt.datetime.combine(dummy_date, dt.time.fromisoformat(s))
    midnight_object = dt.datetime.combine(dummy_date, dt.time.fromisoformat("00:00"))

    difference = (datetime_object - midnight_object).total_seconds()
    minutes_since_midnight = difference / 60

    for period_name, time_interval in dayPeriods.items():
        print(period_name, time_interval)
        if time_interval['start'] <= minutes_since_midnight <= time_interval['end']:
            return f"Good {period_name}"

    return "Good night"

# --- TEST SUITE ---

tests_text = r'''
1. get_greeting("06:30") should return "Good morning".
2. get_greeting("12:00") should return "Good afternoon".
3. get_greeting("21:59") should return "Good evening".
4. get_greeting("00:01") should return "Good night".
5. get_greeting("11:30") should return "Good morning".
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