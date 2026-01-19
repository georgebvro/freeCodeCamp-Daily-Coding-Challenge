def rock_paper_scissors(player1, player2):
    choices = ["Rock", "Paper", "Scissors"]
    player1_choice = choices.index(player1)
    player2_choice = choices.index(player2)

    if player1 == player2:
        return "Tie"

    print(player1_choice, player2_choice)

    if abs(player1_choice - player2_choice) == 1:
        return "Player 1 wins" if player1_choice > player2_choice else "Player 2 wins"
    else:
        return "Player 2 wins" if player1_choice > player2_choice else "Player 1 wins"

# --- TEST SUITE ---

tests_text = r'''
1. rock_paper_scissors("Rock", "Rock") should return "Tie".
2. rock_paper_scissors("Rock", "Paper") should return "Player 2 wins".
3. rock_paper_scissors("Scissors", "Paper") should return "Player 1 wins".
4. rock_paper_scissors("Rock", "Scissors") should return "Player 1 wins".
5. rock_paper_scissors("Scissors", "Scissors") should return "Tie".
6. rock_paper_scissors("Scissors", "Rock") should return "Player 2 wins".
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