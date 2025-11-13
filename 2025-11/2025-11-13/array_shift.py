def shift_array(arr, n):
    n = n % len(arr)

    return arr[n:] + arr[:n]

print(shift_array([1, 2, 3], 1))
print(shift_array([1, 2, 3], -1))
print(shift_array(["alpha", "bravo", "charlie"], 5))
print(shift_array(["alpha", "bravo", "charlie"], -11))
print(shift_array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 15))

print(shift_array([4, 5, 6], 0))