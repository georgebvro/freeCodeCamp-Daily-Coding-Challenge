def count_perfect_cubes(a, b):
    count = 0

    for i in range(min(a, b), max(a, b) + 1):
        maybe_root = round(abs(i) ** (1 / 3), 14)

        if int(maybe_root) == maybe_root:
            count += 1

    return count

# --- TEST SUITE ---

tests_text = r'''
1. count_perfect_cubes(3, 30) should return 2.
2. count_perfect_cubes(1, 30) should return 3.
3. count_perfect_cubes(30, 0) should return 4.
4. count_perfect_cubes(-64, 64) should return 9.
5. count_perfect_cubes(9214, -8127) should return 41.
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