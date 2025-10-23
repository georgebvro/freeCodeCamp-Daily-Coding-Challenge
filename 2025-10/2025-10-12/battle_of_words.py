def battle(our_team, opponent):
    our_team_score = 0
    opponent_score = 0

    our_team_words = our_team.split()
    opponent_words = opponent.split()

    for word_index, _ in enumerate(our_team_words):
        if word_value(our_team_words[word_index]) > word_value(opponent_words[word_index]):
            our_team_score += 1

        elif word_value(our_team_words[word_index]) < word_value(opponent_words[word_index]):
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