def to_12(time):
    hour = int(time[:2])
    minute = time[2:]
    meridiem = "AM" if hour < 12 else "PM"

    hour = 12 if hour == 0 else hour % 12

    return f"{hour}:{minute} {meridiem}"

print(to_12("1124"))
print(to_12("0900"))
print(to_12("1455"))
print(to_12("2346"))
print(to_12("0030"))

# --- TEST SUITE ---

tests_text = '''
1. to_12("1124") should return "11:24 AM".
2. to_12("0900") should return "9:00 AM".
3. to_12("1455") should return "2:55 PM".
4. to_12("2346") should return "11:46 PM".
5. to_12("0030") should return "12:30 AM".
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