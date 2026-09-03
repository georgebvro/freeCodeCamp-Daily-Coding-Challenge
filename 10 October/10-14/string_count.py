def count(text, parameter):
    import re

    return len(re.compile("(?=(" + parameter + "))").findall(text))

print(count('abcdefg', 'def'))
print(count('hello', 'world'))
print(count('mississippi', 'iss'))
print(count('she sells seashells by the seashore', 'sh'))
print(count('101010101010101010101', '101'))

print(count("aaa", "aa"));

# --- TEST SUITE ---

tests_text = '''
1. count('abcdefg', 'def') should return 1.
2. count('hello', 'world') should return 0.
3. count('mississippi', 'iss') should return 2.
4. count('she sells seashells by the seashore', 'sh') should return 3.
5. count('101010101010101010101', '101') should return 10.
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