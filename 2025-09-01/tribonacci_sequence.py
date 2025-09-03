def tribonacci_sequence(start_sequence, length):
    tribonacci = start_sequence

    while len(tribonacci) < length:
        tribonacci.append(sum(tribonacci[-3:]))

    return tribonacci[:length]

print(tribonacci_sequence([0, 0, 1], 20))
print(tribonacci_sequence([21, 32, 43], 1))
print(tribonacci_sequence([0, 0, 1], 0))
print(tribonacci_sequence([10, 20, 30], 2))
print(tribonacci_sequence([10, 20, 30], 3))
print(tribonacci_sequence([123, 456, 789], 8))