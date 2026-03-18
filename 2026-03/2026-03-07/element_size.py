def get_element_size(window_size, element_vw, element_vh):
    window_dict = re.match(r"(?P<window_width>\d+) x (?P<window_height>\d+)", window_size).groupdict()
    viewport_width_dict = re.match(r"(?P<viewport_width_units>\d+)vw", element_vw).groupdict()
    viewport_height_dict = re.match(r"(?P<viewport_height_units>\d+)vh", element_vh).groupdict()

    return f"{int(window_dict['window_width']) * int(viewport_width_dict['viewport_width_units']) // 100} x {int(window_dict['window_height']) * int(viewport_height_dict['viewport_height_units']) // 100}"

# --- TEST SUITE ---

tests_text = r'''
1. get_element_size("1200 x 800", "50vw", "50vh") should return "600 x 400".
2. get_element_size("320 x 480", "25vw", "50vh") should return "80 x 240".
3. get_element_size("1000 x 500", "7vw", "3vh") should return "70 x 15".
4. get_element_size("1920 x 1080", "95vw", "100vh") should return "1824 x 1080".
5. get_element_size("1200 x 800", "0vw", "0vh") should return "0 x 0".
6. get_element_size("1440 x 900", "100vw", "114vh") should return "1440 x 1026".
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