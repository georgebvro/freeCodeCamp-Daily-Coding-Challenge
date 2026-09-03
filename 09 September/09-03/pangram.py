import re

def is_pangram(sentence, letters):
    regex = re.compile(r'[^a-zA-Z]')
    sentence = re.sub(regex, "", sentence).lower()
    
    return is_it_pangram(sentence, letters) and is_it_pangram(letters, sentence)

def is_it_pangram(string1, string2):
    for character in string2:
        if not character in string1:
            return False
    return True

print(is_pangram("hello", "helo"))
print(is_pangram("hello", "hel"))
print(is_pangram("hello", "helow"))
print(is_pangram("hello world", "helowrd"))
print(is_pangram("Hello World!", "helowrd"))
print(is_pangram("Hello World!", "heliowrd"))
print(is_pangram("freeCodeCamp", "frcdmp"))
print(is_pangram("The quick brown fox jumps over the lazy dog.", "abcdefghijklmnopqrstuvwxyz"))

# --- TEST SUITE ---

tests_text = '''
1. is_pangram("hello", "helo") should return True
2. is_pangram("hello", "hel") should return False
3. is_pangram("hello", "helow") should return False
4. is_pangram("hello world", "helowrd") should return True
5. is_pangram("Hello World!", "helowrd") should return True
6. is_pangram("Hello World!", "heliowrd") should return False
7. is_pangram("freeCodeCamp", "frcdmp") should return False
8. is_pangram("The quick brown fox jumps over the lazy dog.", "abcdefghijklmnopqrstuvwxyz") should return True
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