def is_match(fingerprint_a, fingerprint_b):
    different_characters_count = 0;

    if len(fingerprint_a) != len(fingerprint_b):
        return False

    for index, character in enumerate(fingerprint_a):
        if character != fingerprint_b[index]:
            different_characters_count += 1

    return different_characters_count <= len(fingerprint_a) * 10 / 100

print(is_match("helloworld", "helloworld"))
print(is_match("helloworld", "helloworlds"))
print(is_match("helloworld", "jelloworld"))
print(is_match("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthelazydog"))
print(is_match("theslickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazydog"))
print(is_match("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazycat"))

print(is_match("1234567890", "123456789x"))

# --- TEST SUITE ---

tests_text = '''
1. is_match("helloworld", "helloworld") should return True.
2. is_match("helloworld", "helloworlds") should return False.
3. is_match("helloworld", "jelloworld") should return True.
4. is_match("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthelazydog") should return True.
5. is_match("theslickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazydog") should return True.
6. is_match("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazycat") should return False.
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