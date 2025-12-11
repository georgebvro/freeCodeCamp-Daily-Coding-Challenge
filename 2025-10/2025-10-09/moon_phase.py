def moon_phase(date_string):
    from datetime import date
    
    reference_new_moon = "2000-01-06"
    difference_in_days = (date.fromisoformat(date_string) - date.fromisoformat(reference_new_moon)).days
    day_of_the_cycle = difference_in_days % 28 + 1

    if day_of_the_cycle <= 7:
        return "New"

    elif day_of_the_cycle <= 14:
        return "Waxing"

    elif day_of_the_cycle <= 21:
        return "Full"

    elif day_of_the_cycle <= 28:
        return "Waning"

print(moon_phase("2000-01-12"))
print(moon_phase("2000-01-13"))
print(moon_phase("2014-10-15"))
print(moon_phase("2012-10-21"))
print(moon_phase("2022-12-14"))

# --- TEST SUITE ---

tests_text = '''
1. moon_phase("2000-01-12") should return "New".
2. moon_phase("2000-01-13") should return "Waxing".
3. moon_phase("2014-10-15") should return "Full".
4. moon_phase("2012-10-21") should return "Waning".
5. moon_phase("2022-12-14") should return "New".
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