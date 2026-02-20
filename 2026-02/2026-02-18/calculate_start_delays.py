import math

def calculate_start_delays(jump_scores):
    best_score = max(jump_scores)

    return [math.ceil((best_score - score) * 1.5) for score in jump_scores]

# --- TEST SUITE ---

tests_text = r'''
1. calculate_start_delays([120, 110, 125]) should return [8, 23, 0].
2. calculate_start_delays([118, 125, 122, 120]) should return [11, 0, 5, 8].
3. calculate_start_delays([100, 105, 95, 110, 120, 115, 108]) should return [30, 23, 38, 15, 0, 8, 18].
4. calculate_start_delays([130, 125, 128, 120, 118, 122, 127, 115, 132, 124]) should return [3, 11, 6, 18, 21, 15, 8, 26, 0, 12].
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