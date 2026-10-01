def get_odds(dice, target):
    DIE_SIDES = 6
    possible_rolls_count = DIE_SIDES ** dice
    cache = {}

    def count_successful_rolls(dice_left, target_remaining):
        key = dice_left, target_remaining

        if key in cache:
            return cache[key]

        if dice_left == 0:
            return 1 if target_remaining == 0 else 0

        if target_remaining < dice_left or target_remaining > dice_left * DIE_SIDES:
            return 0

        target_hit_count = 0

        for die_face in range(1, DIE_SIDES + 1):
            target_hit_count += count_successful_rolls(dice_left - 1, target_remaining - die_face)

        cache[key] = target_hit_count

        return target_hit_count

    return f"1 in {round(possible_rolls_count / count_successful_rolls(dice, target))}"

# --- TEST SUITE ---

tests_text = r'''
1. get_odds(1, 5) should return "1 in 6".
2. get_odds(2, 4) should return "1 in 12".
3. get_odds(3, 10) should return "1 in 8".
4. get_odds(4, 7) should return "1 in 65".
5. get_odds(5, 26) should return "1 in 111".
6. get_odds(6, 35) should return "1 in 7776".
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