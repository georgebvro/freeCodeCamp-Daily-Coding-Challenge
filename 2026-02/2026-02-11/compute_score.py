def compute_score(judge_scores, *penalties):
    judge_scores_sorted = sorted(judge_scores)

    return sum(judge_scores_sorted) \
        - judge_scores_sorted[0] \
        - judge_scores_sorted[len(judge_scores_sorted) - 1] \
        - sum(penalties)

# --- TEST SUITE ---

tests_text = r'''
1. compute_score([10, 8, 9, 6, 9, 8, 8, 9, 7, 7], 1) should return 64.
2. compute_score([10, 10, 10, 10, 10, 10, 10, 10, 10, 10]) should return 80.
3. compute_score([10, 8, 9, 10, 9, 8, 8, 9, 10, 7], 1, 2, 1) should return 67.
4. compute_score([8.0, 8.5, 9.0, 8.5, 9.0, 8.0, 9.0, 8.5, 9.0, 8.5], 0.5, 1.0) should return 67.5.
5. compute_score([6.0, 8.5, 7.0, 9.0, 7.5, 8.0, 6.5, 9.5, 7.0, 8.0], 1.5, 0.5, 0.5) should return 59.
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