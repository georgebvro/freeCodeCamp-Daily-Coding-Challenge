def get_milestone(years):
    anniversary_milestones = dict(reversed([
        [1, "Paper"],
        [5, "Wood"],
        [10, "Tin"],
        [25, "Silver"],
        [40, "Ruby"],
        [50, "Gold"],
        [60, "Diamond"],
        [70, "Platinum"]
    ]))

    for years_married, milestone in anniversary_milestones.items():
        if years >= years_married:
            return milestone

    return "Newlyweds"

# --- TEST SUITE ---

tests_text = r'''
1. get_milestone(0) should return "Newlyweds".
2. get_milestone(1) should return "Paper".
3. get_milestone(8) should return "Wood".
4. get_milestone(10) should return "Tin".
5. get_milestone(26) should return "Silver".
6. get_milestone(45) should return "Ruby".
7. get_milestone(50) should return "Gold".
8. get_milestone(64) should return "Diamond".
9. get_milestone(71) should return "Platinum".
'''

import re

tests_regex = re.compile(r"(?P<number>\d+)\.\s(?P<function_call>.+) should return (?P<output>.+?)\.?$", re.MULTILINE)
test_data = [item.groupdict() for item in re.finditer(tests_regex, tests_text)]

def run_tests(test_data):
    print("--------------------------")
    print("🧪 Starting Verification...")
    print("--------------------------")

    fail_count = 0

    for test in test_data:
        function_call_output = eval(test['function_call'])
        test_output = eval(test['output'])
        
        if function_call_output == test_output:
            print(f"{test['number']}.✅ PASS - Function Call:\n{test['function_call']}")
        else:
            print(f"{test['number']}.❌ FAIL - Function Call:\n{test['function_call']}\nExpected:\n{test_output}\nGot:\n{function_call_output}")
            fail_count += 1

    print("----------------------------",
        f"\n⚠️ WARNING: {fail_count}/{len(test_data)} tests FAILED." if fail_count
        else "\n🎉 SUCCESS: All tests PASSED."
    )

run_tests(test_data)