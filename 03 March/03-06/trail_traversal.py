def navigate_trail(map):
    start = 'C'
    traversable_or_goal = ['T', 'G']
    current_location = { }
    trail_moves = ""

    for vertical_coordinate, row in enumerate(map):
        try:
            horizontal_coordinate = row.index(start)
        except ValueError:
            pass
        else:
            current_location['type'] = start
            current_location['vertical'] = vertical_coordinate
            current_location['horizontal'] = horizontal_coordinate

# Solution using four if statements, one for each direction
#    while(current_location['type'] != 'G'):
#        index_of_one_row_up = current_location['vertical'] - 1
#        up_location = map[index_of_one_row_up][current_location['horizontal']] if index_of_one_row_up >= 0 else None
#        if not trail_moves.endswith("D") and up_location in traversable_or_goal:
#            current_location['type'] = up_location
#            current_location['vertical'] -= 1
#            trail_moves += "U"
#            continue
#
#        index_of_one_row_down = current_location['vertical'] + 1
#        down_location = map[index_of_one_row_down][current_location['horizontal']] if index_of_one_row_down < len(map) else None
#        if not trail_moves.endswith("U") and down_location in traversable_or_goal:
#            current_location['type'] = down_location
#            current_location['vertical'] += 1
#            trail_moves += "D"
#            continue
#
#        index_of_one_column_left = current_location['horizontal'] - 1
#        left_location = map[current_location['vertical']][index_of_one_column_left] if index_of_one_column_left >= 0 else None
#        if not trail_moves.endswith("R") and left_location in traversable_or_goal:
#            current_location['type'] = left_location
#            current_location['horizontal'] -= 1
#            trail_moves += "L"
#            continue
#
#        index_of_one_column_right = current_location['horizontal'] + 1
#        right_location = map[current_location['vertical']][index_of_one_column_right] if index_of_one_column_right < len(map[current_location['vertical']]) else None
#        if not trail_moves.endswith("L") and right_location in traversable_or_goal:
#            current_location['type'] = right_location
#            current_location['horizontal'] += 1
#            trail_moves += "R"

# A more elegant condensed solution using a dictionary for directions
    directions = {
        'U': (-1, 0, "D"),
        'D': (1, 0, "U"),
        'L': (0, -1, "R"),
        'R': (0, 1, "L")
    }

    while(current_location['type'] != 'G'):
        for direction, (vertical_offset, horizontal_offset, opposite_direction) in directions.items():
            target_vertical = current_location['vertical'] + vertical_offset
            target_horizontal = current_location['horizontal'] + horizontal_offset

            if 0 <= target_vertical < len(map) \
            and 0 <= target_horizontal < len(map[current_location['vertical']]) \
            and map[target_vertical][target_horizontal] in traversable_or_goal \
            and not trail_moves.endswith(opposite_direction):
                current_location['type'] = map[target_vertical][target_horizontal]
                current_location['vertical'] = target_vertical
                current_location['horizontal'] = target_horizontal
                trail_moves += direction
                break

    return trail_moves

# --- TEST SUITE ---

tests_text = r'''
1. navigate_trail(["-CT--", "--T--", "--TT-", "---T-", "---G-"]) should return "RDDRDD".
2. navigate_trail(["-----", "--TTG", "--T--", "--T--", "CTT--"]) should return "RRUUURR".
3. navigate_trail(["-C----", "TT----", "T-----", "TTTTT-", "----G-"]) should return "DLDDRRRRD".
4. navigate_trail(["--------", "-CTTT---", "----T---", "---GT---", "--------"]) should return "RRRDDL".
5. navigate_trail(["TTTTTTT-", "T-----T-", "T-----T-", "TTTT--TG", "---C----"]) should return "ULLLUUURRRRRRDDDR".
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