import re

def decode(s):
    regex = re.compile(r'\([^\(\)]*\)')
    
    while regex.search(s):
        s = re.sub(regex, replacer, s)

    return s

def replacer(match):
    return match.group(0)[1:len(match.group(0)) - 1][::-1]

print(decode("(f(b(dc)e)a)"))
print(decode("((is?)(a(t d)h)e(n y( uo)r)aC)"))
print(decode("f(Ce(re))o((e(aC)m)d)p"))
print(decode("a(())b"))

# --- TEST SUITE ---

tests_text = '''
1. decode("(f(b(dc)e)a)") should return "abcdef".
2. decode("((is?)(a(t d)h)e(n y( uo)r)aC)") should return "Can you read this?".
3. decode("f(Ce(re))o((e(aC)m)d)p") should return "freeCodeCamp".
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