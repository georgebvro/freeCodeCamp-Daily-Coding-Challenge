def get_hill_rating(drop, distance, hill_type):
    downhill_multiplier = 1.2
    slalom_multiplier = 0.9
    giant_slalom_multiplier = 1.0

    steepness = drop / distance
    
    match hill_type:
        case "Downhill":
            adjusted_steepness = steepness * downhill_multiplier
        case "Slalom":
            adjusted_steepness = steepness * slalom_multiplier
        case "Giant Slalom":
            adjusted_steepness = steepness * giant_slalom_multiplier

    return "Green" if adjusted_steepness <= 0.1 else "Blue" if adjusted_steepness <= 0.25 else "Black"

# --- TEST SUITE ---

tests_text = r'''
1. get_hill_rating(95, 900, "Slalom") should return "Green".
2. get_hill_rating(620, 2800, "Downhill") should return "Black".
3. get_hill_rating(420, 1680, "Giant Slalom") should return "Blue".
4. get_hill_rating(250, 3000, "Downhill") should return "Green".
5. get_hill_rating(110, 900, "Slalom") should return "Blue".
6. get_hill_rating(380, 1500, "Giant Slalom") should return "Black".
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