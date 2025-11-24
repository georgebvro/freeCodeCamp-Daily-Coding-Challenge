def longest_word(sentence):
    words = re.sub("[^a-zA-Z ]", "", sentence).split()

    return sorted(words, key = len, reverse = True)[0]

import re

tests_text = '''
1. longest_word("The quick red fox") should return "quick".
2. longest_word("Hello coding challenge.") should return "challenge".
3. longest_word("Do Try This At Home.") should return "This".
4. longest_word("This sentence... has commas, ellipses, and an exclamation point!") should return "exclamation".
5. longest_word("A tie? No way!") should return "tie".
6. longest_word("Wouldn't you like to know.") should return "Wouldnt".
'''

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