from datetime import datetime

def calculate_age(birthday):
    birth_date = datetime.fromisoformat(birthday)
    check_date = datetime.strptime("November 27th, 2025", "%B %dth, %Y")
    age = check_date.year - birth_date.year

    if birth_date.month > check_date.month \
    or birth_date.month == check_date.month and birth_date.day > check_date.day:
        age -= 1

    return age

# --- TEST SUITE ---

tests_text = '''
1. calculate_age("2000-11-20") should return 25.
2. calculate_age("2000-12-01") should return 24.
3. calculate_age("2014-10-25") should return 11.
4. calculate_age("1994-01-06") should return 31.
5. calculate_age("1994-12-14") should return 30.
'''

import re

tests_regex = re.compile(r"(?P<number>\d+)\.\s(?P<function_call>.+) should return (?P<output>.+)\.$", re.MULTILINE)
test_data = [item.groupdict() for item in re.finditer(tests_regex, tests_text)]

def run_tests(test_data):
    print("--------------------------")
    print("🧪 Starting Verification...")
    print("--------------------------")

    all_passed = True
    fail_count = 0

    for test in test_data:
        function_call_output = eval(test['function_call'])
        test_output = eval(test['output'])
        
        if function_call_output == test_output:
            print(f"{test['number']}.✅ PASS - Function Call:\n{test['function_call']}")
        else:
            print(f"{test['number']}.❌ FAIL - Function Call:\n{test['function_call']}\nExpected:\n{test_output}\nGot:\n{function_call_output}")
            all_passed = False
            fail_count += 1

    print("----------------------------");

    if (all_passed):
        print("🎉 SUCCESS: All tests PASSED.");
    else:
        print(f"⚠️ WARNING: {fail_count}/{len(test_data)} tests FAILED.");

run_tests(test_data)