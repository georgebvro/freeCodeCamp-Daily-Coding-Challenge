def get_itinerary_count(stops):
    all_stops = stops + ["lunch", "dinner"]
    valid_arrangements = 0

    def backtrack(path_so_far, remaining_stops):
        nonlocal valid_arrangements
        breakfast_index = path_so_far.index("breakfast")

        try:
            lunch_index = path_so_far.index("lunch")
        except ValueError:
            lunch_index = None
        
        try:
            dinner_index = path_so_far.index("dinner")
        except ValueError:
            dinner_index = None

        is_valid_arrangement = True

        if lunch_index and lunch_index - breakfast_index < 2 \
        or lunch_index and dinner_index and dinner_index - lunch_index < 2 \
        or not lunch_index and dinner_index \
        or dinner_index and len(path_so_far) - dinner_index > 2:
            is_valid_arrangement = False

        if is_valid_arrangement:
            valid_arrangements += 1 if len(path_so_far) == len(all_stops) + 1 else 0

        for i, current_stop in enumerate(remaining_stops):
            path_so_far.append(current_stop)
            backtrack(path_so_far, [stop for stop in remaining_stops if stop != current_stop])
            path_so_far.pop()

    backtrack(["breakfast"], all_stops)

    return valid_arrangements

# --- TEST SUITE ---

tests_text = r'''
1. get_itinerary_count(["library", "park"]) should return 2.
2. get_itinerary_count(["library", "park", "arcade"]) should return 18.
3. get_itinerary_count(["library", "park", "arcade", "store"]) should return 120.
4. get_itinerary_count(["library", "park", "arcade", "store", "cafe"]) should return 840.
5. get_itinerary_count(["library", "park", "arcade", "store", "cafe", "market", "museum"]) should return 55440.
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