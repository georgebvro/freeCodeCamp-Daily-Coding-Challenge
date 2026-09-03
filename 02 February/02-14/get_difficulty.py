def get_difficulty(track):
    left_to_right_direction_changes = len(re.findall("(LR)", track))
    right_to_left_direction_changes = len(re.findall("(RL)", track))
    left_turns = len(re.findall("(L([^R]|$))", track))
    right_turns = len(re.findall("(R([^L]|$))", track))

    direction_change_points = 15
    turn_points = 5

    track_score = (left_to_right_direction_changes + right_to_left_direction_changes) * direction_change_points \
        + (left_turns + right_turns) * turn_points

    return "Easy" if track_score <= 100 else "Medium" if track_score <= 200 else "Hard"

# --- TEST SUITE ---

tests_text = r'''
1. get_difficulty("SLSLLSRRLSRLRL") should return "Easy".
2. get_difficulty("LLRSLRLRSLLRLRSLRRLRSRLLS") should return "Hard".
3. get_difficulty("SRRRRLSLLRLRSSRLSRL") should return "Medium".
4. get_difficulty("LSRLRLSRLRLSLRSLRLLRLSRLRLRSL") should return "Hard".
5. get_difficulty("SLLSSLRLSLSLRSLSSLRL") should return "Medium".
6. get_difficulty("SRSLSRSLSRRSLSRSRSLSRLSRSR") should return "Easy".
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