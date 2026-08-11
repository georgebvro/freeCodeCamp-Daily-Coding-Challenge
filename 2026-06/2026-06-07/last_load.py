def last_load_date(scoops, usage):

    return scoops // (sum(usage) / len(usage))

# --- TEST SUITE ---

tests_text = r'''
1. last_load_date(10, [2, 2, 2, 2, 2, 2, 2]) should return 5.
2. last_load_date(16, [2, 3, 0, 3, 4, 2, 1]) should return 7.
3. last_load_date(33, [5, 0, 4, 3, 3, 2]) should return 11.
4. last_load_date(50, [2, 0, 2, 9, 12, 0, 2]) should return 12.
5. last_load_date(20, [13, 9, 12, 10, 8]) should return 1.
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