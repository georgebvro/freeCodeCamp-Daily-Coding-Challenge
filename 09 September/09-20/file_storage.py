def number_of_files(file_size, file_unit, drive_size_gb):
    
    return int(drive_size_gb / (
        file_size / 1000 if file_unit == "MB" 
        else file_size / 1000000 if file_unit == "KB" 
        else file_size / 1000000000))

print(number_of_files(500, "KB", 1))
print(number_of_files(50000, "B", 1))
print(number_of_files(5, "MB", 1))
print(number_of_files(4096, "B", 1.5))
print(number_of_files(220.5, "KB", 100))
print(number_of_files(4.5, "MB", 750))

# --- TEST SUITE ---

tests_text = '''
1. number_of_files(500, "KB", 1) should return 2000.
2. number_of_files(50000, "B", 1) should return 20000.
3. number_of_files(5, "MB", 1) should return 200.
4. number_of_files(4096, "B", 1.5) should return 366210.
5. number_of_files(220.5, "KB", 100) should return 453514.
6. number_of_files(4.5, "MB", 750) should return 166666.
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