import datetime as dt

def get_rental_cost(rented, returned, tier):
    TIER_PRICING = {
        1: { 'base_cost': 4.99, 'late_fee_per_day': 3.99 },
        3: { 'base_cost': 3.99, 'late_fee_per_day': 2.99 },
        7: { 'base_cost': 2.99, 'late_fee_per_day': 0.99 }
    }
    rented_dt = dt.datetime.fromisoformat(rented)
    returned_dt = dt.datetime.fromisoformat(returned)

    due_back_dt = (rented_dt + dt.timedelta(days = tier)).replace(hour = 12, minute = 0, second = 0)

    overdue_td = returned_dt - due_back_dt

    days_overdue = 0

    if overdue_td.total_seconds() > 0:
        days_overdue = overdue_td.days + 1 if overdue_td.total_seconds() - overdue_td.days * 24 * 60 * 60 > 0 else 0

    return f"${TIER_PRICING[tier]['base_cost'] + days_overdue * TIER_PRICING[tier]['late_fee_per_day']:.2f}"

# --- TEST SUITE ---

tests_text = r'''
1. get_rental_cost("2026-06-18T18:30:00Z", "2026-06-19T10:30:00Z", 1) should return "$4.99".
2. get_rental_cost("2026-06-18T14:30:00Z", "2026-06-20T12:30:00Z", 1) should return "$12.97".
3. get_rental_cost("2026-06-18T10:15:00Z", "2026-06-18T19:45:00Z", 3) should return "$3.99".
4. get_rental_cost("2026-06-18T15:20:00Z", "2026-06-23T08:10:00Z", 3) should return "$9.97".
5. get_rental_cost("2026-06-18T12:00:00Z", "2026-06-25T12:00:00Z", 7) should return "$2.99".
6. get_rental_cost("2026-06-18T08:00:00Z", "2027-06-18T14:00:00Z", 7) should return "$358.40".
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