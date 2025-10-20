def find_target(arr, target):
    for i, _ in enumerate(arr):
        for j, _ in enumerate(arr):
            if arr[i] != arr[j] and arr[i] + arr[j] == target:
                return [i, j]

    return "Target not found"

print(find_target([2, 7, 11, 15], 9))
print(find_target([3, 2, 4, 5], 6))
print(find_target([1, 3, 5, 6, 7, 8], 15))
print(find_target([1, 3, 5, 7], 14))