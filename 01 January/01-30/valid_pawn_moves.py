def find_pawn_moves(position):
    move_positions = [position[0] + str(int(position[1]) + 1)]

    if position[1] == "2":
        move_positions.append(position[0] + str(int(position[1]) + 2))

    return move_positions

# --- TEST SUITE ---

tests_text = r'''
1. find_pawn_moves("D4") should return ["D5"].
2. find_pawn_moves("B2") should return ["B3", "B4"].
3. find_pawn_moves("A7") should return ["A8"].
4. find_pawn_moves("G2") should return ["G3", "G4"].
5. find_pawn_moves("E3") should return ["E4"].
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