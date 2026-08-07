def get_combinations(n):
    combinations_count = 0

    def backtrack(current_string, open_parentheses_remaining, closed_parentheses_remaining):
        nonlocal combinations_count
        
        if len(current_string) == n * 2:
            combinations_count += 1
            return

        if open_parentheses_remaining > 0:
            backtrack(current_string + "(", open_parentheses_remaining - 1, closed_parentheses_remaining)

        if closed_parentheses_remaining > open_parentheses_remaining:
            backtrack(current_string + ")", open_parentheses_remaining, closed_parentheses_remaining - 1)

    backtrack("", n, n)

    return combinations_count

# --- TEST SUITE ---

tests_text = r'''
1. get_combinations(2) should return 2.
2. get_combinations(3) should return 5.
3. get_combinations(5) should return 42.
4. get_combinations(8) should return 1430.
5. get_combinations(13) should return 742900.
'''

import re

tests_regex = re.compile(r"(?P<number>\d+)\.\s(?P<function_call>.+) should return (?P<output>.+?)\.?$", re.MULTILINE)
test_data = [item.groupdict() for item in re.finditer(tests_regex, tests_text)]

def run_tests(test_data):
    print("——————————————————————————",
        "\n🧪 Starting Verification...",
        "\n——————————————————————————")

    fail_count = 0

    for test in test_data:
        function_call_output = eval(test['function_call'])
        test_output = eval(test['output'])
        
        if function_call_output == test_output:
            print(f"{test['number']}.✅ PASS - Function Call:\n{test['function_call']}")
        else:
            print(f"{test['number']}.❌ FAIL - Function Call:\n{test['function_call']}\nExpected:\n{test_output}\nGot:\n{function_call_output}")
            fail_count += 1

        print("————————————————————————————")

    print(
        f"⚠️ WARNING: {fail_count}/{len(test_data)} tests FAILED." if fail_count
        else "🎉 SUCCESS: All tests PASSED."
    )

run_tests(test_data)