def get_next_bingo_number(n):
    BINGO_NUMBERS = [
        { 'letter': "B", 'min': 1, 'max': 15 },
        { 'letter': "I", 'min': 16, 'max': 30 },
        { 'letter': "N", 'min': 31, 'max': 45 },
        { 'letter': "G", 'min': 46, 'max': 60 },
        { 'letter': "O", 'min': 61, 'max': 75 },
    ]

    groups_dict = re.match(r"^(?P<letter>[A-Z])(?P<digits>\d{1,2})$", n).groupdict()
    digits = int(groups_dict['digits'])

    index_of_next_bingo_number = [
        index for index, bingo_number in enumerate(BINGO_NUMBERS) 
        if bingo_number['letter'] == groups_dict['letter'] 
        and bingo_number['min'] <= digits <= bingo_number['max']
        ][0]

    if digits + 1 > BINGO_NUMBERS[index_of_next_bingo_number]['max']:
        index_of_next_bingo_number = index_of_next_bingo_number + 1 \
            if index_of_next_bingo_number < len(BINGO_NUMBERS) - 1 \
            else 0
        next_bingo_digits = BINGO_NUMBERS[index_of_next_bingo_number]['min']
    else:
        next_bingo_digits = digits + 1

    next_bingo_letter = BINGO_NUMBERS[index_of_next_bingo_number]['letter']

    return next_bingo_letter + str(next_bingo_digits)

# --- TEST SUITE ---

tests_text = r'''
1. get_next_bingo_number("B10") should return "B11".
2. get_next_bingo_number("N33") should return "N34".
3. get_next_bingo_number("I30") should return "N31".
4. get_next_bingo_number("G60") should return "O61".
5. get_next_bingo_number("O75") should return "B1".
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