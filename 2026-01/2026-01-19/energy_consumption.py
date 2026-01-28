def compare_energy(calories_burned, watt_hours_used):
    CALORIES_TO_JOULES_CONVERSION_RATE = 4184
    WATT_HOUR_TO_JOULES_CONVERSION_RATE = 3600

    workout_energy_joules = calories_burned * CALORIES_TO_JOULES_CONVERSION_RATE
    devices_energy_joules = watt_hours_used * WATT_HOUR_TO_JOULES_CONVERSION_RATE

    return "Workout" if workout_energy_joules > devices_energy_joules \
        else "Devices" if workout_energy_joules < devices_energy_joules \
        else "Equal"

# --- TEST SUITE ---

tests_text = r'''
1. compare_energy(250, 50) should return "Workout".
2. compare_energy(100, 200) should return "Devices".
3. compare_energy(450, 523) should return "Equal".
4. compare_energy(300, 75) should return "Workout".
5. compare_energy(200, 250) should return "Devices".
6. compare_energy(900, 1046) should return "Equal".
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