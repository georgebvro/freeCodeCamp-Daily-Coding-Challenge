def digits_or_letters(s):
    import re
    digits = 0
    letters = 0

    for char in s:
        if re.match(r"[0-9]", char):
            digits += 1

        if re.match(r"[a-zA-Z]", char):
            letters += 1

    return "digits" if digits > letters \
        else "letters" if digits < letters \
        else "tie"

print(digits_or_letters("abc123"))
print(digits_or_letters("a1b2c3d"))
print(digits_or_letters("1a2b3c4"))
print(digits_or_letters("abc123!@#DEF"))
print(digits_or_letters("H3110 W0R1D"))
print(digits_or_letters("P455W0RD"))