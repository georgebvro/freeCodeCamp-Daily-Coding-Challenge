from collections import Counter

def get_best_hand(cards):
    ranks = [card[0] for card in cards]
    suits = [card[1] for card in cards]

    def straight_found(ranks):
        numbered_ranks = sorted([10 if rank == "T" else 11 if rank == "J" else 12 if rank == "Q" else 13 if rank == "K" else 14 if rank == "A" else int(rank) for rank in ranks])

        straight = True

        for i in range(len(numbered_ranks) - 1):
            if numbered_ranks[i + 1] - numbered_ranks[i] != 1:
                straight = False

        if numbered_ranks[-1] == 14:
            if straight:
                return "Royal"

            del numbered_ranks[-1]
            numbered_ranks.insert(0, 1)
            straight = True

            for i in range(len(numbered_ranks) - 1):
                if numbered_ranks[i + 1] - numbered_ranks[i] != 1:
                    straight = False

        return "Straight" if straight else False

    def flush_found(suits):
        return all(suit == suits[0] for suit in suits)

    def count_ranks(ranks):
        matching_ranks_count = Counter(Counter(ranks).values())

        return "Four of a Kind" if matching_ranks_count.get(4) \
            else "Full House" if matching_ranks_count.get(3) and matching_ranks_count.get(2) == 1 \
            else "Three of a Kind" if matching_ranks_count.get(3) and matching_ranks_count.get(1) == 2 \
            else "Two Pair" if matching_ranks_count.get(2) == 2 \
            else "Pair" if matching_ranks_count.get(2) == 1 \
            else "High Card"

    return "Royal Flush" if straight_found(ranks) == "Royal" and flush_found(suits) \
        else "Straight Flush" if straight_found(ranks) == "Straight" and flush_found(suits) \
        else "Flush" if flush_found(suits) \
        else "Straight" if straight_found(ranks) == "Straight" \
        else count_ranks(ranks)

# --- TEST SUITE ---

tests_text = r'''
1. get_best_hand(["7s", "7h", "7d", "2c", "5h"]) should return "Three of a Kind".
2. get_best_hand(["Ks", "Kh", "Kd", "4s", "4h"]) should return "Full House".
3. get_best_hand(["2h", "5h", "7h", "9h", "Jh"]) should return "Flush".
4. get_best_hand(["As", "Ah", "Ad", "Ac", "Kh"]) should return "Four of a Kind".
5. get_best_hand(["Ts", "Th", "9d", "9c", "8h"]) should return "Two Pair".
6. get_best_hand(["9c", "8c", "7c", "6c", "5c"]) should return "Straight Flush".
7. get_best_hand(["As", "Kh", "Jd", "8c", "5h"]) should return "High Card".
8. get_best_hand(["As", "2h", "3d", "4c", "5h"]) should return "Straight".
9. get_best_hand(["Ts", "Th", "7c", "6d", "5h"]) should return "Pair".
10. get_best_hand(["As", "Ks", "Qs", "Js", "Ts"]) should return "Royal Flush".
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