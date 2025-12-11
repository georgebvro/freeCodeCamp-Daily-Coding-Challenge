def format(seconds):
    hrs = seconds // 3600
    mins = (seconds - hrs * 3600) // 60
    secs = seconds - hrs * 3600 - mins * 60

    duration = f"{hrs}:" if hrs != 0 else ""
    duration += f"0{mins}:" if hrs != 0 and mins <= 9 else f"{mins}:"
    duration += f"0{secs}" if secs <= 9 else f"{secs}"

    return duration

print(format(500))
print(format(4000))
print(format(1))
print(format(5555))
print(format(99999))

# --- TEST SUITE ---

tests_text = '''
1. format(500) should return "8:20".
2. format(4000) should return "1:06:40".
3. format(1) should return "0:01".
4. format(5555) should return "1:32:35".
5. format(99999) should return "27:46:39".
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