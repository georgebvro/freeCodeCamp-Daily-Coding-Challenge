def to_screaming_snake_case(variable_name):

    return "_".join([word for word in re.split("[_-]|(?=[A-Z])", variable_name) if word != ""]).upper()

# --- TEST SUITE ---

tests_text = r'''
1. to_screaming_snake_case("userEmail") should return "USER_EMAIL".
2. to_screaming_snake_case("UserPassword") should return "USER_PASSWORD".
3. to_screaming_snake_case("user_id") should return "USER_ID".
4. to_screaming_snake_case("user-address") should return "USER_ADDRESS".
5. to_screaming_snake_case("username") should return "USERNAME".
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