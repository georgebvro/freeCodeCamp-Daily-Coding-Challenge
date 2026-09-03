from datetime import datetime

def days_until_weekend(date_string):
    beginning_of_weekend = 6
    day_of_the_week = datetime.strptime(date_string, "%Y-%m-%d").isoweekday()
    days_until_the_weekend = beginning_of_weekend - day_of_the_week

    return f"{days_until_the_weekend} day{'' if days_until_the_weekend == 1 else 's'} until the weekend." \
        if days_until_the_weekend > 0 \
        else "It's the weekend!"

print(days_until_weekend("2025-11-14"))
print(days_until_weekend("2025-01-01"))
print(days_until_weekend("2025-12-06"))
print(days_until_weekend("2026-01-27"))
print(days_until_weekend("2026-09-07"))
print(days_until_weekend("2026-11-29"))

# --- TEST SUITE ---

tests_text = '''
1. days_until_weekend("2025-11-14") should return "1 day until the weekend.".
2. days_until_weekend("2025-01-01") should return "3 days until the weekend.".
3. days_until_weekend("2025-12-06") should return "It's the weekend!".
4. days_until_weekend("2026-01-27") should return "4 days until the weekend.".
5. days_until_weekend("2026-09-07") should return "5 days until the weekend.".
6. days_until_weekend("2026-11-29") should return "It's the weekend!".
'''

import re

tests_regex = re.compile(r"(?P<number>\d+)\.\s(?P<function_call>.+) should return (?P<output>.+?)\.?$", re.MULTILINE)
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