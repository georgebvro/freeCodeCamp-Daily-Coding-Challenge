def gcd(x, y):

    return max(find_divisors(x).intersection(find_divisors(y)))

def find_divisors(n):
    divisors = {1, n}

    for test_divisor in range(2, n // 2 + 1):
        if n % test_divisor == 0:
            divisors.add(test_divisor)

    return divisors

print(gcd(4, 6))
print(gcd(20, 15))
print(gcd(13, 17))
print(gcd(654, 456))
print(gcd(3456, 4320))

# --- TEST SUITE ---

tests_text = '''
1. gcd(4, 6) should return 2.
2. gcd(20, 15) should return 5.
3. gcd(13, 17) should return 1.
4. gcd(654, 456) should return 6.
5. gcd(3456, 4320) should return 864.
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