def scale_image(size, scale):
    groups_dict = re.match(r"^(?P<width>\d+)x(?P<height>\d+)$", size).groupdict()

    return f"{int(int(groups_dict['width']) * scale)}x{int(int(groups_dict['height']) * scale)}"

# --- TEST SUITE ---

tests_text = r'''
1. scale_image("800x600", 2) should return "1600x1200".
2. scale_image("100x100", 10) should return "1000x1000".
3. scale_image("1024x768", 0.5) should return "512x384".
4. scale_image("300x200", 1.5) should return "450x300".
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