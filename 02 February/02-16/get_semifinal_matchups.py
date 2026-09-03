def get_semifinal_matchups(teams):
    team_objects = [team_to_object(team) for team in teams]

    team_objects.sort(key = lambda team_object: team_object.points, reverse = True)

    return f"The semi-final games will be {team_objects[0].name} vs {team_objects[3].name} and {team_objects[1].name} vs {team_objects[2].name}."

def team_to_object(team):
    win_points = 3
    overtime_win_points = 2
    overtime_loss_points = 1
    loss_points = 0
    
    groups_dict = re.match(r"^(?P<name>.{3}): (?P<wins>\d)-(?P<overtime_wins>\d)-(?P<overtime_losses>\d)-(?P<losses>\d)$", team).groupdict()
    
    total_points = \
        int(groups_dict['wins']) * win_points \
        + int(groups_dict['overtime_wins']) * overtime_win_points \
        + int(groups_dict['overtime_losses']) * overtime_loss_points \
        + int(groups_dict['losses']) * loss_points

    return TeamRecord(groups_dict['name'], total_points)

class TeamRecord:
    def __init__(self, name, points):
        self.name = name
        self.points = points

# --- TEST SUITE ---

tests_text = r'''
1. get_semifinal_matchups(["CAN: 2-2-0-1", "FIN: 2-2-1-0", "GER: 1-0-1-3", "SUI: 0-1-3-1", "SWE: 1-1-2-1", "USA: 2-1-0-2"]) should return "The semi-final games will be FIN vs SWE and CAN vs USA.".
2. get_semifinal_matchups(["CAN: 2-1-1-1", "CZE: 1-1-1-2", "FIN: 1-2-1-1", "NOR: 0-1-1-3", "SLO: 1-0-1-3", "USA: 5-0-0-0"]) should return "The semi-final games will be USA vs CZE and CAN vs FIN.".
3. get_semifinal_matchups(["CAN: 3-2-0-0", "CZE: 2-1-2-0", "LAT: 0-0-1-4", "ITA: 1-1-1-2", "DEN: 1-0-0-4", "USA: 3-1-1-0"]) should return "The semi-final games will be CAN vs ITA and USA vs CZE.".
4. get_semifinal_matchups(["AUT: 2-2-1-0", "DEN: 1-0-0-4", "ITA: 1-1-1-2", "JPN: 3-2-0-0", "KOR: 2-1-2-0", "LAT: 0-0-1-4"]) should return "The semi-final games will be JPN vs ITA and AUT vs KOR.".
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