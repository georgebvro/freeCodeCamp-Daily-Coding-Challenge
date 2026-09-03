def palindrome_locator(s):
    length = len(s)

    for i in range(length // 2):
        if s[i] != s[length - 1 - i]:
            return "none"

    middle = ""

    if (not length % 2):
        middle += s[length // 2 - 1]

    middle += s[length // 2]

    return middle

# --- TEST SUITE ---

tests_text = r'''
1. palindrome_locator("racecar") should return "e".
2. palindrome_locator("level") should return "v".
3. palindrome_locator("freecodecamp") should return "none".
4. palindrome_locator("noon") should return "oo".
5. palindrome_locator("11100111") should return "00".
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