def get_captured_value(pieces):
    chess_pieces = {
        'P': {'quantity': 8, 'value': 1},
        'R': {'quantity': 2, 'value': 5},
        'N': {'quantity': 2, 'value': 3},
        'B': {'quantity': 2, 'value': 3},
        'Q': {'quantity': 1, 'value': 9},
        'K': {'quantity': 1, 'value': 0}
    }
    lost_value = 0

    if 'K' not in pieces:
        return "Checkmate"

    for piece in chess_pieces:
        count = len([p for p in pieces if p == piece])
        lost_value += (chess_pieces[piece]['quantity'] - count) * chess_pieces[piece]['value']

    return lost_value

# --- TEST SUITE ---

tests_text = r'''
1. get_captured_value(["P", "P", "P", "P", "P", "P", "R", "R", "N", "B", "Q", "K"]) should return 8.
2. get_captured_value(["P", "P", "P", "P", "P", "R", "B", "K"]) should return 26.
3. get_captured_value(["K", "P", "P", "N", "P", "P", "R", "P", "B", "P", "N", "B"]) should return 16.
4. get_captured_value(["P", "Q", "N", "P", "P", "B", "K", "P", "R", "R", "P", "P", "B", "P"]) should return 4.
5. get_captured_value(["P", "K"]) should return 38.
6. get_captured_value(["N", "P", "P", "B", "K", "P", "Q", "N", "P", "P", "R", "R", "P", "P", "P", "B"]) should return 0.
7. get_captured_value(["N", "P", "P", "B", "P", "R", "Q", "P", "P", "P", "B"]) should return "Checkmate".
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