def fibonacci_sequence(start_sequence, length):
    fibonacci = start_sequence[:]

    if len(fibonacci) >= length:
        return fibonacci[:length]

    fibonacci.append(fibonacci[-2] + fibonacci[-1])

    return fibonacci_sequence(fibonacci, length)

print(fibonacci_sequence([0, 1], 20))
print(fibonacci_sequence([21, 32], 1))
print(fibonacci_sequence([0, 1], 0))
print(fibonacci_sequence([10, 20], 2))
print(fibonacci_sequence([123456789, 987654321], 5))