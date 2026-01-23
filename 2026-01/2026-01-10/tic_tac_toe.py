def tic_tac_toe(board):

    return "O wins" if check_win_conditions(board, "O") else "X wins" if check_win_conditions(board, "X") else "Draw"

def check_win_conditions(board, player):
    return horizontal_line_win_condition(board, player) \
        or vertical_line_win_condition(board, player) \
        or main_diagonal_win_condition(board, player) \
        or antidiagonal_win_condition(board, player)

def horizontal_line_win_condition(board, player):
    for row in board:
        if all(mark == player for mark in row):
            return True

    return False

def vertical_line_win_condition(board, player):
    for j in range(len(board[0])):
        vertical_line_completed = True

        for i in range(len(board)):
            if board[i][j] != player:
                vertical_line_completed = False
                break

        if vertical_line_completed:
            return True

def main_diagonal_win_condition(board, player):
    for k in range(len(board)):
        if board[k][k] != player:
            return False

    return True

def antidiagonal_win_condition(board, player):
    for i in range(len(board)):
        for j in range(len(board[0])):
            if i + j == len(board) - 1 and board[i][j] != player:
                return False

    return True

# --- TEST SUITE ---

tests_text = r'''
1. tic_tac_toe([["X", "X", "X"], ["O", "O", "X"], ["O", "X", "O"]]) should return "X wins".
2. tic_tac_toe([["X", "O", "X"], ["X", "O", "X"], ["O", "O", "X"]]) should return "O wins".
3. tic_tac_toe([["X", "O", "X"], ["O", "X", "O"], ["O", "X", "O"]]) should return "Draw".
4. tic_tac_toe([["X", "X", "O"], ["X", "O", "X"], ["O", "X", "X"]]) should return "O wins".
5. tic_tac_toe([["X", "O", "O"], ["O", "X", "O"], ["O", "X", "X"]]) should return "X wins".
6. tic_tac_toe([["O", "X", "X"], ["X", "O", "O"], ["X", "O", "X"]]) should return "Draw".
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