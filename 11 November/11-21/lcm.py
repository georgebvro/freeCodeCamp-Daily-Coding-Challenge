def lcm(a, b):
    bigger_number = max(a, b)
    smaller_number = min(a, b)
    i = 1
    possible_lcm = bigger_number

    while possible_lcm % smaller_number != 0:
        i += 1
        possible_lcm = bigger_number * i

    return possible_lcm

# --- TEST SUITE ---

import re

tests_text = '''
1. lcm(4, 6) should return 12.
2. lcm(9, 6) should return 18.
3. lcm(10, 100) should return 100.
4. lcm(13, 17) should return 221.
5. lcm(45, 70) should return 630.
'''

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