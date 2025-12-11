def hex_to_decimal(hex):

    return int(hex, 16)

print(hex_to_decimal("A"))
print(hex_to_decimal("15"))
print(hex_to_decimal("2E"))
print(hex_to_decimal("FF"))
print(hex_to_decimal("A3F"))

# --- TEST SUITE ---

tests_text = '''
1. hex_to_decimal("A") should return 10.
2. hex_to_decimal("15") should return 21.
3. hex_to_decimal("2E") should return 46.
4. hex_to_decimal("FF") should return 255.
5. hex_to_decimal("A3F") should return 2623.
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