import re

def rgb_to_hex(rgb):
    regex = re.compile(r"rgb\( *(?P<red>\d{1,3}) *, *(?P<green>\d{1,3}) *, *(?P<blue>\d{1,3}) *\)")

    regex_result = re.match(regex, rgb)

    return f"#{int(regex_result.group('red')):02x}{int(regex_result.group('green')):02x}{int(regex_result.group('blue')):02x}"

print(rgb_to_hex("rgb(255, 255, 255)"))
print(rgb_to_hex("rgb(1, 11, 111)"))
print(rgb_to_hex("rgb(173, 216, 230)"))
print(rgb_to_hex("rgb(79, 123, 201)"))
print(rgb_to_hex("rgb(1,1,1)"))
print(rgb_to_hex("rgb(22 ,2 ,222)"))
print(rgb_to_hex("rgb( 123 , 234 , 013 )"))

# --- TEST SUITE ---

tests_text = '''
1. rgb_to_hex("rgb(255, 255, 255)") should return "#ffffff".
2. rgb_to_hex("rgb(1, 11, 111)") should return "#010b6f".
3. rgb_to_hex("rgb(173, 216, 230)") should return "#add8e6".
4. rgb_to_hex("rgb(79, 123, 201)") should return "#4f7bc9".
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