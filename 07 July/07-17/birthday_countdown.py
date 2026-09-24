from datetime import date

def days_until_birthday(today, birthday):
    today_d = date.fromisoformat(today)

    groups_dict = re.match(r"^(?P<bd_month>\d{1,2})\/(?P<bd_day>\d{1,2})$", birthday).groupdict()
    bd_month = int(groups_dict['bd_month'])
    bd_day = int(groups_dict['bd_day'])
    bd_year = today_d.year

    # Construct the next birthday date by using the 'today' year and accounting for leap years
    while True:
        try:
            next_birthday_d = date(year = bd_year, month = bd_month, day = bd_day)
        except ValueError:
            bd_year += 1
        else:
            break

    # If birthday already happened in 'today' year, advance the year for the next birthday date, accounting for leap years
    while True:
        try:
            if today_d >= next_birthday_d:
                next_birthday_d = next_birthday_d.replace(year = bd_year + 1)
        except ValueError:
            bd_year += 1
        else:
            break

    return (next_birthday_d - today_d).days

# --- TEST SUITE ---

tests_text = r'''
1. days_until_birthday("2026-07-16", "9/7") should return 53.
2. days_until_birthday("2026-07-16", "3/22") should return 249.
3. days_until_birthday("2026-07-16", "7/16") should return 365.
4. days_until_birthday("2024-02-28", "3/1") should return 2.
5. days_until_birthday("2023-04-24", "12/30") should return 250.
6. days_until_birthday("2024-03-01", "2/29") should return 1460.
7. days_until_birthday("2096-03-01", "2/29") should return 2920.
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