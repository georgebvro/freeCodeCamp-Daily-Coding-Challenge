def check_strength(password):
    import re
    strength = 0

    if len(password) >= 8:
        strength += 1

    if re.search(r"[a-z]", password) and re.search(r"[A-Z]", password):
        strength += 1

    if re.search(r"\d", password):
        strength += 1

    if re.search(r"[!@#$%^&*]", password):
        strength += 1

    return "weak" if strength < 2 else "medium" if strength < 4 else "strong"

print(check_strength("123456"))
print(check_strength("pass!!!"))
print(check_strength("Qwerty"))
print(check_strength("PASSWORD"))
print(check_strength("PASSWORD!"))
print(check_strength("PassWord%^!"))
print(check_strength("qwerty12345"))
print(check_strength("PASSWORD!"))
print(check_strength("PASSWORD!"))
print(check_strength("S3cur3P@ssw0rd"))
print(check_strength("C0d3&Fun!"))