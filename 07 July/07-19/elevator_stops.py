def elevator_stops(current_floor, stops):
    ordered_stops = sorted(stops)
    stops_above = [floor for floor in ordered_stops if floor > current_floor]
    stops_below = [floor for floor in ordered_stops if floor < current_floor][::-1]
    distance_above = stops_above[-1] - current_floor if stops_above else float('inf')
    distance_below = current_floor - stops_below[-1] if stops_below else float('inf')

    return stops_above + stops_below if distance_above <= distance_below else stops_below + stops_above

# --- TEST SUITE ---

tests_text = r'''
1. elevator_stops(5, [2, 8, 3, 9]) should return [3, 2, 8, 9].
2. elevator_stops(6, [2, 10, 8, 3, 1, 9]) should return [8, 9, 10, 3, 2, 1].
3. elevator_stops(1, [4, 8, 3, 6, 9]) should return [3, 4, 6, 8, 9].
4. elevator_stops(12, [6, 10, 7, 3, 1, 4]) should return [10, 7, 6, 4, 3, 1].
5. elevator_stops(11, [2, 8, 23, 5, 12, 10, 6, 9, 19]) should return [10, 9, 8, 6, 5, 2, 12, 19, 23].
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