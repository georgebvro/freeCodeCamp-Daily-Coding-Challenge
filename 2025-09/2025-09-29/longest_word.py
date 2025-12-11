def get_longest_word(sentence):
    words = sentence.replace(".", "").split()

    longest_word = ""

    for word in words:
        if len(word) > len(longest_word):
            longest_word = word

    return longest_word

print(get_longest_word("coding is fun"))
print(get_longest_word("Coding challenges are fun and educational."))
print(get_longest_word("This sentence has multiple long words."))

# --- TEST SUITE ---

tests_text = '''
1. get_longest_word("coding is fun") should return "coding".
2. get_longest_word("Coding challenges are fun and educational.") should return "educational".
3. get_longest_word("This sentence has multiple long words.") should return "sentence".
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