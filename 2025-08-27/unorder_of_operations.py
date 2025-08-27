def evaluate(numbers, operators):
    result = numbers[0]

    for i in range(1, len(numbers)):
        operand = numbers[i]
        operator = operators[(i - 1) % len(operators)]
        result = eval(str(result) + operator + str(operand))

    return result

print(evaluate([5, 6, 7, 8, 9], ['+', '-']))
print(evaluate([17, 61, 40, 24, 38, 14], ['+', '%']))
print(evaluate([20, 2, 4, 24, 12, 3], ['*', '/']))
print(evaluate([11, 4, 10, 17, 2], ['*', '*', '%']))
print(evaluate([33, 11, 29, 13], ['/', '-']))
print(evaluate([1, 2], ['+']))
print(evaluate([2], ['%']))
print(evaluate([1, 2, 3], ['-']))