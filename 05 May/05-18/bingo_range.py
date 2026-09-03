def get_bingo_range(letter):
    BINGO_RANGES = {
        "B": "1-15",
        "I": "16-30",
        "N": "31-45",
        "G": "46-60",
        "O": "61-75",
    }
    groups_dict = re.match(r"^(?P<min>\d{1,2})-(?P<max>\d{2})$", BINGO_RANGES[letter]).groupdict()

    return list(range(int(groups_dict['min']), int(groups_dict['max']) + 1))

# --- TEST SUITE ---

tests_text = r'''
1. get_bingo_range("B") should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].
2. get_bingo_range("I") should return [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].
3. get_bingo_range("N") should return [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45].
4. get_bingo_range("G") should return [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60].
5. get_bingo_range("O") should return [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75].
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