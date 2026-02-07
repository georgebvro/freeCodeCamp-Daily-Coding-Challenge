def get_sign(date_str):
    groups_dict = re.match(r"^\d{4}-(?P<month>\d{2})-(?P<day>\d{2})$", date_str).groupdict()
    month = int(groups_dict['month'])
    day = int(groups_dict['day'])

    zodiac_signs = [
        ZodiacSign("Aries", 3, 21, 4, 19),
        ZodiacSign("Taurus", 4, 20, 5, 20),
        ZodiacSign("Gemini", 5, 21, 6, 20),
        ZodiacSign("Cancer", 6, 21, 7, 22),
        ZodiacSign("Leo", 7, 23, 8, 22),
        ZodiacSign("Virgo", 8, 23, 9, 22),
        ZodiacSign("Libra", 9, 23, 10, 22),
        ZodiacSign("Scorpio", 10, 23, 11, 21),
        ZodiacSign("Sagittarius", 11, 22, 12, 21),
        ZodiacSign("Capricorn", 12, 22, 1, 19),
        ZodiacSign("Aquarius", 1, 20, 2, 18),
        ZodiacSign("Pisces", 2, 19, 3, 20)
    ]

    return [zodiac_sign for zodiac_sign in zodiac_signs 
        if zodiac_sign.start_month == month and zodiac_sign.start_day <= day 
        or zodiac_sign.end_month == month and day <= zodiac_sign.end_day] \
        [0] \
        .name

class ZodiacSign:
    def __init__(self, name, start_month, start_day, end_month, end_day):
        self.name = name
        self.start_month = start_month
        self.start_day = start_day
        self.end_month = end_month
        self.end_day = end_day

# --- TEST SUITE ---

tests_text = r'''
1. get_sign("2026-01-31") should return "Aquarius".
2. get_sign("2001-06-10") should return "Gemini".
3. get_sign("1985-09-07") should return "Virgo".
4. get_sign("2023-03-19") should return "Pisces".
5. get_sign("2045-11-05") should return "Scorpio".
6. get_sign("1985-12-06") should return "Sagittarius".
7. get_sign("2025-12-30") should return "Capricorn".
8. get_sign("2018-10-08") should return "Libra".
9. get_sign("1958-05-04") should return "Taurus".
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