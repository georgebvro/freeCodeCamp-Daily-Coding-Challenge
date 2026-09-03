def all_unique(s):
    
    return not any(s.index(char) != index for index, char in enumerate(s))

print(all_unique("abc"))
print(all_unique("aA"))
print(all_unique("QwErTy123!@"))
print(all_unique("~!@#$%^&*()_+"))
print(all_unique("hello"))
print(all_unique("freeCodeCamp"))
print(all_unique("!@#*$%^&*()aA"))

# --- TEST SUITE ---

tests_text = '''
1. all_unique("abc") should return True.
2. all_unique("aA") should return True.
3. all_unique("QwErTy123!@") should return True.
4. all_unique("~!@#$%^&*()_+") should return True.
5. all_unique("hello") should return False.
6. all_unique("freeCodeCamp") should return False.
7. all_unique("!@#*$%^&*()aA") should return False.
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