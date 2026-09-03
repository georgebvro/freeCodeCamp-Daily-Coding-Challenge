def combinations(cards):
    cards_in_deck = 13 * 4

    return factorial(cards_in_deck) / (factorial(cards) * factorial(cards_in_deck - cards))

def factorial(n):
    if n == 1 or n == 0:
        return 1

    return n * factorial(n - 1)

print(combinations(52))
print(combinations(1))
print(combinations(2))
print(combinations(5))
print(combinations(10))
print(combinations(50))

print(combinations(0))

# --- TEST SUITE ---

tests_text = '''
1. combinations(52) should return 1.
2. combinations(1) should return 52.
3. combinations(2) should return 1326.
4. combinations(5) should return 2598960.
5. combinations(10) should return 15820024220.
6. combinations(50) should return 1326.
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