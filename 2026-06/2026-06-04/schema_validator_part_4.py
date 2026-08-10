def is_valid_schema(obj):
    ROLES = ["user", "creator", "moderator", "staff", "admin"]

    return 'username' in obj and type(obj['username']) == str \
        and 'posts' in obj and type(obj['posts']) == int \
        and 'verified' in obj and type(obj['verified']) == bool \
        and 'role' in obj and obj['role'] in ROLES \
        and ('supporter' not in obj or 'supporter' in obj and type(obj['supporter']) == bool)

# --- TEST SUITE ---

tests_text = r'''
1. is_valid_schema({"username": "vivian", "posts": 1, "verified": False, "role": "user", "supporter": True}) should return True.
2. is_valid_schema({"username": "rudolph", "posts": 15, "verified": True, "role": "creator"}) should return True.
3. is_valid_schema({"username": "hernandez", "posts": 35, "verified": True, "role": "moderator", "supporter": False, "followers": 55}) should return True.
4. is_valid_schema({"username": "julia", "posts": 50, "verified": True, "role": "admin", "supporter": "true"}) should return False.
5. is_valid_schema({"username": "bernard", "posts": 0, "verified": True, "role": "friend", "supporter": True}) should return False.
6. is_valid_schema({"username": "felix", "posts": 40, "verified": "yes", "role": "staff", "supporter": False}) should return False.
7. is_valid_schema({"username": "jimmy", "posts": True, "verified": False, "role": "creator", "supporter": True}) should return False.
8. is_valid_schema({"username": True, "posts": 30, "verified": True, "role": "moderator", "supporter": False}) should return False.
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