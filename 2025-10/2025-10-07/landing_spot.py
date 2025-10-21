def find_landing_spot(matrix):
    safest_landing_spot = None
    smallest_danger = None

    for i, _ in enumerate(matrix):
        for j, _ in enumerate(matrix[i]):
            if matrix[i][j] == 0:
                current_danger = 0

                if i - 1 >= 0:
                    current_danger += matrix[i - 1][j]

                if i + 1 <= len(matrix) - 1:
                    current_danger += matrix[i + 1][j]

                if j - 1 >= 0:
                    current_danger += matrix[i][j - 1]

                if j + 1 <= len(matrix[i]) - 1:
                    current_danger += matrix[i][j + 1]

                if smallest_danger == None or current_danger < smallest_danger:
                    smallest_danger = current_danger
                    safest_landing_spot = [i, j]

    return safest_landing_spot

print(find_landing_spot([[1, 0], [2, 0]]))
print(find_landing_spot([[9, 0, 3], [7, 0, 4], [8, 0, 5]]))
print(find_landing_spot([[1, 2, 1], [0, 0, 2], [3, 0, 0]]))
print(find_landing_spot([[9, 6, 0, 8], [7, 1, 1, 0], [3, 0, 3, 9], [8, 6, 0, 9]]))