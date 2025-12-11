def tribonacci_sequence(start_sequence, length):
    tribonacci = start_sequence

    while len(tribonacci) < length:
        tribonacci.append(sum(tribonacci[-3:]))

    return tribonacci[:length]

print(tribonacci_sequence([0, 0, 1], 20))
print(tribonacci_sequence([21, 32, 43], 1))
print(tribonacci_sequence([0, 0, 1], 0))
print(tribonacci_sequence([10, 20, 30], 2))
print(tribonacci_sequence([10, 20, 30], 3))
print(tribonacci_sequence([123, 456, 789], 8))

# --- TEST SUITE ---

tests_text = '''
1. tribonacci_sequence([0, 0, 1], 20) should return [0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136, 5768, 10609, 19513].
2. tribonacci_sequence([21, 32, 43], 1) should return [21].
3. tribonacci_sequence([0, 0, 1], 0) should return [].
4. tribonacci_sequence([10, 20, 30], 2) should return [10, 20].
5. tribonacci_sequence([10, 20, 30], 3) should return [10, 20, 30].
6. tribonacci_sequence([123, 456, 789], 8) should return [123, 456, 789, 1368, 2613, 4770, 8751, 16134].
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