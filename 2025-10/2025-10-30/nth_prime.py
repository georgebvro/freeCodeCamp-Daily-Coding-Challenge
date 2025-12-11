def nth_prime(n):
    if n == 1:
        return 2

    tested_number = 1
    primes_found = 1

    while primes_found < n:
        tested_number += 2
        is_prime = True

        for divisor in range(3, tested_number // 2, 2):
            if tested_number % divisor == 0:
                is_prime = False
                break

        if is_prime:
            primes_found += 1

    return tested_number

print(nth_prime(5))
print(nth_prime(10))
print(nth_prime(16))
print(nth_prime(99))
print(nth_prime(1000))

print(nth_prime(1))
print(nth_prime(2))
print(nth_prime(3))

# --- TEST SUITE ---

tests_text = '''
1. nth_prime(5) should return 11.
2. nth_prime(10) should return 29.
3. nth_prime(16) should return 53.
4. nth_prime(99) should return 523.
5. nth_prime(1000) should return 7919.
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