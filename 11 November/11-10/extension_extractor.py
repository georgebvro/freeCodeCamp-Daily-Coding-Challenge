import re

def get_extension(filename):
    match = re.search(r"\.(?P<extension>[^\.]*)$", filename)
    
    if match:
        extension = match.groupdict()['extension']
        return extension or "none"

    else:
        return "none"

print(get_extension("document.txt"))
print(get_extension("README"))
print(get_extension("image.PNG"))
print(get_extension(".gitignore"))
print(get_extension("archive.tar.gz"))
print(get_extension("final.draft."))

# --- TEST SUITE ---

tests_text = '''
1. get_extension("document.txt") should return "txt".
2. get_extension("README") should return "none".
3. get_extension("image.PNG") should return "PNG".
4. get_extension(".gitignore") should return "gitignore".
5. get_extension("archive.tar.gz") should return "gz".
6. get_extension("final.draft.") should return "none".
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