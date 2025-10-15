def is_balanced(s):
    import re, math
    regex = re.compile(r"[aeiou]", re.IGNORECASE)

    first_half = s[0 : math.floor(len(s) / 2)]
    second_half = s[math.ceil(len(s) / 2) : ]

    return len(regex.findall(first_half)) == len(regex.findall(second_half))

print(is_balanced("racecar"))
print(is_balanced("Lorem Ipsum"))
print(is_balanced("Kitty Ipsum"))
print(is_balanced("string"))
print(is_balanced(" "))
print(is_balanced("abcdefghijklmnopqrstuvwxyz"))
print(is_balanced("123A#b!E&*456-o.U"))

print(is_balanced("a"))