def is_valid_schema(obj):
    ROLES = ["user", "creator", "moderator", "staff", "admin"]

    def is_valid_schema_user(user_profile):
        return 'username' in user_profile and type(user_profile['username']) == str \
            and 'posts' in user_profile and type(user_profile['posts']) == int \
            and 'verified' in user_profile and type(user_profile['verified']) == bool \
            and 'role' in user_profile and user_profile['role'] in ROLES \
            and ('supporter' not in user_profile or 'supporter' in user_profile and type(user_profile['supporter']) == bool) \
            and 'badges' in user_profile and all(type(badge) == str for badge in user_profile['badges'])

    return 'users' in obj and type(obj['users']) == list and all(is_valid_schema_user(user_profile) for user_profile in obj['users'])

# --- TEST SUITE ---

tests_text = r'''
1. is_valid_schema({"users": [{"username": "ron", "posts": 14, "verified": True, "role": "creator", "badges": ["early-adopter"]}, {"username": "cher", "posts": 25, "verified": True, "role": "moderator", "supporter": True, "followers": 20, "badges": ["helper"]}]}) should return True.
2. is_valid_schema({"users": []}) should return True.
3. is_valid_schema({"users": {"username": "anne", "posts": 0, "verified": False, "role": "user", "supporter": False, "badges": []}}) should return False.
4. is_valid_schema({"users": [{"username": "tony", "posts": 10, "verified": True, "role": "creator", "supporter": True, "badges": ["liked", 6]}]}) should return False.
5. is_valid_schema({"users": [{"username": "ursula", "posts": 3, "verified": False, "role": "user", "supporter": "false", "badges": ["comeback"]}]}) should return False.
6. is_valid_schema({"users": [{"username": "benny", "posts": 55, "verified": True, "role": "superstar", "supporter": True, "badges": ["veteran"]}]}) should return False.
7. is_valid_schema({"users": [{"username": "chase", "posts": 1, "verified": "yes", "role": "staff", "supporter": False, "badges": ["superstar"]}]}) should return False.
8. is_valid_schema({"users": [{"username": "carla", "posts": "10", "verified": False, "role": "user", "supporter": False, "badges": ["newbie"]}]}) should return False.
9. is_valid_schema({"users": [{"posts": 4, "verified": False, "role": "admin", "supporter": False, "badges": ["superuser", "veteran"]}]}) should return False.
10. is_valid_schema({"users": [{"username": "harold", "posts": 80, "verified": True, "role": "creator", "supporter": True, "badges": ["liked", "hero"]}, {"username": "kim", "posts": 11, "verified": False, "role": "admin", "supporter": True, "badges": ["first"]}, {}]}) should return False.
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