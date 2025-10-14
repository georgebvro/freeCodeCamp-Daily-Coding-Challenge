def find_duplicates(arr):
    duplicates = []

    for each_value in arr:
        if len(list(filter(lambda filtered_value: filtered_value == each_value, arr))) >= 2:
            duplicates.append(each_value)
    
    return list(dict.fromkeys(sorted(duplicates)))

print(find_duplicates([1, 2, 3, 4, 5]))
print(find_duplicates([1, 2, 3, 4, 1, 2]))
print(find_duplicates([2, 34, 0, 1, -6, 23, 5, 3, 2, 5, 67, -6, 23, 2, 43, 2, 12, 0, 2, 4, 4]))
print(find_duplicates([0, 0]))