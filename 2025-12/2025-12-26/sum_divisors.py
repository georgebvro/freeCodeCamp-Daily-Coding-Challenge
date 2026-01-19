def sum_divisors(n):
    sum = 1 if n == 1 else 1 + n

    for i in range(2, n // 2 + 1):
        if n % i == 0:
            sum += i

    return sum

print(sum_divisors(6))
print(sum_divisors(13))
print(sum_divisors(28))
print(sum_divisors(84))
print(sum_divisors(549))
print(sum_divisors(9348))

print(sum_divisors(1))
print(sum_divisors(2))
print(sum_divisors(3))
print(sum_divisors(4))

# --- TEST SUITE ---

tests_text = r'''
1. sum_divisors(6) should return 12.
2. sum_divisors(13) should return 14.
3. sum_divisors(28) should return 56.
4. sum_divisors(84) should return 224.
5. sum_divisors(549) should return 806.
6. sum_divisors(9348) should return 23520.
'''

import re

tests_regex = re.compile(r"(?P<number>\d+)\.\s(?P<function_call>.+) should return (?P<output>.+?)\.?$", re.MULTILINE)
test_data = [item.groupdict() for item in re.finditer(tests_regex, tests_text)]

def run_tests(test_data):
    print("--------------------------")
    print("🧪 Starting Verification...")
    print("--------------------------")

    fail_count = 0

    for test in test_data:
        function_call_output = eval(test['function_call'])
        test_output = eval(test['output'])
        
        if function_call_output == test_output:
            print(f"{test['number']}.✅ PASS - Function Call:\n{test['function_call']}")
        else:
            print(f"{test['number']}.❌ FAIL - Function Call:\n{test['function_call']}\nExpected:\n{test_output}\nGot:\n{function_call_output}")
            fail_count += 1

    print("----------------------------",
        f"\n⚠️ WARNING: {fail_count}/{len(test_data)} tests FAILED." if fail_count
        else "\n🎉 SUCCESS: All tests PASSED."
    )

#run_tests(test_data)