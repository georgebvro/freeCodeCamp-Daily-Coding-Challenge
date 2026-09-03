import copy

def migrate_record(schema, record):
    fixed_object = copy.copy(record)

    for prop in schema:
        if prop not in record:
            fixed_object[prop] = schema[prop]

    return fixed_object

# --- TEST SUITE ---

tests_text = r'''
1. migrate_record({ "username": "", "posts": 0 }, { "verified": True }) should return { "username": "", "posts": 0, "verified": True }.
2. migrate_record({ "username": "", "posts": 0 }, { "username": "camper", "posts": 5 }) should return { "username": "camper", "posts": 5 }.
3. migrate_record({ "username": "", "posts": 0, "verified": False }, { "username": "camper" }) should return { "username": "camper", "posts": 0, "verified": False }.
4. migrate_record({ "username": "", "posts": 0 }, { "username": "camper", "role": "admin" }) should return { "username": "camper", "role": "admin", "posts": 0 }.
5. migrate_record({ "username": "", "email": "", "posts": 0, "verified": False, "role": "user", "banned": False }, { "username": "camper", "email": "camper@freecodecamp.org", "role": "admin" }) should return { "username": "camper", "email": "camper@freecodecamp.org", "role": "admin", "posts": 0, "verified": False, "banned": False }.
'''

import re

tests_regex = re.compile(r"(?P<number>\d+)\.\s(?P<function_call>.+) should return (?P<output>.+?)\.?$", re.MULTILINE)
test_data = [item.groupdict() for item in re.finditer(tests_regex, tests_text)]

def run_tests(test_data):
    print("——————————————————————————",
        "\n🧪 Starting Verification...",
        "\n——————————————————————————")

    fail_count = 0

    for test in test_data:
        function_call_output = eval(test['function_call'])
        test_output = eval(test['output'])
        
        if function_call_output == test_output:
            print(f"{test['number']}.✅ PASS - Function Call:\n{test['function_call']}")
        else:
            print(f"{test['number']}.❌ FAIL - Function Call:\n{test['function_call']}\nExpected:\n{test_output}\nGot:\n{function_call_output}")
            fail_count += 1

        print("————————————————————————————")

    print(
        f"⚠️ WARNING: {fail_count}/{len(test_data)} tests FAILED." if fail_count
        else "🎉 SUCCESS: All tests PASSED."
    )

run_tests(test_data)