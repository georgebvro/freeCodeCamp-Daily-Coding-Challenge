def burn_candles(candles, leftovers_needed):
    candles_burned = 0
    total_leftovers = 0
    available_candles = candles

    while True:
        available_candles += int(total_leftovers / leftovers_needed)
        leftovers = available_candles
        leftovers_remained = total_leftovers % leftovers_needed
        total_leftovers = leftovers + leftovers_remained
        candles_burned += available_candles
        available_candles = 0

        if total_leftovers < leftovers_needed:
            break

    return candles_burned

print(burn_candles(7, 2))
print(burn_candles(10, 5))
print(burn_candles(20, 3))
print(burn_candles(17, 4))
print(burn_candles(2345, 3))
print(burn_candles(1, 2))

# --- TEST SUITE ---

tests_text = '''
1. burn_candles(7, 2) should return 13
2. burn_candles(10, 5) should return 12
3. burn_candles(20, 3) should return 29
4. burn_candles(17, 4) should return 22
5. burn_candles(2345, 3) should return 3517
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