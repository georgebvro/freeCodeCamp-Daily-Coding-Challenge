from functools import reduce

def get_cleanup_score(items):
    ITEM_BASE_VALUES = {
        "bottle": 10,
        "can": 6,
        "bag": 8,
        "tire": 35,
        "straw": 4,
        "cardboard": 3,
        "newspaper": 3,
        "shoe": 12,
        "electronics": 25,
        "battery": 18,
        "mattress": 38
    }
    streak_bonus = 0

    def calculate_score(cleanup_score, index_item):
        current_item_value = 0
        nonlocal streak_bonus

        if index_item[1][0] == "rare":
            current_item_value = index_item[1][1]
        else:
            streak_bonus = streak_bonus + 1 if index_item[1] == items[index_item[0] - 1] else 0
            current_item_value += ITEM_BASE_VALUES[index_item[1]] + streak_bonus

        fifth_item_multiplier = (index_item[0] + 1) / 5 + 1 if not (index_item[0] + 1) % 5 else 1

        current_item_value *= fifth_item_multiplier

        return cleanup_score + current_item_value

    return reduce(calculate_score, enumerate(items), 0)

# --- TEST SUITE ---

tests_text = r'''
1. get_cleanup_score(["bottle", "straw", "shoe", "battery"]) should return 44.
2. get_cleanup_score(["electronics", "straw", "newspaper", "bottle", "bag"]) should return 58.
3. get_cleanup_score(["shoe", "can", "can", "can", "bottle", "bottle", "straw", "straw", "straw"]) should return 79.
4. get_cleanup_score(["mattress", ["rare", 80], "tire", "tire", "tire", ["rare", 95]]) should return 358.
5. get_cleanup_score(["bottle", "can", "can", "shoe", "shoe", ["rare", 56], "bottle", "bottle", "can", "can", "electronics", "bottle", ["rare", 48], "bottle", "can", "can", "can", "can", "can", "can", "can"]) should return 383.
'''

import re

tests_regex = re.compile(r"(?P<number>\d+)\.\s(?P<function_call>.+) should return (?P<output>.+?)\.?$", re.MULTILINE)
test_data = [index_item.groupdict() for index_item in re.finditer(tests_regex, tests_text)]

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