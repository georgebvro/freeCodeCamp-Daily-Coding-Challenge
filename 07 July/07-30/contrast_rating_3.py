def get_contrast_rating(rgb1, rgb2, is_large_text):
    WCAG_RATINGS = [
        { 'rating': "AAA", 'normalTextThreshold': 7.0, 'largeTextThreshold': 4.5 },
        { 'rating': "AA", 'normalTextThreshold': 4.5, 'largeTextThreshold': 3.0 }
    ]

    def calculate_luminance_from_rgb(rgb):
        def gamma_correct(channel):
            channel_value = channel / 255
            return channel_value / 12.92 if channel_value <= 0.04045 else ((channel_value + 0.055) / 1.055) ** 2.4

        gamma_corrected = [gamma_correct(channel) for channel in rgb]

        return 0.2126 * gamma_corrected[0] + 0.7152 * gamma_corrected[1] + 0.0722 * gamma_corrected[2]

    contrast_ratio = (calculate_luminance_from_rgb(rgb1) + 0.05) / (calculate_luminance_from_rgb(rgb2) + 0.05)

    for rule in WCAG_RATINGS:
        if contrast_ratio >= rule['largeTextThreshold' if is_large_text else 'normalTextThreshold']:
            return rule['rating']

    return "Fail"

# --- TEST SUITE ---

tests_text = r'''
1. get_contrast_rating([255, 255, 255], [0, 0, 0], False) should return "AAA".
2. get_contrast_rating([215, 188, 188], [55, 55, 55], False) should return "AA".
3. get_contrast_rating([143, 144, 210], [46, 47, 61], False) should return "Fail".
4. get_contrast_rating([167, 167, 210], [53, 10, 53], True) should return "AAA".
5. get_contrast_rating([135, 147, 155], [60, 70, 90], True) should return "AA".
6. get_contrast_rating([125, 210, 195], [105, 130, 90], True) should return "Fail".
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