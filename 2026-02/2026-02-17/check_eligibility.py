def check_eligibility(athlete_weights, sled_weight):
    one_person_bobsled_min_weight = 162
    two_person_bobsled_min_weight = 170
    four_person_bobsled_min_weight = 210
    one_person_max_total_weight = 247
    two_person_max_total_weight = 390
    four_person_max_total_weight = 630

    total_weight = sum(athlete_weights) + sled_weight

    match len(athlete_weights):
        case 1:
            if sled_weight < one_person_bobsled_min_weight or total_weight > one_person_max_total_weight:
                return "Not Eligible"
        case 2:
            if sled_weight < two_person_bobsled_min_weight or total_weight > two_person_max_total_weight:
                return "Not Eligible"
        case 4:
            if sled_weight < four_person_bobsled_min_weight or total_weight > four_person_max_total_weight:
                return "Not Eligible"

    return "Eligible"

# --- TEST SUITE ---

tests_text = r'''
1. check_eligibility([78], 165) should return "Eligible".
2. check_eligibility([80], 160) should return "Not Eligible".
3. check_eligibility([80], 170) should return "Not Eligible".
4. check_eligibility([85, 90], 170) should return "Eligible".
5. check_eligibility([85, 95], 168) should return "Not Eligible".
6. check_eligibility([112, 97], 185) should return "Not Eligible".
7. check_eligibility([110, 102, 90, 106], 222) should return "Eligible".
8. check_eligibility([106, 99, 90, 88], 205) should return "Not Eligible".
9. check_eligibility([106, 99, 103, 96], 227) should return "Not Eligible".
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