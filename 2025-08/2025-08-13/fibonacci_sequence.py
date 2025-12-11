def fibonacci_sequence(start_sequence, length):
    fibonacci = start_sequence[:]

    if len(fibonacci) >= length:
        return fibonacci[:length]

    fibonacci.append(fibonacci[-2] + fibonacci[-1])

    return fibonacci_sequence(fibonacci, length)

print(fibonacci_sequence([0, 1], 20))
print(fibonacci_sequence([21, 32], 1))
print(fibonacci_sequence([0, 1], 0))
print(fibonacci_sequence([10, 20], 2))
print(fibonacci_sequence([123456789, 987654321], 5))

# --- TEST SUITE ---

tests_text = '''
1. fibonacci_sequence([0, 1], 20) should return [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181].
2. fibonacci_sequence([21, 32], 1) should return [21].
3. fibonacci_sequence([0, 1], 0) should return [].
4. fibonacci_sequence([10, 20], 2) should return [10, 20].
5. fibonacci_sequence([123456789, 987654321], 5) should return [123456789, 987654321, 1111111110, 2098765431, 3209876541].
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