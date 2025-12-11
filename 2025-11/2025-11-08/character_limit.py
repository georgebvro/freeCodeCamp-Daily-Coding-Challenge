def can_post(message):

    return "short post" if len(message) <= 40 else "long post" if len(message) <= 80 else "invalid post"

print(can_post("Hello world"))
print(can_post("This is a longer message but still under eighty characters."))
print(can_post("This message is too long to fit into either of the character limits for a social media post."))

# --- TEST SUITE ---

tests_text = '''
1. can_post("Hello world") should return "short post".
2. can_post("This is a longer message but still under eighty characters.") should return "long post".
3. can_post("This message is too long to fit into either of the character limits for a social media post.") should return "invalid post".
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