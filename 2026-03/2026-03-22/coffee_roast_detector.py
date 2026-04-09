def detect_roast(beans):
    BEAN_VALUES = {
        '\'': 1,
        '-': 2,
        '.': 3
    }
    LIGHT_TO_MEDIUM_THRESHOLD = 1.75
    MEDIUM_TO_DARK_THRESHOLD = 2.5

    roast_level = sum([BEAN_VALUES[bean] for bean in list(beans)]) / len(beans)

    return "Light" if roast_level < LIGHT_TO_MEDIUM_THRESHOLD \
        else "Medium" if roast_level <= MEDIUM_TO_DARK_THRESHOLD \
        else "Dark"

# --- TEST SUITE ---

tests_text = r"""
1. detect_roast("''-''''''-'-''--''''") should return "Light".
2. detect_roast(".'-''-''..'''.-.-''-") should return "Medium".
3. detect_roast("--.''--'-''.--..-.--") should return "Medium".
4. detect_roast("-...'-......-..-...-") should return "Dark".
5. detect_roast(".--.-..-......----.'") should return "Medium".
6. detect_roast("..-..-..-..-....-.-.") should return "Dark".
7. detect_roast("-'-''''''..-'.''-'.'") should return "Light".
"""

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