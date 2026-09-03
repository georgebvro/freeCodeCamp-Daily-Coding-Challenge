def get_deepest_brackets(s):
    level = 0
    nested_text = ""
    deepest_nest = { 'level': 0, 'text': None }

    for letter in s:
        if re.match("[([{]", letter):
            level += 1
            nested_text = ""
            continue

        if re.match("[)\]}]", letter):
            if level > deepest_nest['level']:
                deepest_nest = { 'level': level, 'text': nested_text }

            level -= 1
            continue

        nested_text += letter

    return deepest_nest['text']

# --- TEST SUITE ---

tests_text = r'''
1. get_deepest_brackets("(hello (world))") should return "world".
2. get_deepest_brackets("[outer [inner] outer]") should return "inner".
3. get_deepest_brackets("{a{b}c{d{e}f}g}") should return "e".
4. get_deepest_brackets("[the {quick (brown [fox] jumped) over (the) lazy} dog]") should return "fox".
5. get_deepest_brackets("f[(r)e{e}C{o[(d){e(C)}a]m}]p") should return "C".
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