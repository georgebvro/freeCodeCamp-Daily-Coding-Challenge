def compress_string(sentence):
    words = sentence.split()
    compressed = []
    counter = 0
    i = 0

    while (i < len(words)):
        j = i
    
        while (j < len(words) and words[i] == words[j]):
            counter += 1
            j += 1

        compressed.append(f"{words[i]}({counter})" if counter > 1 else words[i])
        counter = 0
        i = j

    return " ".join(compressed)

print(compress_string("yes yes yes please"));
print(compress_string("I have have have apples"));
print(compress_string("one one three and to the the the the"));
print(compress_string("route route route route route route tee tee tee tee tee tee"));

# --- TEST SUITE ---

tests_text = '''
1. compress_string("yes yes yes please") should return "yes(3) please".
2. compress_string("I have have have apples") should return "I have(3) apples".
3. compress_string("one one three and to the the the the") should return "one(2) three and to the(4)".
4. compress_string("route route route route route route tee tee tee tee tee tee") should return "route(6) tee(6)".
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