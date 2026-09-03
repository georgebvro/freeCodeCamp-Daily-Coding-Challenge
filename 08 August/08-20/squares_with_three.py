def squares_with_three(n):
    count = 0;
    for i in range(1, n + 1):
        square = i ** 2;
        if '3' in str(square):
            count += 1
    return count

print(squares_with_three(1))
print(squares_with_three(10))
print(squares_with_three(100))
print(squares_with_three(1000))
print(squares_with_three(10000))

# --- TEST SUITE ---

tests_text = '''
1. squares_with_three(1) should return 0.
2. squares_with_three(10) should return 1.
3. squares_with_three(100) should return 19.
4. squares_with_three(1000) should return 326.
5. squares_with_three(10000) should return 4531.
'''

import re

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