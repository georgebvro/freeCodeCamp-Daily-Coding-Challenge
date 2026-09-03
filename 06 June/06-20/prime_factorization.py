def prime_factorization(n):
    factor_found = n

    for possible_factor in range(2, n // 2):
        if not n % possible_factor:
            factor_found = possible_factor
            break

    return [n] if factor_found == n else [factor_found] + prime_factorization(n // factor_found)

# --- TEST SUITE ---

tests_text = r'''
1. prime_factorization(20) should return [2, 2, 5].
2. prime_factorization(17) should return [17].
3. prime_factorization(15) should return [3, 5].
4. prime_factorization(35) should return [5, 7].
5. prime_factorization(999) should return [3, 3, 3, 37].
6. prime_factorization(360) should return [2, 2, 2, 3, 3, 5].
7. prime_factorization(510510) should return [2, 3, 5, 7, 11, 13, 17].
'''

import re

tests_regex = re.compile(r"(?P<number>\d+)\.\s(?P<function_call>.+) should return (?P<output>.+?)\.?$", re.MULTILINE)
test_data = [item.groupdict() for item in re.finditer(tests_regex, tests_text)]

def run_tests(test_data):
    print("——————————————————————————",
        "\n🧪 Starting Verification...",
        "\n——————————————————————————")

    fail_count = 0

    for test in test_data:
        function_call_output = eval(test['function_call'])
        test_output = eval(test['output'])
        
        if function_call_output == test_output:
            print(f"{test['number']}.✅ PASS - Function Call:\n{test['function_call']}")
        else:
            print(f"{test['number']}.❌ FAIL - Function Call:\n{test['function_call']}\nExpected:\n{test_output}\nGot:\n{function_call_output}")
            fail_count += 1

        print("————————————————————————————")

    print(
        f"⚠️ WARNING: {fail_count}/{len(test_data)} tests FAILED." if fail_count
        else "🎉 SUCCESS: All tests PASSED."
    )

run_tests(test_data)