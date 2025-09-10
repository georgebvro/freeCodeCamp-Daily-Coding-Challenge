def array_diff(arr1, arr2):

    return sorted( \
    [element1 for element1 in arr1 if not any([element1 in arr2])] + \
    [element2 for element2 in arr2 if not any([element2 in arr1])] \
    )

print(array_diff(["apple", "banana"], ["apple", "banana", "cherry"]))
print(array_diff(["apple", "banana", "cherry"], ["apple", "banana"]))
print(array_diff(["one", "two", "three", "four", "six"], ["one", "three", "eight"]))
print(array_diff(["two", "four", "five", "eight"], ["one", "two", "three", "four", "seven", "eight"]))
print(array_diff(["I like freeCodeCamp"], ["I like rocks"]))