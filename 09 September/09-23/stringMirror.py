def is_mirror(str1, str2):
    import re

    return re.sub(r"[^a-zA-Z]", "", str1) == re.sub(r"[^a-zA-Z]", "", str2)[::-1]

print(is_mirror("helloworld", "helloworld"))
print(is_mirror("Hello World", "dlroW olleH"))
print(is_mirror("RaceCar", "raCecaR"))
print(is_mirror("RaceCar", "RaceCar"))
print(is_mirror("Mirror", "rorrim"))
print(is_mirror("Hello World", "dlroW-olleH"))
print(is_mirror("Hello World", "!dlroW !olleH"))

# --- TEST SUITE ---

tests_text = '''
1. is_mirror("helloworld", "helloworld") should return False.
2. is_mirror("Hello World", "dlroW olleH") should return True.
3. is_mirror("RaceCar", "raCecaR") should return True.
4. is_mirror("RaceCar", "RaceCar") should return False.
5. is_mirror("Mirror", "rorrim") should return False.
6. is_mirror("Hello World", "dlroW-olleH") should return True.
7. is_mirror("Hello World", "!dlroW !olleH") should return True.
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