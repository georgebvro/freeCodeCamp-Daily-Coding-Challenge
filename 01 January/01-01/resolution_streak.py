def resolution_streak(days):
    MIN_STEPS_GOAL = 10000
    MAX_SCREEN_MINUTES_GOAL = 120
    MIN_PAGES_GOAL = 5

    for dayNumber, day in enumerate(days):
        if day[0] < MIN_STEPS_GOAL or day[1] > MAX_SCREEN_MINUTES_GOAL or day[2] < MIN_PAGES_GOAL:
            return f"Resolution failed on day {dayNumber + 1}: {dayNumber} day streak."

    return f"Resolution on track: {len(days)} day streak."

# --- TEST SUITE ---

tests_text = r'''
1. resolution_streak([[10500, 75, 15], [11000, 90, 10], [10650, 100, 9]]) should return "Resolution on track: 3 day streak."
2. resolution_streak([[10000, 120, 5], [10950, 121, 11]]) should return "Resolution failed on day 2: 1 day streak."
3. resolution_streak([[15000, 110, 8], [12300, 60, 13], [10100, 120, 4], [9000, 125, 4]]) should return "Resolution failed on day 3: 2 day streak."
4. resolution_streak([[11600, 76, 13], [12556, 64, 26], [10404, 32, 59], [9999, 44, 124], [7508, 23, 167], [10900, 80, 0]]) should return "Resolution failed on day 4: 3 day streak."
5. resolution_streak([[10500, 75, 15], [11000, 90, 10], [10650, 100, 9], [10200, 60, 10], [10678, 87, 9], [12431, 67, 13], [10444, 107, 19], [10111, 95, 5], [10000, 120, 7], [11980, 101, 8]]) should return "Resolution on track: 10 day streak."
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