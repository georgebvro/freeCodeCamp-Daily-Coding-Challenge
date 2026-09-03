def is_valid_isbn10(s):
    hyphens_removed = s.replace("-", "")

    if not re.match(r"^\d{9}(\d|X)$", hyphens_removed):
        return False

    total = 0

    for index, digit in enumerate(hyphens_removed):
        total += (10 if digit == "X" else int(digit)) * (index + 1)

    return not total % 11

# --- TEST SUITE ---

tests_text = r'''
1. is_valid_isbn10("0-306-40615-2") should return True.
2. is_valid_isbn10("0-306-40615-1") should return False.
3. is_valid_isbn10("0-8044-2957-X") should return True.
4. is_valid_isbn10("X-306-40615-2") should return False.
5. is_valid_isbn10("0-6822-2589-4") should return True.
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