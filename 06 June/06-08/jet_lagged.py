def get_jet_lag_hours(departure_city, arrival_city, flight_duration, direction):
    CITIES_UTC_OFFSET = {
        "Los Angeles": -8,
        "New York": -5,
        "London": 0,
        "Istanbul": +3,
        "Dubai": +4,
        "Hong Kong": +8,
        "Tokyo": +9
    }
    timezone_difference = abs(CITIES_UTC_OFFSET[arrival_city] - CITIES_UTC_OFFSET[departure_city])
    direction_multiplier = 1.5 if direction == "east" else 1.0

    return timezone_difference + (flight_duration * 0.1) * direction_multiplier

# --- TEST SUITE ---

tests_text = r'''
1. get_jet_lag_hours("Istanbul", "Hong Kong", 10, "east") should return 6.5.
2. get_jet_lag_hours("London", "New York", 8, "west") should return 5.8.
3. get_jet_lag_hours("Hong Kong", "Tokyo", 4, "east") should return 1.6.
4. get_jet_lag_hours("Dubai", "London", 7, "west") should return 4.7.
5. get_jet_lag_hours("Los Angeles", "Hong Kong", 15, "west") should return 17.5.
6. get_jet_lag_hours("Tokyo", "Dubai", 9, "west") should return 5.9.
7. get_jet_lag_hours("New York", "Istanbul", 10, "east") should return 9.5.
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