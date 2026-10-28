def get_contrast_rating(ratio, is_large_text):
    WCAG_RATINGS = {
        "AAA": [ float(ratio) >= 7.0 and not is_large_text, float(ratio) >= 4.5 and is_large_text ],
        "AA": [ float(ratio) >= 4.5 and not is_large_text, float(ratio) >= 3.0 and is_large_text ],
        "Fail": [ float(ratio) < 4.5 and not is_large_text, float(ratio) < 3.0 and is_large_text ]
    }

    for rating, conditions in WCAG_RATINGS.items():
        if any(condition for condition in conditions):
            return rating

# --- TEST SUITE ---

tests_text = r'''
1. get_contrast_rating("7.5", False) should return "AAA".
2. get_contrast_rating("4.8", False) should return "AA".
3. get_contrast_rating("4.2", False) should return "Fail".
4. get_contrast_rating("4.5", True) should return "AAA".
5. get_contrast_rating("3.0", True) should return "AA".
6. get_contrast_rating("2.7", False) should return "Fail".
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