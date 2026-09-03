def count_letters_and_numbers(s):
    letters = len(re.findall("[a-z]", s, re.IGNORECASE))
    numbers = len(re.findall("\d", s))

    return f"The string has {letters} letter{'' if letters == 1 else 's'} and {numbers} number{'' if numbers == 1 else 's'}."

# --- TEST SUITE ---

tests_text = r'''
1. count_letters_and_numbers("helloworld123") should return "The string has 10 letters and 3 numbers.".
2. count_letters_and_numbers("Catch 22") should return "The string has 5 letters and 2 numbers.".
3. count_letters_and_numbers("A1!") should return "The string has 1 letter and 1 number.".
4. count_letters_and_numbers("12345") should return "The string has 0 letters and 5 numbers.".
5. count_letters_and_numbers("password") should return "The string has 8 letters and 0 numbers.".
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