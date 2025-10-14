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