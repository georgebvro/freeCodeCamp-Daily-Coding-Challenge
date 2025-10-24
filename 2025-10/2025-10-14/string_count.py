def count(text, parameter):
    import re

    return len(re.compile("(?=(" + parameter + "))").findall(text))

print(count('abcdefg', 'def'))
print(count('hello', 'world'))
print(count('mississippi', 'iss'))
print(count('she sells seashells by the seashore', 'sh'))
print(count('101010101010101010101', '101'))

print(count("aaa", "aa"));