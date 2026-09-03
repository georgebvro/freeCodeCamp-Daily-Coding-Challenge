def validate(email):
    import re

    return bool(re.match(r"^(?!.*@.*@)(?!\.)(?![\w-]*\.\.)[\w.-]+(?<!\.)@(?!.*\.\.).*\.[a-zA-Z]{2,}$", email))

print(validate("a@b.cd"))
print(validate("hell.-w.rld@example.com"))
print(validate(".b@sh.rc"))
print(validate("example@test.c0"))
print(validate("freecodecamp.org"))
print(validate("develop.ment_user@c0D!NG.R.CKS"))
print(validate("hello.@wo.rld"))
print(validate("hello@world..com"))
print(validate("git@commit@push.io"))

print(validate("a,b@domain.com"))
print(validate("a@domain"))
print(validate("a@domain.c"))
print(validate("a@.domain.com"))
print(validate("a@..domain.com"))
print(validate("..a@domain.com"))
print(validate("...a@domain.com"))
print(validate("abc..def@domain.com"))
print(validate("abc@sub.domain.com"))
print(validate("@domain.com"))
print(validate("abc@sub.domain.com."))

# --- TEST SUITE ---

tests_text = '''
1. validate("a@b.cd") should return True.
2. validate("hell.-w.rld@example.com") should return True.
3. validate(".b@sh.rc") should return False.
4. validate("example@test.c0") should return False.
5. validate("freecodecamp.org") should return False.
6. validate("develop.ment_user@c0D!NG.R.CKS") should return True.
7. validate("hello.@wo.rld") should return False.
8. validate("hello@world..com") should return False.
9. validate("develop..ment_user@c0D!NG.R.CKS") should return False.
10. validate("git@commit@push.io") should return False.
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