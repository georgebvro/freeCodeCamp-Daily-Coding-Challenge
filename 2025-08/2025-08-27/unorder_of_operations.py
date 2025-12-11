def evaluate(numbers, operators):
    result = numbers[0]

    for i in range(1, len(numbers)):
        operand = numbers[i]
        operator = operators[(i - 1) % len(operators)]
        result = eval(str(result) + operator + str(operand))

    return result

print(evaluate([5, 6, 7, 8, 9], ['+', '-']))
print(evaluate([17, 61, 40, 24, 38, 14], ['+', '%']))
print(evaluate([20, 2, 4, 24, 12, 3], ['*', '/']))
print(evaluate([11, 4, 10, 17, 2], ['*', '*', '%']))
print(evaluate([33, 11, 29, 13], ['/', '-']))
print(evaluate([1, 2], ['+']))
print(evaluate([2], ['%']))
print(evaluate([1, 2, 3], ['-']))

# --- TEST SUITE ---

tests_text = '''
1. evaluate([5, 6, 7, 8, 9], ['+', '-']) should return 3
2. evaluate([17, 61, 40, 24, 38, 14], ['+', '%']) should return 38
3. evaluate([20, 2, 4, 24, 12, 3], ['*', '/']) should return 60
4. evaluate([11, 4, 10, 17, 2], ['*', '*', '%']) should return 30
5. evaluate([33, 11, 29, 13], ['/', '-']) should return -2
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