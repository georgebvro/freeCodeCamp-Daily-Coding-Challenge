def second_largest(arr):

    return sorted(set(arr))[-2]

print(second_largest([1, 2, 3, 4]))
print(second_largest([20, 139, 94, 67, 31]))
print(second_largest([2, 3, 4, 6, 6]))
print(second_largest([10, -17, 55.5, 44, 91, 0]))
print(second_largest([1, 0, -1, 0, 1, 0, -1, 1, 0]))