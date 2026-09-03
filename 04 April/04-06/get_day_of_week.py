import datetime as dt

def get_day_of_week(timestamp):
    MILLISECONDS_IN_SECOND = 1000
    date_object = dt.date.fromtimestamp(timestamp / MILLISECONDS_IN_SECOND)

    return date_object.strftime("%A")

# --- TEST SUITE ---

tests_text = r'''
1. get_day_of_week(1775492249000) should return "Monday".
2. get_day_of_week(1766246400000) should return "Saturday".
3. get_day_of_week(33791256000000) should return "Tuesday".
4. get_day_of_week(1773576000000) should return "Sunday".
5. get_day_of_week(0) should return "Thursday".
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