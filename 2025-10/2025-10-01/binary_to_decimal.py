def to_decimal(binary):
    decimal = 0

    for index, digit in enumerate(list(binary)):
        decimal += int(digit) * 2 ** (len(binary) - index - 1)

    return decimal

print(to_decimal("101"))
print(to_decimal("1010"))
print(to_decimal("10010"))
print(to_decimal("1010101"))