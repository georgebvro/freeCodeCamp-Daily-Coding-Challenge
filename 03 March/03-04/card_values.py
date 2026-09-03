def card_values(cards):

    return [to_card_value(card) for card in cards]

def to_card_value(card):
    groups_dict = re.match("^(?P<card_rank>[0-9]|[A-Z]|10)[SCDH]$", card).groupdict()
    card_rank = groups_dict['card_rank']

    match card_rank:
        case "A":
            return 1

        case "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10":
            return int(card_rank)

        case "J" | "Q" | "K":
            return 10

# --- TEST SUITE ---

tests_text = r'''
1. card_values(["3H", "4D", "5S"]) should return [3, 4, 5].
2. card_values(["AS", "10S", "10H", "6D", "7D"]) should return [1, 10, 10, 6, 7].
3. card_values(["8D", "QS", "2H", "JC", "9C"]) should return [8, 10, 2, 10, 9].
4. card_values(["AS", "KS"]) should return [1, 10].
5. card_values(["10H", "JH", "QH", "KH", "AH"]) should return [10, 10, 10, 10, 1].
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