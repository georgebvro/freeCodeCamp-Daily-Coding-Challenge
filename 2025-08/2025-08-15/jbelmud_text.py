def jbelmu(text):
    textList = text.split()

    textList = map(jumbleWord, textList)

    return " ".join(list(textList))

def jumbleWord(word):
    wordList = sorted(list(word)[1:-1])
    
    wordList = [word[0]] + wordList
    if len(word) > 1:
        wordList += word[-1]
    
    return "".join(wordList)

print(jbelmu("hello world"))
print(jbelmu("i love jumbled text"))
print(jbelmu("freecodecamp is my favorite place to learn to code"))
print(jbelmu("the quick brown fox jumps over the lazy dog"))