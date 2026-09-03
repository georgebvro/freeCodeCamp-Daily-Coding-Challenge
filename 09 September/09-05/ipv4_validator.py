import re

def is_valid_ipv4(ipv4):
    regex = re.compile(r"\D|^$|0\d")
    is_valid = True
    octets = ipv4.split(".")

    if len(octets) != 4:
        is_valid = False

    else:
        for octet in octets:
            if re.match(regex, octet) or int(octet) < 0 or int(octet) > 255:
                is_valid = False

    return is_valid

print(is_valid_ipv4("192.168.1.1"))
print(is_valid_ipv4("0.0.0.0"))
print(is_valid_ipv4("255.01.50.111"))
print(is_valid_ipv4("255.00.50.111"))
print(is_valid_ipv4("256.101.50.115"))
print(is_valid_ipv4("192.168.101."))
print(is_valid_ipv4("192168145213"))

print(is_valid_ipv4("192.168.a.1"))
print(is_valid_ipv4("192.b50.0.1"))

# --- TEST SUITE ---

tests_text = '''
1. is_valid_ipv4("192.168.1.1") should return True.
2. is_valid_ipv4("0.0.0.0") should return True.
3. is_valid_ipv4("255.01.50.111") should return False.
4. is_valid_ipv4("255.00.50.111") should return False.
5. is_valid_ipv4("256.101.50.115") should return False.
6. is_valid_ipv4("192.168.101.") should return False.
7. is_valid_ipv4("192168145213") should return False.
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