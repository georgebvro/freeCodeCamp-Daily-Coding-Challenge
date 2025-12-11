def jbelmu(text):
    textList = text.split()

    textList = map(jumbleWord, textList)

    return " ".join(list(textList))

def jumbleWord(word):
    wordList = sorted(list(word)[1:-1])
    
    wordList = [word[0]] + wordList
    if len(word) > 1:
        wordList += word[-1]
    
    return "".join(wordList)

print(jbelmu("hello world"))
print(jbelmu("i love jumbled text"))
print(jbelmu("freecodecamp is my favorite place to learn to code"))
print(jbelmu("the quick brown fox jumps over the lazy dog"))

# --- TEST SUITE ---

tests_text = '''
1. jbelmu("hello world") should return "hello wlord".
2. jbelmu("i love jumbled text") should return "i love jbelmud text".
3. jbelmu("freecodecamp is my favorite place to learn to code") should return "faccdeeemorp is my faiortve pacle to laern to cdoe".
4. jbelmu("the quick brown fox jumps over the lazy dog") should return "the qciuk borwn fox jmpus oevr the lazy dog".
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