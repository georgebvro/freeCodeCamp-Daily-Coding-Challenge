def mask(card):
    import re

    return re.sub("\d", "*", card[:15]) + card[15:]

print(mask("4012-8888-8888-1881"))
print(mask("5105 1051 0510 5100"))
print(mask("6011 1111 1111 1117"))
print(mask("2223-0000-4845-0010"))

# --- TEST SUITE ---

tests_text = '''
1. mask("4012-8888-8888-1881") should return "****-****-****-1881".
2. mask("5105 1051 0510 5100") should return "**** **** **** 5100".
3. mask("6011 1111 1111 1117") should return "**** **** **** 1117".
4. mask("2223-0000-4845-0010") should return "****-****-****-0010".
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