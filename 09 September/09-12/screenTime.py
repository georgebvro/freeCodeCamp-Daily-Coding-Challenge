from functools import reduce

def too_much_screen_time(hours):

    if any(day >= 10 for day in hours):
        return True

    for i, day in enumerate(hours[:-3]):
        if (sum(hours[i:i + 3])) / 3 >= 8:
            return True

    if reduce(lambda x, y: x + y, hours) / len(hours) >= 6:
        return True

    return False

print(too_much_screen_time([1, 2, 3, 4, 5, 6, 7]))
print(too_much_screen_time([7, 8, 8, 4, 2, 2, 3]))
print(too_much_screen_time([5, 6, 6, 6, 6, 6, 6]))
print(too_much_screen_time([1, 2, 3, 11, 1, 3, 4]))
print(too_much_screen_time([1, 2, 3, 10, 2, 1, 0]))
print(too_much_screen_time([3, 3, 5, 8, 8, 9, 4]))
print(too_much_screen_time([3, 9, 4, 8, 5, 7, 6]))

# --- TEST SUITE ---

tests_text = '''
1. too_much_screen_time([1, 2, 3, 4, 5, 6, 7]) should return False.
2. too_much_screen_time([7, 8, 8, 4, 2, 2, 3]) should return False.
3. too_much_screen_time([5, 6, 6, 6, 6, 6, 6]) should return False.
4. too_much_screen_time([1, 2, 3, 11, 1, 3, 4]) should return True.
5. too_much_screen_time([1, 2, 3, 10, 2, 1, 0]) should return True.
6. too_much_screen_time([3, 3, 5, 8, 8, 9, 4]) should return True.
7. too_much_screen_time([3, 9, 4, 8, 5, 7, 6]) should return True.
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