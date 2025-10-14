import re

def is_pangram(sentence, letters):
    regex = re.compile(r'[^a-zA-Z]')
    sentence = re.sub(regex, "", sentence).lower()
    
    return is_it_pangram(sentence, letters) and is_it_pangram(letters, sentence)

def is_it_pangram(string1, string2):
    for character in string2:
        if not character in string1:
            return False
    return True

print(is_pangram("hello", "helo"))
print(is_pangram("hello", "hel"))
print(is_pangram("hello", "helow"))
print(is_pangram("hello world", "helowrd"))
print(is_pangram("Hello World!", "helowrd"))
print(is_pangram("Hello World!", "heliowrd"))
print(is_pangram("freeCodeCamp", "frcdmp"))
print(is_pangram("The quick brown fox jumps over the lazy dog.", "abcdefghijklmnopqrstuvwxyz"))