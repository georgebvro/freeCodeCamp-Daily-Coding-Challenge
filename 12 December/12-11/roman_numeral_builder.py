import math

def to_roman(num):
    roman_numeral = ""

    thousands = math.floor(num / 1000)
    roman_numeral += "M" * thousands

    hundreds = math.floor((num - thousands * 1000) / 100)
    match hundreds:
        case 0 | 1 | 2 | 3:
            roman_numeral += "C" * hundreds
        case 4:
            roman_numeral += "CD"
        case 5 | 6 | 7 | 8:
            roman_numeral += "D" + "C" * (hundreds - 5)
        case 9:
            roman_numeral += "CM"

    tens = math.floor((num - thousands * 1000 - hundreds * 100) / 10)
    match tens:
        case 0 | 1 | 2 | 3:
            roman_numeral += "X" * tens
        case 4:
            roman_numeral += "XL"
        case 5 | 6 | 7 | 8:
            roman_numeral += "L" + "X" * (tens - 5)
        case 9:
            roman_numeral += "XC"

    units = num - thousands * 1000 - hundreds * 100 - tens * 10
    match units:
        case 0 | 1 | 2 | 3:
            roman_numeral += "I" * units
        case 4:
            roman_numeral += "IV"
        case 5 | 6 | 7 | 8:
            roman_numeral += "V" + "I" * (units - 5)
        case 9:
            roman_numeral += "IX"

    return roman_numeral

print(to_roman(18))
print(to_roman(19))
print(to_roman(1464))
print(to_roman(2025))
print(to_roman(3999))

# --- TEST SUITE ---

tests_text = '''
1. to_roman(18) should return "XVIII".
2. to_roman(19) should return "XIX".
3. to_roman(1464) should return "MCDLXIV".
4. to_roman(2025) should return "MMXXV".
5. to_roman(3999) should return "MMMCMXCIX".
'''

import re

tests_regex = re.compile(r"(?P<number>\d+)\.\s(?P<function_call>.+) should return (?P<output>.+?)\.?$", re.MULTILINE)
test_data = [item.groupdict() for item in re.finditer(tests_regex, tests_text)]

def run_tests(test_data):
    print("--------------------------")
    print("🧪 Starting Verification...")
    print("--------------------------")

    all_passed = True
    fail_count = 0

    for test in test_data:
        function_call_output = eval(test['function_call'])
        test_output = eval(test['output'])
        
        if function_call_output == test_output:
            print(f"{test['number']}.✅ PASS - Function Call:\n{test['function_call']}")
        else:
            print(f"{test['number']}.❌ FAIL - Function Call:\n{test['function_call']}\nExpected:\n{test_output}\nGot:\n{function_call_output}")
            all_passed = False
            fail_count += 1

    print("----------------------------");

    if (all_passed):
        print("🎉 SUCCESS: All tests PASSED.");
    else:
        print(f"⚠️ WARNING: {fail_count}/{len(test_data)} tests FAILED.");

run_tests(test_data)