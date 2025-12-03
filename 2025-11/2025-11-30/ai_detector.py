def detect_ai(text):
    if len(re.findall("-", text)) >= 2 \
    or len(re.findall("\(.*?\)", text)) >= 2 \
    or len([word for word in re.sub("[^a-zA-Z ]", "", text).split() if len(word) >= 7]) >= 3:
        return "AI"

    return "Human"

# --- TEST SUITE ---

tests_text = '''
1. detect_ai("The quick brown fox jumped over the lazy dog.") should return "Human".
2. detect_ai("The hypersonic brown fox - jumped (over) the lazy dog.") should return "Human".
3. detect_ai("Yes - you're right! I made a mistake there - let me try again.") should return "AI".
4. detect_ai("The extraordinary students were studying vivaciously.") should return "AI".
5. detect_ai("The (excited) student was (coding) in the library.") should return "AI".
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