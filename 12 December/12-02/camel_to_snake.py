def to_snake(camel):
    split_list = re.split("([A-Z])", camel)
    case_adjusted_list = [f"_{string.lower()}" if re.match("[A-Z]", string) else string for string in split_list]

    return "".join(case_adjusted_list)

# --- TEST SUITE ---

tests_text = '''
1. to_snake("helloWorld") should return "hello_world".
2. to_snake("myVariableName") should return "my_variable_name".
3. to_snake("freecodecampDailyChallenges") should return "freecodecamp_daily_challenges".
'''

import re

tests_regex = re.compile(r"(?P<number>\d+)\.\s(?P<function_call>.+) should return (?P<output>.+)\.$", re.MULTILINE)
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