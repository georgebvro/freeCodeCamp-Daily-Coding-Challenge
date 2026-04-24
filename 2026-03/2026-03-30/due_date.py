import datetime as dt

def get_due_date(date_str):
    MONTHS_TO_ADD = 9
    MONTHS_IN_YEAR = 12

    date_object = dt.date.fromisoformat(date_str)
    
    future_month = date_object.month + MONTHS_TO_ADD

    if future_month > MONTHS_IN_YEAR:
        future_year = date_object.year + 1
        future_month = future_month % MONTHS_IN_YEAR
    else:
        future_year = date_object.year

    future_day = date_object.day

    while True:
        try:
            future_date = dt.date(future_year, future_month, future_day)
        except ValueError:
            future_day -= 1
        else:
            break

    return future_date.isoformat()

# --- TEST SUITE ---

tests_text = r'''
1. get_due_date("2025-03-30") should return "2025-12-30".
2. get_due_date("2025-04-27") should return "2026-01-27".
3. get_due_date("2025-05-29") should return "2026-02-28".
4. get_due_date("2026-06-30") should return "2027-03-30".
5. get_due_date("2026-10-11") should return "2027-07-11".
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