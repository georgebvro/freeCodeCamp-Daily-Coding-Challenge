def get_bingo_letter(n):

    return [bingo_range for bingo_range in [
        BingoRange("B", 1, 15),
        BingoRange("I", 16, 30),
        BingoRange("N", 31, 45),
        BingoRange("G", 46, 60),
        BingoRange("O", 61, 75)
    ] if bingo_range.min <= n <= bingo_range.max][0].letter

class BingoRange:
    def __init__(self, letter, min, max):
        self.letter = letter
        self.min = min
        self.max = max

# --- TEST SUITE ---

tests_text = r'''
1. get_bingo_letter(75) should return "O".
2. get_bingo_letter(54) should return "G".
3. get_bingo_letter(25) should return "I".
4. get_bingo_letter(38) should return "N".
5. get_bingo_letter(11) should return "B".
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