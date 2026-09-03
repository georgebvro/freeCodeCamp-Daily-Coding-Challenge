def is_valid_schema(obj):
    ROLES = ["user", "creator", "moderator", "staff", "admin"]

    return 'username' in obj and isinstance(obj['username'], str) \
        and 'posts' in obj and isinstance(obj['posts'], (int, float, complex)) \
        and 'verified' in obj and isinstance(obj['verified'], bool) \
        and 'role' in obj and obj['role'] in ROLES

# --- TEST SUITE ---

tests_text = r'''
1. is_valid_schema({"username": "henry", "posts": 0, "verified": True, "role": "staff"}) should return True.
2. is_valid_schema({"username": "sara", "posts": 45, "verified": False, "role": "creator", "followers": 70}) should return True.
3. is_valid_schema({"username": "penelope", "posts": 20, "verified": True, "role": "admin"}) should return True.
4. is_valid_schema({"username": "kevin", "posts": 0, "verified": False, "role": "user"}) should return True.
5. is_valid_schema({"username": "george", "posts": 15, "verified": True, "role": "moderator"}) should return True.
6. is_valid_schema({"username": "david", "posts": 0, "verified": False, "role": "guest"}) should return False.
7. is_valid_schema({"username": "wendy", "posts": 10, "verified": True}) should return False.
8. is_valid_schema({"username": "fabian", "posts": 1, "verified": True, "role": True}) should return False.
9. is_valid_schema({"username": 8, "posts": 1, "verified": True, "role": "user"}) should return False.
10. is_valid_schema({"username": "penny", "posts": "10", "verified": True, "role": "staff"}) should return False.
11. is_valid_schema({"username": "john", "posts": "1", "verified": "true", "role": "admin"}) should return False.
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