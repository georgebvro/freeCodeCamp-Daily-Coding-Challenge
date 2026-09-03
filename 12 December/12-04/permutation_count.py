def count_permutations(s):
    # P = n! / (n1! * n2! * ... * nk!)
    letter_set = set(s)
    numerator = factorial(len(s))
    denominator = 1

    for letter in letter_set:
        letter_count = len(re.findall(letter, s))
        denominator *= factorial(letter_count)

    return numerator / denominator

def factorial(n):
    return 1 if n <= 1 else n * factorial(n - 1)

# --- TEST SUITE ---

tests_text = '''
1. count_permutations("abb") should return 3.
2. count_permutations("abc") should return 6.
3. count_permutations("racecar") should return 630.
4. count_permutations("freecodecamp") should return 39916800.
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