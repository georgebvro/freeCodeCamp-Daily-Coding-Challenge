def sequence(n):
    if n == 1:
        return "1"

    return f"{sequence(n - 1)}{str(n)}"

print(sequence(5))
print(sequence(10))
print(sequence(1))
print(sequence(27))