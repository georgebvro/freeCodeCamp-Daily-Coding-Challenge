def zip_strings(a, b):
    smallest_length = min(len(a), len(b))

    return "".join([tuple[0] + tuple[1] for tuple in zip(a, b)]) + a[smallest_length:] + b[smallest_length:]

# --- TEST SUITE ---

tests_text = r'''
1. zip_strings("abc", "123") should return "a1b2c3".
2. zip_strings("acegikmoqsuwy", "bdfhjlnprtvxz") should return "abcdefghijklmnopqrstuvwxyz".
3. zip_strings("day", "night") should return "dnaiyght".
4. zip_strings("python", "javascript") should return "pjyatvhaosncript".
5. zip_strings("feCdCm", "reoeap") should return "freeCodeCamp".
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