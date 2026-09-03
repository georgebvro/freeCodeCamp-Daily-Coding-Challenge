def reverse_sentence(sentence):
    
    return " ".join(list(filter(lambda word: word != '', sentence.split(" ")))[::-1])

print(reverse_sentence("world hello"))
print(reverse_sentence("push commit git"))
print(reverse_sentence("npm  install  sudo"))
print(reverse_sentence("import    default   function  export"))

# --- TEST SUITE ---

tests_text = '''
1. reverse_sentence("world hello") should return "hello world".
2. reverse_sentence("push commit git") should return "git commit push".
3. reverse_sentence("npm  install   apt    sudo") should return "sudo apt install npm".
4. reverse_sentence("import    default   function  export") should return "export function default import".
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