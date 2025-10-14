import re

def repeat_vowels(s):
    regex = re.compile(r"[aeiouAEIOU]")
    vowel_repeater_str = ''
    vowel_counter = 0;

    for char in s:
        vowel_repeater_element = char
        if re.match(regex, char):
            vowel_repeater_element += char.lower() * vowel_counter
            vowel_counter += 1
        vowel_repeater_str += vowel_repeater_element
        
    return vowel_repeater_str

print(repeat_vowels("hello world")) 
print(repeat_vowels("freeCodeCamp"))
print(repeat_vowels("AEIOU"))
print(repeat_vowels("I like eating ice cream in Iceland"))