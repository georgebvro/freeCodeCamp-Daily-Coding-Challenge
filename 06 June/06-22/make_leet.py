def make_leet(s):
    LEET_SUBSTITUTIONS = {
        'a': "4",
        'e': "3",
        'g': "9",
        'i': "1",
        'l': "1",
        'o': "0",
        's': "5",
        't': "7"
    }
    leet_str = s

    for letter in LEET_SUBSTITUTIONS:
        leet_str = re.sub(letter, LEET_SUBSTITUTIONS[letter], leet_str)

    return leet_str

# --- TEST SUITE ---

tests_text = r'''
1. make_leet("cool") should return "c001".
2. make_leet("leet") should return "1337".
3. make_leet("hacker") should return "h4ck3r".
4. make_leet("satellite") should return "547311173".
5. make_leet("abcdefghijklmnopqrstuvwxyz") should return "4bcd3f9h1jk1mn0pqr57uvwxyz".
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