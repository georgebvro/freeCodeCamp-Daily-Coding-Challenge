def dive(map, coordinates):
    if map[coordinates[0]][coordinates[1]] == "-":
        return "Empty"

    updated_map = map[:]
    updated_map[coordinates[0]][coordinates[1]] = "X"

    for row in updated_map:
        for location in row:
            if location == "O":
                return "Found"

    return "Recovered"

print(dive([[ "-", "X"], [ "-", "X"], [ "-", "O"]], [2, 1]))
print(dive([[ "-", "X"], [ "-", "X"], [ "-", "O"]], [2, 0]))
print(dive([[ "-", "X"], [ "-", "O"], [ "-", "O"]], [1, 1]))
print(dive([[ "-", "-", "-"], [ "X", "O", "X"], [ "-", "-", "-"]], [1, 2]))
print(dive([[ "-", "-", "-"], [ "-", "-", "-"], [ "O", "X", "X"]], [2, 0]))
print(dive([[ "-", "-", "-"], [ "-", "-", "-"], [ "O", "X", "X"]], [1, 2]))

# --- TEST SUITE ---

tests_text = '''
1. dive([[ "-", "X"], [ "-", "X"], [ "-", "O"]], [2, 1]) should return "Recovered".
2. dive([[ "-", "X"], [ "-", "X"], [ "-", "O"]], [2, 0]) should return "Empty".
3. dive([[ "-", "X"], [ "-", "O"], [ "-", "O"]], [1, 1]) should return "Found".
4. dive([[ "-", "-", "-"], [ "X", "O", "X"], [ "-", "-", "-"]], [1, 2]) should return "Found".
5. dive([[ "-", "-", "-"], [ "-", "-", "-"], [ "O", "X", "X"]], [2, 0]) should return "Recovered".
6. dive([[ "-", "-", "-"], [ "-", "-", "-"], [ "O", "X", "X"]], [1, 2]) should return "Empty".
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