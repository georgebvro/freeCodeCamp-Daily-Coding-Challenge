def build_matrix(rows, cols):
    value_to_fill = 0

    return [[value_to_fill for _ in range(cols)] for _ in range(rows)]

print(build_matrix(2, 3))
print(build_matrix(3, 2))
print(build_matrix(4, 3))
print(build_matrix(9, 1))

# --- TEST SUITE ---

tests_text = '''
Waiting:1. build_matrix(2, 3) should return [[0, 0, 0], [0, 0, 0]].
Waiting:2. build_matrix(3, 2) should return [[0, 0], [0, 0], [0, 0]].
Waiting:3. build_matrix(4, 3) should return [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]].
Waiting:4. build_matrix(9, 1) should return [[0], [0], [0], [0], [0], [0], [0], [0], [0]].
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