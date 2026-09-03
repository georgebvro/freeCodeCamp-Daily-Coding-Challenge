# Solution using tuples to store knight positions on the board

def knight_moves(position):
    board_size = 8

    start_position_indeces = (board_size - int(position[1]), ord(position[0]) - ord('A'))

    potential_move_positions = [
        (start_position_indeces[0] + 1, start_position_indeces[1] - 2),
        (start_position_indeces[0] - 1, start_position_indeces[1] - 2),
        (start_position_indeces[0] - 2, start_position_indeces[1] - 1),
        (start_position_indeces[0] - 2, start_position_indeces[1] + 1),
        (start_position_indeces[0] - 1, start_position_indeces[1] + 2),
        (start_position_indeces[0] + 1, start_position_indeces[1] + 2),
        (start_position_indeces[0] + 2, start_position_indeces[1] - 1),
        (start_position_indeces[0] + 2, start_position_indeces[1] + 1),
    ]

    return len([potential_move_position for potential_move_position in potential_move_positions 
        if 0 <= potential_move_position[0] < board_size 
        and 0 <= potential_move_position[1] < board_size
    ])

# --- TEST SUITE ---

tests_text = r'''
1. knight_moves("A1") should return 2.
2. knight_moves("D4") should return 8.
3. knight_moves("G6") should return 6.
4. knight_moves("B8") should return 3.
5. knight_moves("H3") should return 4.
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