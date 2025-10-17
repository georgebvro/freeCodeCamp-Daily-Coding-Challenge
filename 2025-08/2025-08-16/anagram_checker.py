def are_anagrams(str1, str2):
    import re

    regex1 = "[^" + "".join(set(re.compile(r"[^\s]").findall(str1.lower()))) + "]"
    regex2 = "[^" + "".join(set(re.compile(r"[^\s]").findall(str2.lower()))) + "]"

    return len(str1) == len(str2) \
        and not re.compile(regex1, re.I).search(str2.replace(" ", "")) \
        and not re.compile(regex2, re.I).search(str1.replace(" ", ""))

print(are_anagrams("listen", "silent"))
print(are_anagrams("School master", "The classroom"))
print(are_anagrams("A gentleman", "Elegant man"))
print(are_anagrams("Hello", "World"))
print(are_anagrams("apple", "banana"))
print(are_anagrams("cat", "dog"))

print(are_anagrams("abc", "abb"))
print(are_anagrams("abc", "abbc"))