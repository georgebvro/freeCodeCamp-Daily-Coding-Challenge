def is_valid_isbn_13(s):
    if re.search("[^\d-]", s):
        return False

    stripped_of_dashes = s.replace("-", "")

    if len(stripped_of_dashes) != 13:
        return False

    return not sum([int(digit) * (3 if index % 2 else 1) for index, digit in enumerate(list(stripped_of_dashes))]) % 10

# --- TEST SUITE ---

tests_text = r'''
1. is_valid_isbn_13("9780306406157") should return True.
2. is_valid_isbn_13("97803064061570") should return False.
3. is_valid_isbn_13("978-0-13-595705-9") should return True.
4. is_valid_isbn_13("978-030-64061A-4") should return False.
5. is_valid_isbn_13("9-7-8-0-1-3-4-7-5-7-5-9-9") should return True.
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