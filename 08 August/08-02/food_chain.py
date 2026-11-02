def get_food_chain(pairs):
    def find_apex(pairs):
        for pair in pairs:
            apex = pair[0]

            for pair in pairs:
                if apex == pair[1]:
                    apex = None
                    break

            if apex:
                return apex

    def find_prey(predator):
        for pair in pairs:
            if predator == pair[0]:
                return pair[1]
        
    food_chain = [find_apex(pairs)]

    while True:
        prey = find_prey(food_chain[-1])

        if prey:
            food_chain.append(prey)
        else:
            return food_chain

# --- TEST SUITE ---

tests_text = r'''
1. get_food_chain([["cat", "mouse"]]) should return ["cat", "mouse"].
2. get_food_chain([["wolf", "deer"], ["deer", "grass"]]) should return ["wolf", "deer", "grass"].
3. get_food_chain([["hawk", "snake"], ["snake", "frog"], ["frog", "fly"]]) should return ["hawk", "snake", "frog", "fly"].
4. get_food_chain([["rabbit", "grass"], ["fox", "rabbit"], ["eagle", "fox"]]) should return ["eagle", "fox", "rabbit", "grass"].
5. get_food_chain([["seal", "salmon"], ["herring", "shrimp"], ["orca", "seal"], ["shrimp", "plankton"], ["salmon", "herring"]]) should return ["orca", "seal", "salmon", "herring", "shrimp", "plankton"].
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