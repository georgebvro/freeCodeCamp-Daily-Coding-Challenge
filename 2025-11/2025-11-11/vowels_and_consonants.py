import re

def count(s):

    return [
        len(re.findall("[aeiou]", s, re.IGNORECASE)),
        len(re.findall("[b-df-hj-np-tv-z]", s, re.IGNORECASE))
    ]

print(count("Hello World"))
print(count("JavaScript"))
print(count("Python"))
print(count("freeCodeCamp"))
print(count("Hello, World!"))
print(count("The quick brown fox jumps over the lazy dog."))

print(count("xyz"))
print(count("oua"))
print(count("!@#"))