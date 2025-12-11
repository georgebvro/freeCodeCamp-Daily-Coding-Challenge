def check_strength(password):
    import re
    strength = 0

    if len(password) >= 8:
        strength += 1

    if re.search(r"[a-z]", password) and re.search(r"[A-Z]", password):
        strength += 1

    if re.search(r"\d", password):
        strength += 1

    if re.search(r"[!@#$%^&*]", password):
        strength += 1

    return "weak" if strength < 2 else "medium" if strength < 4 else "strong"

print(check_strength("123456"))
print(check_strength("pass!!!"))
print(check_strength("Qwerty"))
print(check_strength("PASSWORD"))
print(check_strength("PASSWORD!"))
print(check_strength("PassWord%^!"))
print(check_strength("qwerty12345"))
print(check_strength("PASSWORD!"))
print(check_strength("PASSWORD!"))
print(check_strength("S3cur3P@ssw0rd"))
print(check_strength("C0d3&Fun!"))

# --- TEST SUITE ---

tests_text = '''
1. check_strength("123456") should return "weak".
2. check_strength("pass!!!") should return "weak".
3. check_strength("Qwerty") should return "weak".
4. check_strength("PASSWORD") should return "weak".
5. check_strength("PASSWORD!") should return "medium".
6. check_strength("PassWord%^!") should return "medium".
7. check_strength("qwerty12345") should return "medium".
8. check_strength("S3cur3P@ssw0rd") should return "strong".
9. check_strength("C0d3&Fun!") should return "strong".
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