import re

def count(s):

    return [
        len(re.findall("[aeiou]", s, re.IGNORECASE)),
        len(re.findall("[b-df-hj-np-tv-z]", s, re.IGNORECASE))
    ]

print(count("Hello World"))
print(count("JavaScript"))
print(count("Python"))
print(count("freeCodeCamp"))
print(count("Hello, World!"))
print(count("The quick brown fox jumps over the lazy dog."))

print(count("xyz"))
print(count("oua"))
print(count("!@#"))

# --- TEST SUITE ---

tests_text = '''
1. count("Hello World") should return [3, 7].
2. count("JavaScript") should return [3, 7].
3. count("Python") should return [1, 5].
4. count("freeCodeCamp") should return [5, 7].
5. count("Hello, World!") should return [3, 7].
6. count("The quick brown fox jumps over the lazy dog.") should return [11, 24].
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