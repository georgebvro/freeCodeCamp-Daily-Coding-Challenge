def count_rectangles(width, height):

    return sum_up_to_n(width) * sum_up_to_n(height)

def sum_up_to_n(n):
    return 1 if n == 1 else n + sum_up_to_n(n - 1)

print(count_rectangles(1, 3))
print(count_rectangles(3, 2))
print(count_rectangles(1, 2))
print(count_rectangles(5, 4))
print(count_rectangles(11, 19))

print(count_rectangles(2, 2))
print(count_rectangles(1, 1))
print(count_rectangles(3, 4))