def score_curling(house):
    teams = ['R', 'Y']
    winner_score = 0;

    ring_indices = {
        0: [[2, 2]],
        1: [
            [1, 1], [1, 2], [1, 3],
            [2, 1],         [2, 3],
            [3, 1], [3, 2], [3, 3]
        ],
        2: [
            [0, 0], [0, 1], [0, 2], [0, 3], [0, 4],
            [1, 0],                         [1, 4],
            [2, 0],                         [2, 4],
            [3, 0],                         [3, 4],
            [4, 0], [4, 1], [4, 2], [4, 3], [4, 4]
        ]
    }

    house_stones = {
        0: { teams[0]: 0, teams[1]: 0 },
        1: { teams[0]: 0, teams[1]: 0 },
        2: { teams[0]: 0, teams[1]: 0 }
    }

    lowest_rings = {
        teams[0]: None,
        teams[1]: None
    }

    for ring in ring_indices:
        for indices in ring_indices[ring]:
            for team in teams:
                if house[indices[0]][indices[1]] == team:
                    house_stones[ring][team] += 1

    for team in teams:
        for ring in house_stones:
            if house_stones[ring][team] > 0:
                lowest_rings[team] = ring
                break

    scoring_team = \
        teams[0] if lowest_rings[teams[0]] < lowest_rings[teams[1]] \
        else teams[1] if lowest_rings[teams[1]] < lowest_rings[teams[0]] \
        else None

    if not scoring_team:
        return "No points awarded"

    losing_team = teams[0] if teams[0] != scoring_team else teams[1]

    for ring in range(lowest_rings[losing_team]):
        winner_score += house_stones[ring][scoring_team]

    return f"{scoring_team}: {winner_score}"

# --- TEST SUITE ---

tests_text = r'''
1. score_curling([[".", ".", "R", ".", "."], [".", "R", ".", ".", "."], ["Y", ".", ".", ".", "."], [".", "R", ".", ".", "."], [".", ".", ".", ".", "."]]) should return "R: 2".
2. score_curling([[".", ".", "R", ".", "."], [".", ".", ".", ".", "."], [".", ".", "Y", ".", "R"], [".", ".", "Y", "Y", "."], [".", "Y", "R", "R", "."]]) should return "Y: 3".
3. score_curling([[".", "R", "Y", ".", "."], ["Y", ".", ".", ".", "."], [".", ".", ".", ".", "."], [".", "Y", "R", "Y", "."], [".", ".", "R", "R", "."]]) should return "No points awarded".
4. score_curling([[".", "Y", "Y", ".", "."], ["Y", ".", ".", "R", "."], [".", ".", "R", ".", "."], [".", ".", "R", "R", "."], [".", "Y", "R", "Y", "."]]) should return "R: 4".
5. score_curling([["Y", "Y", "Y", "Y", "Y"], ["Y", "R", "R", "R", "Y"], ["Y", "R", "Y", "R", "Y"], ["Y", "R", "R", "R", "Y"], ["Y", "Y", "Y", "Y", "Y"]]) should return "Y: 1".
6. score_curling([["Y", "R", "Y", "R", "Y"], ["R", ".", ".", ".", "R"], ["Y", ".", ".", ".", "Y"], ["R", ".", ".", ".", "R"], ["Y", ".", ".", "R", "Y"]]) should return "No points awarded".
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