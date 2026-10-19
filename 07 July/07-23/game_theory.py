def play_game(p1, p2):
    BOTH_COOPERATE = 3
    BOTH_DEFECT = 1
    ONE_DEFECTS = 5

    p1_score = 0
    p2_score = 0

    for round in zip(p1, p2):
        if round[0] == round[1]:
            if round[0] == "C":
                p1_score += BOTH_COOPERATE
                p2_score += BOTH_COOPERATE
            else:
                p1_score += BOTH_DEFECT
                p2_score += BOTH_DEFECT
        else:
            if round[0] == "D":
                p1_score += ONE_DEFECTS
            else:
                p2_score += ONE_DEFECTS

    return [p1_score, p2_score]

# --- TEST SUITE ---

tests_text = r'''
1. play_game("CCCC", "CCCC") should return [12, 12].
2. play_game("DDDD", "DDDD") should return [4, 4].
3. play_game("CCDD", "CDDD") should return [5, 10].
4. play_game("CCCDCDCCCDDC", "CCDDCDCDDCCD") should return [24, 34].
5. play_game("DDCCDDDDCDDCDDDCDD", "CCDCCCDCCCDCCCCDCC") should return [66, 21].
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