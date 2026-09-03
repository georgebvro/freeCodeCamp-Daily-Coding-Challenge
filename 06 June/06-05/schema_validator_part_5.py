def is_valid_schema(obj):
    ROLES = ["user", "creator", "moderator", "staff", "admin"]

    return 'username' in obj and type(obj['username']) == str \
        and 'posts' in obj and type(obj['posts']) == int \
        and 'verified' in obj and type(obj['verified']) == bool \
        and 'role' in obj and obj['role'] in ROLES \
        and ('supporter' not in obj or 'supporter' in obj and type(obj['supporter']) == bool) \
        and 'badges' in obj and type(obj['badges']) == list and all(type(badge) == str for badge in obj['badges'])

# --- TEST SUITE ---

tests_text = r'''
1. is_valid_schema({"username": "gill", "posts": 12, "verified": False, "role": "creator", "supporter": False, "badges": ["early-adopter", "popular"]}) should return True.
2. is_valid_schema({"username": "tonya", "posts": 299, "verified": True, "role": "moderator", "supporter": True, "badges": ["streak-master", "veteran"], "followers": 1233}) should return True.
3. is_valid_schema({"username": "zara", "posts": 0, "verified": False, "role": "user", "supporter": False, "badges": []}) should return True.
4. is_valid_schema({"username": "nicole", "posts": 65, "verified": True, "role": "admin", "supporter": False, "badges": ["first-post", 18]}) should return False.
5. is_valid_schema({"username": "tim", "posts": 25, "verified": True, "role": "staff", "supporter": False}) should return False.
6. is_valid_schema({"username": "charlie", "posts": 0, "verified": False, "role": "user", "supporter": "no", "badges": ["first-post", "anniversary"]}) should return False.
7. is_valid_schema({"username": "wanda", "posts": 15, "verified": True, "role": "friend", "supporter": True, "badges": ["popular"]}) should return False.
8. is_valid_schema({"username": "guy", "posts": 5, "verified": "false", "role": "staff", "supporter": True, "badges": ["helper"]}) should return False.
9. is_valid_schema({"username": "carrie", "verified": True, "role": "moderator", "supporter": True, "badges": ["helper", "sharer"]}) should return False.
10. is_valid_schema({"username": True, "posts": 75, "verified": True, "role": "creator", "supporter": True, "badges": ["veteran"]}) should return False.
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