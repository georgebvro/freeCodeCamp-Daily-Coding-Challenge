def has_no_repeats(s):
    for i in range(len(s) - 1):
        if s[i] == s[i + 1]:
            return False

    return True

# --- TEST SUITE ---

tests_text = r'''
1. has_no_repeats("hi world") should return True.
2. has_no_repeats("hello world") should return False.
3. has_no_repeats("abcdefghijklmnopqrstuvwxyz") should return True.
4. has_no_repeats("freeCodeCamp") should return False.
5. has_no_repeats("The quick brown fox jumped over the lazy dog.") should return True.
6. has_no_repeats("Mississippi") should return False.
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