def rotate(matrix):
    rotated_matrix = []
    number_of_rows = len(matrix)
    number_of_columns = len(matrix[0])

    for j in range(number_of_columns):
        rotated_matrix.append([])

        for i in range(number_of_rows - 1, -1, -1):
            print(f'Processing matrix[{i}][{j}]: {matrix[i][j]}')
            rotated_matrix[j].append(matrix[i][j])

    return rotated_matrix

print(rotate([[1]]))
print(rotate([[1, 2], [3, 4]]))
print(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
print(rotate([[0, 1, 0], [1, 0, 1], [0, 0, 0]]))

print(rotate([[1, 2, 3], [4, 5, 6]]))
print(rotate([[1, 2], [3, 4], [5, 6]]))
