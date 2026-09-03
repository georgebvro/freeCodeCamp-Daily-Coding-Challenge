from datetime import datetime

def count_business_days(start, end):
    start_date = datetime.strptime(start, "%Y-%m-%d")
    end_date = datetime.strptime(end, "%Y-%m-%d")
    timestamp = start_date.timestamp()
    end_date_timestamp = end_date.timestamp()
    business_days = 0
    day_duration_in_seconds = 60 * 60 * 24

    while timestamp <= end_date_timestamp:
        date = datetime.fromtimestamp(timestamp)
        business_days += 1 if date.weekday() < 5 else 0
        timestamp += day_duration_in_seconds

    return business_days

# --- TEST SUITE ---

tests_text = r'''
1. count_business_days("2026-02-24", "2026-02-26") should return 3.
2. count_business_days("2026-02-24", "2026-02-28") should return 4.
3. count_business_days("2026-02-21", "2026-03-01") should return 5.
4. count_business_days("2026-03-08", "2026-03-17") should return 7.
5. count_business_days("2026-02-24", "2027-02-24") should return 262.
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