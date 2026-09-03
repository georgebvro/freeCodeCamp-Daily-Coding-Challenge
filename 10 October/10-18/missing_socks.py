def sock_pairs(pairs, cycles):
    remaining_pairs = (pairs * 2 
        - cycles // 2 
        + cycles // 3 
        - cycles // 5 
        + cycles // 10 * 2) \
        // 2

    return remaining_pairs if remaining_pairs >= 0 else 0

print(sock_pairs(2, 5))
print(sock_pairs(1, 2))
print(sock_pairs(5, 11))
print(sock_pairs(6, 25))
print(sock_pairs(1, 8))

# --- TEST SUITE ---

tests_text = '''
1. sock_pairs(2, 5) should return 1.
2. sock_pairs(1, 2) should return 0.
3. sock_pairs(5, 11) should return 4.
4. sock_pairs(6, 25) should return 3.
5. sock_pairs(1, 8) should return 0.
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