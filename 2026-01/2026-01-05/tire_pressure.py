def tire_status(pressures_psi, range_bar):
    BAR_PSI_CONVERSION_RATE = 14.5038

    return [
        "Low" if tire_pressure_bar < range_bar[0] else 
        "High" if tire_pressure_bar > range_bar[1] else 
        "Good" 
        for tire_pressure_psi in pressures_psi
        for tire_pressure_bar in [tire_pressure_psi / BAR_PSI_CONVERSION_RATE]
    ]

# --- TEST SUITE ---

tests_text = r'''
1. tire_status([32, 28, 35, 29], [2, 3]) should return ["Good", "Low", "Good", "Low"].
2. tire_status([32, 28, 35, 30], [2, 2.3]) should return ["Good", "Low", "High", "Good"].
3. tire_status([29, 26, 31, 28], [2.1, 2.5]) should return ["Low", "Low", "Good", "Low"].
4. tire_status([31, 31, 30, 29], [1.5, 2]) should return ["High", "High", "High", "Good"].
5. tire_status([30, 28, 30, 29], [1.9, 2.1]) should return ["Good", "Good", "Good", "Good"].
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