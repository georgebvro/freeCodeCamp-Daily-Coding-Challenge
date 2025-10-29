def dive(map, coordinates):
    if map[coordinates[0]][coordinates[1]] == "-":
        return "Empty"

    updated_map = map[:]
    updated_map[coordinates[0]][coordinates[1]] = "X"

    for row in updated_map:
        for location in row:
            if location == "O":
                return "Found"

    return "Recovered"

print(dive([[ "-", "X"], [ "-", "X"], [ "-", "O"]], [2, 1]))
print(dive([[ "-", "X"], [ "-", "X"], [ "-", "O"]], [2, 0]))
print(dive([[ "-", "X"], [ "-", "O"], [ "-", "O"]], [1, 1]))
print(dive([[ "-", "-", "-"], [ "X", "O", "X"], [ "-", "-", "-"]], [1, 2]))
print(dive([[ "-", "-", "-"], [ "-", "-", "-"], [ "O", "X", "X"]], [2, 0]))
print(dive([[ "-", "-", "-"], [ "-", "-", "-"], [ "O", "X", "X"]], [1, 2]))