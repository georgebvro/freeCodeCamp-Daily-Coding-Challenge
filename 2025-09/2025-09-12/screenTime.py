from functools import reduce

def too_much_screen_time(hours):

    if any(day >= 10 for day in hours):
        return True

    for i, day in enumerate(hours[:-3]):
        if (sum(hours[i:i + 3])) / 3 >= 8:
            return True

    if reduce(lambda x, y: x + y, hours) / len(hours) >= 6:
        return True

    return False

print(too_much_screen_time([1, 2, 3, 4, 5, 6, 7]))
print(too_much_screen_time([7, 8, 8, 4, 2, 2, 3]))
print(too_much_screen_time([5, 6, 6, 6, 6, 6, 6]))
print(too_much_screen_time([1, 2, 3, 11, 1, 3, 4]))
print(too_much_screen_time([1, 2, 3, 10, 2, 1, 0]))
print(too_much_screen_time([3, 3, 5, 8, 8, 9, 4]))
print(too_much_screen_time([3, 9, 4, 8, 5, 7, 6]))