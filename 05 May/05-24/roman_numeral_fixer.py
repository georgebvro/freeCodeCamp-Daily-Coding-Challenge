def fix_numerals(s):
    ROMAN_NUMERALS = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    arabic_number = sum([ROMAN_NUMERALS[letter] for letter in list(s)])

    thousands = arabic_number // 1000
    hundreds  = (arabic_number - thousands * 1000) // 100
    tens      = (arabic_number - thousands * 1000 - hundreds * 100) // 10
    units     = arabic_number - thousands * 1000 - hundreds * 100 - tens * 10

    def build_partial_roman_numeral (number):
        letters = ["I", "V", "X"] if number < 10 else ["X", "L", "C"] if number < 100 else ["C", "D", "M"]
        n = int(str(number)[0])
        partial_roman_numeral = ""

        if n <= 3:
            partial_roman_numeral += letters[0] * n
        elif n == 4:
            partial_roman_numeral += letters[0] + letters[1]
        elif n <= 8:
            partial_roman_numeral += letters[1] + letters[0] * (n - 5)
        else:
            partial_roman_numeral += letters[0] + letters[2]

        return partial_roman_numeral

    return "M" * thousands \
        + build_partial_roman_numeral(hundreds * 100) \
        + build_partial_roman_numeral(tens * 10) \
        + build_partial_roman_numeral(units)

# --- TEST SUITE ---

tests_text = r'''
1. fix_numerals("XIIIII") should return "XV".
2. fix_numerals("IIIILX") should return "LXIV".
3. fix_numerals("XXVVVIIIII") should return "XL".
4. fix_numerals("MDCCLXXXXVIIII") should return "MDCCXCIX".
5. fix_numerals("IIIIVVVVXXXXLLLLCCDD") should return "MCDLXIV".
6. fix_numerals("ILCDMIVDIIXLCVCXDL") should return "MMCMLXXXIV".
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