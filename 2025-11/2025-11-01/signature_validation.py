import re

def verify(message, key, signature):
    value_of_lowercase_a = 1
    value_of_uppercase_a = 27

    message_and_key_values = [
        ord(letter) - ord('a') + value_of_lowercase_a if re.match("[a-z]", letter) 
        else ord(letter) - ord('A') + value_of_uppercase_a 
        
        for letter in re.sub("[^a-zA-Z]", "", message + key)
    ]
    
    return sum(message_and_key_values) == signature

print(verify("foo", "bar", 57))
print(verify("foo", "bar", 54))
print(verify("freeCodeCamp", "Rocks", 238))
print(verify("Is this valid?", "No", 210))
print(verify("Is this valid?", "Yes", 233))
print(verify("Check out the freeCodeCamp podcast,", "in the mobile app", 514))

# --- TEST SUITE ---

tests_text = '''
1. verify("foo", "bar", 57) should return True.
2. verify("foo", "bar", 54) should return False.
3. verify("freeCodeCamp", "Rocks", 238) should return True.
4. verify("Is this valid?", "No", 210) should return False.
5. verify("Is this valid?", "Yes", 233) should return True.
6. verify("Check out the freeCodeCamp podcast,", "in the mobile app", 514) should return True.
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