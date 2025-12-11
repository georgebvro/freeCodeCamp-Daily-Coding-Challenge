def get_headings(csv):

    return list(map(lambda heading: heading.strip(), csv.split(",")))

print(get_headings("name,age,city"))
print(get_headings("first name,last name,phone"))
print(get_headings("username , email , signup date "))

# --- TEST SUITE ---

tests_text = '''
1. get_headings("name,age,city") should return ["name", "age", "city"].
2. get_headings("first name,last name,phone") should return ["first name", "last name", "phone"].
3. get_headings("username , email , signup date ") should return ["username", "email", "signup date"].
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