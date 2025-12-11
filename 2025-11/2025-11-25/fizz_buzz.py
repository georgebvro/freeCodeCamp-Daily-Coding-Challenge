def fizz_buzz(n):
    if n == 1:
        return [1]

    if n % (3 * 5) == 0:
        element_to_add = "FizzBuzz"
    elif n % 3 == 0:
        element_to_add = "Fizz"
    elif n % 5 == 0:
        element_to_add = "Buzz"
    else:
        element_to_add = n

# Using conditional expression
#    element_to_add = \
#        "FizzBuzz" if n % (3 * 5) == 0 \
#        else "Fizz" if n % 3 == 0 \
#        else "Buzz" if n % 5 == 0 \
#        else n

    return fizz_buzz(n - 1) + [element_to_add]

# --- TEST SUITE ---

tests_text = '''
1. fizz_buzz(2) should return [1, 2].
2. fizz_buzz(4) should return [1, 2, "Fizz", 4].
3. fizz_buzz(8) should return [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8].
4. fizz_buzz(20) should return [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz"].
5. fizz_buzz(50) should return [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz", 31, 32, "Fizz", 34, "Buzz", "Fizz", 37, 38, "Fizz", "Buzz", 41, "Fizz", 43, 44, "FizzBuzz", 46, 47, "Fizz", 49, "Buzz"].
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