def to_binary(decimal):
    if decimal == 0:
        return ""

    return to_binary(decimal // 2) + str(decimal % 2)

print(to_binary(5))
print(to_binary(12))
print(to_binary(50))
print(to_binary(99))