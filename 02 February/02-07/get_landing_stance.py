def get_landing_stance(start_stance, rotation):
    multiples_of_90_degrees = abs(rotation // 90)
    flips = multiples_of_90_degrees // 2
    changed_stance = flips % 2

    # Solution using conditional expressions
    # return start_stance if not changed_stance else "Goofy" if start_stance == "Regular" else "Regular"

    # Solution using list
    # stances = ["Regular", "Goofy"]

    # return [
    #     start_stance if not changed_stance 
    #     else stance for stance in stances if stance != start_stance
    #     ] \
    #     [0]

    # Solution using dictionary
    toggle = {
        "Regular": "Goofy",
        "Goofy": "Regular"
    }

    return toggle[start_stance] if changed_stance else start_stance

# --- TEST SUITE ---

tests_text = r'''
1. get_landing_stance("Regular", 90) should return "Regular".
2. get_landing_stance("Regular", 180) should return "Goofy".
3. get_landing_stance("Goofy", -270) should return "Regular".
4. get_landing_stance("Regular", 2340) should return "Goofy".
5. get_landing_stance("Goofy", 2160) should return "Goofy".
6. get_landing_stance("Goofy", -540) should return "Regular".
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