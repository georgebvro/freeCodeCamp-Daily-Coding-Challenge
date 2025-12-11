def count_rectangles(width, height):

    return sum_up_to_n(width) * sum_up_to_n(height)

def sum_up_to_n(n):
    return 1 if n == 1 else n + sum_up_to_n(n - 1)

print(count_rectangles(1, 3))
print(count_rectangles(3, 2))
print(count_rectangles(1, 2))
print(count_rectangles(5, 4))
print(count_rectangles(11, 19))

print(count_rectangles(2, 2))
print(count_rectangles(1, 1))
print(count_rectangles(3, 4))

# --- TEST SUITE ---

tests_text = '''
1. count_rectangles(1, 3) should return 6.
2. count_rectangles(3, 2) should return 18.
3. count_rectangles(1, 2) should return 3.
4. count_rectangles(5, 4) should return 150.
5. count_rectangles(11, 19) should return 12540.
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