def is_balanced(s):
    import re, math
    regex = re.compile(r"[aeiou]", re.IGNORECASE)

    first_half = s[0 : math.floor(len(s) / 2)]
    second_half = s[math.ceil(len(s) / 2) : ]

    return len(regex.findall(first_half)) == len(regex.findall(second_half))

print(is_balanced("racecar"))
print(is_balanced("Lorem Ipsum"))
print(is_balanced("Kitty Ipsum"))
print(is_balanced("string"))
print(is_balanced(" "))
print(is_balanced("abcdefghijklmnopqrstuvwxyz"))
print(is_balanced("123A#b!E&*456-o.U"))

print(is_balanced("a"))

# --- TEST SUITE ---

tests_text = '''
1. is_balanced("racecar") should return True.
2. is_balanced("Lorem Ipsum") should return True.
3. is_balanced("Kitty Ipsum") should return False.
4. is_balanced("string") should return False.
5. is_balanced(" ") should return True.
6. is_balanced("abcdefghijklmnopqrstuvwxyz") should return False.
7. is_balanced("123A#b!E&*456-o.U") should return True.
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