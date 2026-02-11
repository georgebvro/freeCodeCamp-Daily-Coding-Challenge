def groundhog_day_prediction(appearance):

    return "Looks like we'll have six more weeks of winter." if appearance == True \
        else "It's going to be an early spring." if appearance == False \
        else "No prediction this year."

# --- TEST SUITE ---

tests_text = r'''
1. groundhog_day_prediction(True) should return "Looks like we'll have six more weeks of winter.".
2. groundhog_day_prediction(False) should return "It's going to be an early spring.".
3. groundhog_day_prediction(None) should return "No prediction this year.".
4. groundhog_day_prediction(" ") should return "No prediction this year.".
5. groundhog_day_prediction("True") should return "No prediction this year.".
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