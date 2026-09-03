def generate_slug(str):
    import re
    
    str = str.strip().lower()
    str = re.sub(r"[^a-z0-9 ]", "", str)
    str = re.sub(r" +", " ", str)
    str = re.sub(r" ", "%20", str)

    return str

print(generate_slug("helloWorld"))
print(generate_slug("hello world!"))
print(generate_slug(" hello-world "))
print(generate_slug("hello  world"))
print(generate_slug("  ?H^3-1*1]0! W[0%R#1]D  "))

print(generate_slug(" one two  three   4   5  "))

# --- TEST SUITE ---

tests_text = '''
1. generate_slug("helloWorld") should return "helloworld".
2. generate_slug("hello world!") should return "hello%20world".
3. generate_slug(" hello-world ") should return "helloworld".
4. generate_slug("hello  world") should return "hello%20world".
5. generate_slug("  ?H^3-1*1]0! W[0%R#1]D  ") should return "h3110%20w0r1d".
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