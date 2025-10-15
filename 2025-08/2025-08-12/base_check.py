def is_valid_number(n, base):
    import re
    CODE_OF_UPPERCASE_A = ord('A')
    BASE_THRESHOLD = 11; #value of base beyond which letters are needed to represent digits

    invalid_digits = r"[^0-" + \
        (f"{base - 1}]" if base <= 10
        else f"9A-{chr(base - BASE_THRESHOLD + CODE_OF_UPPERCASE_A)}]")

    regex = re.compile(invalid_digits, re.IGNORECASE)
    
    return not regex.search(n)

print(is_valid_number("10101", 2))
print(is_valid_number("10201", 2))
print(is_valid_number("76543210", 8))
print(is_valid_number("9876543210", 8))
print(is_valid_number("9876543210", 10))
print(is_valid_number("ABC", 10))
print(is_valid_number("ABC", 16))
print(is_valid_number("Z", 36))
print(is_valid_number("ABC", 20))
print(is_valid_number("4B4BA9", 16))
print(is_valid_number("5G3F8F", 16))
print(is_valid_number("5G3F8F", 17))
print(is_valid_number("abc", 10))
print(is_valid_number("abc", 16))
print(is_valid_number("AbC", 16))
print(is_valid_number("z", 36))