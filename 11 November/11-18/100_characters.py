def one_hundred(chars):
    quotient, remainder = divmod(100, len(chars))

    return chars * quotient + chars[:remainder]

print(one_hundred("One hundred "))
print(one_hundred("freeCodeCamp "))
print(one_hundred("daily challenges "))
print(one_hundred("!"))

# --- TEST SUITE ---

tests_text = '''
1. one_hundred("One hundred ") should return "One hundred One hundred One hundred One hundred One hundred One hundred One hundred One hundred One ".
2. one_hundred("freeCodeCamp ") should return "freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeC".
3. one_hundred("daily challenges ") should return "daily challenges daily challenges daily challenges daily challenges daily challenges daily challenge".
4. one_hundred("!") should return "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!".
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