def count_words(sentence):

    return len(sentence.split(" "))

print(count_words("Hello world"))
print(count_words("The quick brown fox jumps over the lazy dog."))
print(count_words("I like coding challenges!"))
print(count_words("Complete the challenge in JavaScript and Python."))
print(count_words("The missing semi-colon crashed the entire internet."))

# --- TEST SUITE ---

tests_text = '''
1. count_words("Hello world") should return 2.
2. count_words("The quick brown fox jumps over the lazy dog.") should return 9.
3. count_words("I like coding challenges!") should return 4.
4. count_words("Complete the challenge in JavaScript and Python.") should return 7.
5. count_words("The missing semi-colon crashed the entire internet.") should return 7.
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