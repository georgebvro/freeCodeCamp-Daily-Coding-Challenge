def get_wider_aspect_ratio(a, b):
    def get_aspect_ratio (dimensions):
        groups_dict = re.match(r"^(?P<width>\d+)x(?P<height>\d+)$", dimensions).groupdict()
        ratio = int(groups_dict['width']) / int(groups_dict['height'])
        h = 1

        while True:
            w = h * ratio
            if w.is_integer():
                break
            h += 1

        return {'w': int(w), 'h': h}

    a_aspect_ratio = get_aspect_ratio(a)
    b_aspect_ratio = get_aspect_ratio(b)

    return f"{a_aspect_ratio['w']}:{a_aspect_ratio['h']}" \
        if a_aspect_ratio['w'] / a_aspect_ratio['h'] > b_aspect_ratio['w'] / b_aspect_ratio['h'] \
        else f"{b_aspect_ratio['w']}:{b_aspect_ratio['h']}"

# --- TEST SUITE ---

tests_text = r'''
1. get_wider_aspect_ratio("1920x1080", "800x600") should return "16:9".
2. get_wider_aspect_ratio("1080x1350", "2048x1536") should return "4:3".
3. get_wider_aspect_ratio("640x480", "2440x1220") should return "2:1".
4. get_wider_aspect_ratio("360x640", "1080x1920") should return "9:16".
5. get_wider_aspect_ratio("3440x1440", "2048x858") should return "43:18".
6. get_wider_aspect_ratio("12345x61234", "12534x51234") should return "2089:8539".
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