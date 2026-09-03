def rook_bishop_attack(rook, bishop):
    if rook[0] == bishop[0] or rook[1] == bishop[1]:
        return "rook"

    if abs(ord(rook[0]) - ord(bishop[0])) == abs(int(rook[1]) - int(bishop[1])):
        return "bishop"

    return "neither"

# --- TEST SUITE ---

tests_text = r'''
1. rook_bishop_attack("A1", "A5") should return "rook".
2. rook_bishop_attack("C3", "F6") should return "bishop".
3. rook_bishop_attack("D4", "D7") should return "rook".
4. rook_bishop_attack("B7", "H1") should return "bishop".
5. rook_bishop_attack("B3", "C5") should return "neither".
6. rook_bishop_attack("G3", "E8") should return "neither".
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