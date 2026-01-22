def is_circular_prime(n):
    s = str(n)
    is_circular_prime = True

    for i in range(len(s)):
        rotation = int(s[i:] + s[0:i])

        for maybe_factor in range(2, rotation // 2 + 1):
            if rotation % maybe_factor == 0:
                is_circular_prime = False
                break

    return is_circular_prime

# --- TEST SUITE ---

tests_text = r'''
1. is_circular_prime(197) should return True.
2. is_circular_prime(23) should return False.
3. is_circular_prime(13) should return True.
4. is_circular_prime(89) should return False.
5. is_circular_prime(1193) should return True.
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

run_tests(test_data)