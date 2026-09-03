def get_unique_climbs(steps):
    if steps <= 2:
        return steps

    ways_to_climb_up_to_two_steps_before = 1
    ways_to_climb_up_to_one_step_before = 2
    current_count = 0

    for i in range(3, steps + 1):
        current_count = ways_to_climb_up_to_two_steps_before + ways_to_climb_up_to_one_step_before

        ways_to_climb_up_to_two_steps_before = ways_to_climb_up_to_one_step_before
        ways_to_climb_up_to_one_step_before = current_count

    return current_count

# --- TEST SUITE ---

tests_text = r'''
1. get_unique_climbs(4) should return 5.
2. get_unique_climbs(5) should return 8.
3. get_unique_climbs(10) should return 89.
4. get_unique_climbs(18) should return 4181.
5. get_unique_climbs(29) should return 832040.
6. get_unique_climbs(50) should return 20365011074.
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