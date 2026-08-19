def is_valid_card(number):
    double_it = True
    sum = 0

    for i in range(len(number) - 1, -1, -1):
        double_it = not double_it
        computed_digit = int(number[i])

        if double_it:
            computed_digit *= 2
            computed_digit = computed_digit - 9 if computed_digit > 9 else computed_digit

        sum += computed_digit

    return not sum % 10

# --- TEST SUITE ---

tests_text = r'''
1. is_valid_card("4532015112830366") should return True.
2. is_valid_card("5425233430109903") should return True.
3. is_valid_card("371449635398431") should return True.
4. is_valid_card("6011111111111117") should return True.
5. is_valid_card("4532015112830367") should return False.
6. is_valid_card("1234567890123456") should return False.
7. is_valid_card("4532015112830368") should return False.
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