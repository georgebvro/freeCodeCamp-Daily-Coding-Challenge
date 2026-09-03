def send_message(route):
    message_speed = 300000
    satellite_transmission_delay = 0.5
    
    return round(
        sum(distance / message_speed for distance in route) 
        + (len(route) - 1) * satellite_transmission_delay
        , 4)

print(send_message([300000, 300000]))
print(send_message([384400, 384400]))
print(send_message([54600000, 54600000]))
print(send_message([1000000, 500000000, 1000000]))
print(send_message([10000, 21339, 50000, 31243, 10000]))
print(send_message([802101, 725994, 112808, 3625770, 481239]))

# --- TEST SUITE ---

tests_text = '''
1. send_message([300000, 300000]) should return 2.5.
2. send_message([384400, 384400]) should return 3.0627.
3. send_message([54600000, 54600000]) should return 364.5.
4. send_message([1000000, 500000000, 1000000]) should return 1674.3333.
5. send_message([10000, 21339, 50000, 31243, 10000]) should return 2.4086.
6. send_message([802101, 725994, 112808, 3625770, 481239]) should return 21.1597.
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