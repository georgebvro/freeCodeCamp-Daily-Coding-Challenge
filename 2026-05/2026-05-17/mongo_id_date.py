import datetime as dt

def mongo_id_to_date(s):

    return dt.datetime.utcfromtimestamp((int(s[:8], 16))).isoformat(timespec = 'milliseconds') + "Z"

# --- TEST SUITE ---

tests_text = r'''
1. mongo_id_to_date("6a094b50bcf86cd799439011") should return "2026-05-17T05:00:00.000Z".
2. mongo_id_to_date("695344eb1f4a4c1123042128") should return "2025-12-30T03:20:11.000Z".
3. mongo_id_to_date("386da62df34123ac54617e56") should return "2000-01-01T07:01:01.000Z".
4. mongo_id_to_date("69f571c3d7711807afd3dd55") should return "2026-05-02T03:38:43.000Z".
5. mongo_id_to_date("68adce01c0e1144d0a90295a") should return "2025-08-26T15:08:49.000Z".
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