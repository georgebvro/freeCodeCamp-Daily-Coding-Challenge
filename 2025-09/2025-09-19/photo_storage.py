def number_of_photos(photo_size_mb, drive_size_gb):

    return drive_size_gb * 1000 // photo_size_mb

print(number_of_photos(1, 1))
print(number_of_photos(2, 1))
print(number_of_photos(4, 256))
print(number_of_photos(3.5, 750))
print(number_of_photos(3.5, 5.5))

# --- TEST SUITE ---

tests_text = '''
1. number_of_photos(1, 1) should return 1000.
2. number_of_photos(2, 1) should return 500.
3. number_of_photos(4, 256) should return 64000.
4. number_of_photos(3.5, 750) should return 214285.
5. number_of_photos(3.5, 5.5) should return 1571.
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