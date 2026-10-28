def get_contrast_rating(l1, l2, is_large_text):
    WCAG_RATINGS = [
        { 'rating': "AAA", 'normalTextThreshold': 7.0, 'largeTextThreshold': 4.5 },
        { 'rating': "AA", 'normalTextThreshold': 4.5, 'largeTextThreshold': 3.0 }
    ]

    contrast_ratio = (l1 + 0.05) / (l2 + 0.05)

    for rule in WCAG_RATINGS:
        if contrast_ratio >= rule['largeTextThreshold' if is_large_text else 'normalTextThreshold']:
            return rule['rating']

    return "Fail"

# --- TEST SUITE ---

tests_text = r'''
1. get_contrast_rating(1.0, 0.0, False) should return "AAA".
2. get_contrast_rating(0.9015, 0.1364, False) should return "AA".
3. get_contrast_rating(0.8965, 0.1628, False) should return "Fail".
4. get_contrast_rating(0.7469, 0.0957, True) should return "AAA".
5. get_contrast_rating(0.7489, 0.2018, True) should return "AA".
6. get_contrast_rating(0.6571, 0.1974, True) should return "Fail".
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