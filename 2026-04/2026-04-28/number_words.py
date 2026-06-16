def get_number_words(n):
    NUMBER_WORDS = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety"
    }

    try:
        return NUMBER_WORDS[n]
    except KeyError:
        tens = n // 10 * 10
        units = n - tens
        return f"{NUMBER_WORDS[tens]}-{NUMBER_WORDS[units]}"

# --- TEST SUITE ---

tests_text = r'''
1. get_number_words(0) should return "zero".
2. get_number_words(10) should return "ten".
3. get_number_words(19) should return "nineteen".
4. get_number_words(30) should return "thirty".
5. get_number_words(53) should return "fifty-three".
6. get_number_words(7) should return "seven".
7. get_number_words(12) should return "twelve".
8. get_number_words(60) should return "sixty".
9. get_number_words(67) should return "sixty-seven".
10. get_number_words(98) should return "ninety-eight".
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