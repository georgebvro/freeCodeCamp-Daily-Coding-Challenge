def passing_count(scores, passing_score):

    return len([score for score in scores if score >= passing_score])

# --- TEST SUITE ---

tests_text = r'''
1. passing_count([90, 85, 75, 60, 50], 70) should return 3.
2. passing_count([100, 80, 75, 88, 72, 74, 79, 71, 60, 92], 75) should return 6.
3. passing_count([79, 60, 88, 72, 74, 59, 75, 71, 80, 92], 60) should return 9.
4. passing_count([76, 79, 80, 70, 71, 65, 79, 78, 59, 72], 85) should return 0.
5. passing_count([84, 65, 98, 53, 58, 71, 91, 80, 92, 70, 73, 83, 86, 69, 84, 77, 72, 58, 69, 75, 66, 68, 72, 96, 90, 63, 88, 63, 80, 67], 60) should return 27.
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