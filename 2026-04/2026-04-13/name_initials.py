def get_initials(name):

    return "".join([f"{word[0].upper()}." for word in name.split()])

# --- TEST SUITE ---

tests_text = r'''
1. get_initials("Tommy Millwood") should return "T.M.".
2. get_initials("Savanna Puddlesplash") should return "S.P.".
3. get_initials("Frances Cowell Conrad") should return "F.C.C.".
4. get_initials("Dragon") should return "D.".
5. get_initials("Dorothy Vera Clump Haverstock Norris") should return "D.V.C.H.N.".
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