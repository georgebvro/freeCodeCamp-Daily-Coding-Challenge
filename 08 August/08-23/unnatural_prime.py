def is_unnatural_prime(n):
    n = abs(n)

    if n == 0 or n == 1:
        return False
    else:
        for i in range(2, int(n / 2)):
            if n % i == 0:
                return False

    return True

print(is_unnatural_prime(1))
print(is_unnatural_prime(-1))
print(is_unnatural_prime(19))
print(is_unnatural_prime(-23))
print(is_unnatural_prime(0))
print(is_unnatural_prime(97))
print(is_unnatural_prime(-61))
print(is_unnatural_prime(99))
print(is_unnatural_prime(-44))

# --- TEST SUITE ---

tests_text = '''
1. is_unnatural_prime(1) should return False.
2. is_unnatural_prime(-1) should return False.
3. is_unnatural_prime(19) should return True.
4. is_unnatural_prime(-23) should return True.
5. is_unnatural_prime(0) should return False.
6. is_unnatural_prime(97) should return True.
7. is_unnatural_prime(-61) should return True.
8. is_unnatural_prime(99) should return False.
9. is_unnatural_prime(-44) should return False.
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