def calculate_penalty_distance(rounds):
    targets_per_round = 5
    penalty = 150

    return sum([targets_per_round - targets_hit for targets_hit in rounds]) * penalty

# --- TEST SUITE ---

tests_text = r'''
1. calculate_penalty_distance([4, 4]) should return 300.
2. calculate_penalty_distance([5, 5]) should return 0.
3. calculate_penalty_distance([4, 5, 3, 5]) should return 450.
4. calculate_penalty_distance([5, 4, 5, 5]) should return 150.
5. calculate_penalty_distance([4, 3, 0, 3]) should return 1500.
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