def i_before_e(sentence):

    return re.sub("(?<=c)ie", "ei", re.sub("(?<!c)ei", "ie", sentence))

# --- TEST SUITE ---

tests_text = r'''
1. i_before_e("beleive") should return "believe".
2. i_before_e("recieve") should return "receive".
3. i_before_e("we recieved a breif") should return "we received a brief".
4. i_before_e("she beleived the friendly niece could percieve the greif") should return "she believed the friendly niece could perceive the grief".
5. i_before_e("we recieved relief after the theif gave us a breif piece of feirce deceit") should return "we received relief after the thief gave us a brief piece of fierce deceit".
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