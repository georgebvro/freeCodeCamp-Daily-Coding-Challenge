def is_perfect_square(n):
    import math
    
    return n >= 0 and math.sqrt(n).is_integer()

print(is_perfect_square(9))
print(is_perfect_square(49))
print(is_perfect_square(1))
print(is_perfect_square(2))
print(is_perfect_square(99))
print(is_perfect_square(-9))
print(is_perfect_square(0))
print(is_perfect_square(25281))

# --- TEST SUITE ---

tests_text = '''
1. is_perfect_square(9) should return True.
2. is_perfect_square(49) should return True.
3. is_perfect_square(1) should return True.
4. is_perfect_square(2) should return False.
5. is_perfect_square(99) should return False.
6. is_perfect_square(-9) should return False.
7. is_perfect_square(0) should return True.
8. is_perfect_square(25281) should return True.
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