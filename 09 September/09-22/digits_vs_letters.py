def digits_or_letters(s):
    import re
    digits = 0
    letters = 0

    for char in s:
        if re.match(r"[0-9]", char):
            digits += 1

        if re.match(r"[a-zA-Z]", char):
            letters += 1

    return "digits" if digits > letters \
        else "letters" if digits < letters \
        else "tie"

print(digits_or_letters("abc123"))
print(digits_or_letters("a1b2c3d"))
print(digits_or_letters("1a2b3c4"))
print(digits_or_letters("abc123!@#DEF"))
print(digits_or_letters("H3110 W0R1D"))
print(digits_or_letters("P455W0RD"))

# --- TEST SUITE ---

tests_text = '''
1. digits_or_letters("abc123") should return "tie".
2. digits_or_letters("a1b2c3d") should return "letters".
3. digits_or_letters("1a2b3c4") should return "digits".
4. digits_or_letters("abc123!@#DEF") should return "letters".
5. digits_or_letters("H3110 W0R1D") should return "digits".
6. digits_or_letters("P455W0RD") should return "tie".
'''

import re

tests_regex = re.compile(r"(?P<number>\d+)\.\s(?P<function_call>.+) should return (?P<output>.+?)\.?$", re.MULTILINE)
test_data = [item.groupdict() for item in re.finditer(tests_regex, tests_text)]

def run_tests(test_data):
    print("--------------------------")
    print("🧪 Starting Verification...")
    print("--------------------------")

    all_passed = True
    fail_count = 0

    for test in test_data:
        function_call_output = eval(test['function_call'])
        test_output = eval(test['output'])
        
        if function_call_output == test_output:
            print(f"{test['number']}.✅ PASS - Function Call:\n{test['function_call']}")
        else:
            print(f"{test['number']}.❌ FAIL - Function Call:\n{test['function_call']}\nExpected:\n{test_output}\nGot:\n{function_call_output}")
            all_passed = False
            fail_count += 1

    print("----------------------------");

    if (all_passed):
        print("🎉 SUCCESS: All tests PASSED.");
    else:
        print(f"⚠️ WARNING: {fail_count}/{len(test_data)} tests FAILED.");

run_tests(test_data)