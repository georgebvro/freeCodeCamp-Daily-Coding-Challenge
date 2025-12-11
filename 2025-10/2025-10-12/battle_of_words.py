def battle(our_team, opponent):
    our_team_score = 0
    opponent_score = 0

    our_team_words = our_team.split()
    opponent_words = opponent.split()

    for word_index, _ in enumerate(our_team_words):
        our_team_word_value = word_value(our_team_words[word_index])
        opponent_word_value = word_value(opponent_words[word_index])

        if our_team_word_value > opponent_word_value:
            our_team_score += 1

        elif our_team_word_value < opponent_word_value:
            opponent_score += 1

    return "We win" if our_team_score > opponent_score else "We lose" if our_team_score < opponent_score else "Draw"

def word_value(word):
    CODE_OF_LOWERCASE_A = ord('a')
    word_value = 0

    for letter in word:
        if letter.islower():
            word_value += ord(letter) - CODE_OF_LOWERCASE_A + 1

        else:
            word_value += (ord(letter.lower()) - CODE_OF_LOWERCASE_A + 1) * 2

    return word_value

print(battle("hello world", "hello word"))
print(battle("Hello world", "hello world"))
print(battle("lorem ipsum", "kitty ipsum"))
print(battle("hello world", "world hello"))
print(battle("git checkout", "git switch"))
print(battle("Cheeseburger with fries", "Cheeseburger with Fries"))
print(battle("We must never surrender", "Our team must win"))

# --- TEST SUITE ---

tests_text = '''
1. battle("hello world", "hello word") should return "We win".
2. battle("Hello world", "hello world") should return "We win".
3. battle("lorem ipsum", "kitty ipsum") should return "We lose".
4. battle("hello world", "world hello") should return "Draw".
5. battle("git checkout", "git switch") should return "We win".
6. battle("Cheeseburger with fries", "Cheeseburger with Fries") should return "We lose".
7. battle("We must never surrender", "Our team must win") should return "Draw".
'''

import re

tests_regex = re.compile(r"(?P<number>\d+)\.\s(?P<function_call>.+) should return (?P<output>.+?)\.?$", re.MULTILINE)
test_data = [item.groupdict() for item in re.finditer(tests_regex, tests_text)]

def run_tests(test_data):
    print("--------------------------")
    print("🧪 Starting Verification...")
    print("--------------------------")

    all_passed = True
    fail_count = 0

    for test in test_data:
        function_call_output = eval(test['function_call'])
        test_output = eval(test['output'])
        
        if function_call_output == test_output:
            print(f"{test['number']}.✅ PASS - Function Call:\n{test['function_call']}")
        else:
            print(f"{test['number']}.❌ FAIL - Function Call:\n{test['function_call']}\nExpected:\n{test_output}\nGot:\n{function_call_output}")
            all_passed = False
            fail_count += 1

    print("----------------------------");

    if (all_passed):
        print("🎉 SUCCESS: All tests PASSED.");
    else:
        print(f"⚠️ WARNING: {fail_count}/{len(test_data)} tests FAILED.");

run_tests(test_data)