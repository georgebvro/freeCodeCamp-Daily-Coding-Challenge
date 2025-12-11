def capitalize(paragraph):
    import re
    paragraph = paragraph[0].upper() + paragraph[1:]

    for i in range(1, len(paragraph)):
        if re.match(r"[.?!]", paragraph[i]):
            for j in range(i + 1, len(paragraph)):
                if re.match(r"[a-zA-Z]", paragraph[j]):
                    paragraph = paragraph[:j] + paragraph[j].upper() + paragraph[j + 1:]
                    break

    return paragraph

print(capitalize("this is a simple sentence."))
print(capitalize("hello world. how are you?"))
print(capitalize("i did today's coding challenge... it was fun!!"))
print(capitalize("crazy!!!strange???unconventional...sentences."))
print(capitalize("there's a space before this period . why is there a space before that period ?"))

print(capitalize("a."))
print(capitalize("b"))

# --- TEST SUITE ---

tests_text = '''
1. capitalize("this is a simple sentence.") should return "This is a simple sentence.".
2. capitalize("hello world. how are you?") should return "Hello world. How are you?".
3. capitalize("i did today's coding challenge... it was fun!!") should return "I did today's coding challenge... It was fun!!".
4. capitalize("crazy!!!strange???unconventional...sentences.") should return "Crazy!!!Strange???Unconventional...Sentences.".
5. capitalize("there's a space before this period . why is there a space before that period ?") should return "There's a space before this period . Why is there a space before that period ?".
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