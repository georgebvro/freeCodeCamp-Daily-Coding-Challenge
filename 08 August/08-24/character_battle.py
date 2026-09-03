def battle(my_army, opposing_army):
    if len(my_army) > len(opposing_army):
        return 'Opponent retreated'

    elif len(my_army) < len(opposing_army):
        return 'We retreated'

    else:
        my_army_score = 0
        opposing_army_score = 0

        for i in range(0, len(my_army)):
            if character_strength(my_army[i]) > character_strength(opposing_army[i]):
                my_army_score += 1
            elif character_strength(my_army[i]) < character_strength(opposing_army[i]):
                opposing_army_score += 1

    return 'We won' if my_army_score > opposing_army_score else 'We lost' if my_army_score < opposing_army_score else 'It was a tie'

def character_strength(character):
    CODE_OF_LOWERCASE_A = ord('a')
    LOWERCASE_A_STRENGTH = 1
    LOWERCASE_DIFF = CODE_OF_LOWERCASE_A - LOWERCASE_A_STRENGTH
    CODE_OF_UPPERCASE_A = ord('A')
    UPPERCASE_A_STRENGTH = 27
    UPPERCASE_DIFF = CODE_OF_UPPERCASE_A - UPPERCASE_A_STRENGTH
    strength = 0

    if character.islower():
        strength = ord(character) - LOWERCASE_DIFF

    elif character.isupper():
        strength = ord(character) - UPPERCASE_DIFF

    elif character.isdigit():
        strength = int(character)

    return strength

print(battle("Hello", "World"))
print(battle("pizza", "salad"))
print(battle("C@T5", "D0G$"))
print(battle("kn!ght", "orc"))
print(battle("PC", "Mac"))
print(battle("Wizards", "Dragons"))
print(battle("Mr. Smith", "Dr. Jones"))

# --- TEST SUITE ---

tests_text = '''
1. battle("Hello", "World") should return "We lost".
2. battle("pizza", "salad") should return "We won".
3. battle("C@T5", "D0G$") should return "We won".
4. battle("kn!ght", "orc") should return "Opponent retreated".
5. battle("PC", "Mac") should return "We retreated".
6. battle("Wizards", "Dragons") should return "It was a tie".
7. battle("Mr. Smith", "Dr. Jones") should return "It was a tie".
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