def separate_letters_and_numbers(s):

    return "-".join([match[0] for match in re.finditer(r"([a-z]+)|(\d+)", s, re.IGNORECASE)])

# --- TEST SUITE ---

tests_text = r'''
1. separate_letters_and_numbers("ABC123") should return "ABC-123".
2. separate_letters_and_numbers("Route66") should return "Route-66".
3. separate_letters_and_numbers("H3LL0W0RLD") should return "H-3-LL-0-W-0-RLD".
4. separate_letters_and_numbers("a1b2c3d4") should return "a-1-b-2-c-3-d-4".
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