def parse_roman_numeral(numeral):
    roman_numerals = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    }
    result = 0

    for i in range(len(numeral) - 1):
        if roman_numerals[numeral[i]] < roman_numerals[numeral[i + 1]]:
            result -= roman_numerals[numeral[i]]
        else:
            result += roman_numerals[numeral[i]]
    
    result += roman_numerals[numeral[-1]]

    return result

print(parse_roman_numeral("III"))
print(parse_roman_numeral("IV"))
print(parse_roman_numeral("XXVI"))
print(parse_roman_numeral("XCIX"))
print(parse_roman_numeral("CDLX"))
print(parse_roman_numeral("DIV"))
print(parse_roman_numeral("MMXXV"))

print(parse_roman_numeral("I"))

# --- TEST SUITE ---

tests_text = '''
1. parse_roman_numeral("III") should return 3.
2. parse_roman_numeral("IV") should return 4.
3. parse_roman_numeral("XXVI") should return 26.
4. parse_roman_numeral("XCIX") should return 99.
5. parse_roman_numeral("CDLX") should return 460.
6. parse_roman_numeral("DIV") should return 504.
7. parse_roman_numeral("MMXXV") should return 2025.
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