def to_decimal(binary):
    decimal = 0

    for index, digit in enumerate(list(binary)):
        decimal += int(digit) * 2 ** (len(binary) - index - 1)

    return decimal

print(to_decimal("101"))
print(to_decimal("1010"))
print(to_decimal("10010"))
print(to_decimal("1010101"))

# --- TEST SUITE ---

tests_text = '''
1. to_decimal("101") should return 5.
2. to_decimal("1010") should return 10.
3. to_decimal("10010") should return 18.
4. to_decimal("1010101") should return 85.
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