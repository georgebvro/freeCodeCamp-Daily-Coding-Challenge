def count_change(change):
    total_cents = sum(change)
    dollars = total_cents // 100
    cents = total_cents % 100

    return f"${dollars}.{str(cents).zfill(2)}"

# --- TEST SUITE ---

tests_text = r'''
1. count_change([25, 10, 5, 1]) should return "$0.41".
2. count_change([25, 10, 5, 1, 25, 10, 25, 1, 1, 10, 5, 25]) should return "$1.43".
3. count_change([100, 25, 100, 1000, 5, 500, 2000, 25]) should return "$37.55".
4. count_change([10, 5, 1, 10, 1, 25, 1, 1, 5, 1, 10]) should return "$0.70".
5. count_change([1]) should return "$0.01".
6. count_change([25, 25, 25, 25]) should return "$1.00".
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