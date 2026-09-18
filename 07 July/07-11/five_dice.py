from collections import Counter

def five_dice(dice):
    counts = list(dict(Counter(dice)).values())

    # Five of a kind
    if len(counts) == 1:
        return "five of a kind"

    # Four of a kind
    if 4 in counts:
        return "four of a kind"

    # Full house
    if 3 in counts and 2 in counts:
        return "full house"

    # Large straight and Small straight
    sorted_dice = sorted(dice)
    differences = [sorted_dice[i + 1] - sorted_dice[i] for i in range(len(sorted_dice) - 1)]

    if all(difference == 1 for difference in differences):
        return "large straight"

    if all(difference == 1 for difference in differences[0:-1]) or all(difference == 1 for difference in differences[1:]):
        return "small straight"

    # Three of a kind
    if 3 in counts:
        return "three of a kind"

    # Two pair and One pair
    counts_counts = dict(Counter(counts))

    try:
        if counts_counts[2] == 2:
            return "two pair";

        if counts_counts[2] == 1:
            return "pair";
    except KeyError:
        pass

    # No pair
    return "no pair"

# --- TEST SUITE ---

tests_text = r'''
1. five_dice([1, 1, 1, 1, 1]) should return "five of a kind".
2. five_dice([5, 5, 5, 6, 5]) should return "four of a kind".
3. five_dice([2, 5, 6, 4, 3]) should return "large straight".
4. five_dice([4, 3, 3, 3, 1]) should return "three of a kind".
5. five_dice([4, 6, 2, 6, 5]) should return "pair".
6. five_dice([1, 4, 5, 6, 2]) should return "no pair".
7. five_dice([1, 3, 4, 6, 2]) should return "small straight".
8. five_dice([2, 2, 5, 2, 5]) should return "full house".
9. five_dice([6, 4, 5, 6, 4]) should return "two pair".
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