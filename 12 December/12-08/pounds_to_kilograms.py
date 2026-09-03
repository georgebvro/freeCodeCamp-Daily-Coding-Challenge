def convert_to_kgs(lbs):
    pounds_to_kgs_conversion = 0.453592
    kgs = lbs * pounds_to_kgs_conversion

    return f"{lbs} {'pound' if lbs == 1 else 'pounds'} equals {kgs:.2f} {'kilogram' if round(kgs, 1) == 1 else 'kilograms'}."

print(convert_to_kgs(1))
print(convert_to_kgs(0))
print(convert_to_kgs(100))
print(convert_to_kgs(2.5))
print(convert_to_kgs(2.20462))

# --- TEST SUITE ---

tests_text = '''
1. convert_to_kgs(1) should return "1 pound equals 0.45 kilograms.".
2. convert_to_kgs(0) should return "0 pounds equals 0.00 kilograms.".
3. convert_to_kgs(100) should return "100 pounds equals 45.36 kilograms.".
4. convert_to_kgs(2.5) should return "2.5 pounds equals 1.13 kilograms.".
5. convert_to_kgs(2.20462) should return "2.20462 pounds equals 1.00 kilogram.".
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