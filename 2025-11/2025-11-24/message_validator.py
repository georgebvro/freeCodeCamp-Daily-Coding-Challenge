def is_valid_message(message, validation):

    return "".join(word[0] for word in message.lower().split()) == validation.lower()

tests_text = '''
1. is_valid_message("hello world", "hw") should return True.
2. is_valid_message("ALL CAPITAL LETTERS", "acl") should return True.
3. is_valid_message("Coding challenge are boring.", "cca") should return False.
4. is_valid_message("The quick brown fox jumps over the lazy dog.", "TQBFJOTLD") should return True.
5. is_valid_message("The quick brown fox jumps over the lazy dog.", "TQBFJOTLDT") should return False.
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