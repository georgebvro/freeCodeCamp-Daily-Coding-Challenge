import re

def find_word(matrix, word):
    regex = re.compile(word)
    reversed_regex = re.compile(word[::-1])

    for i, row in enumerate(matrix):
        row_letters = "".join(row)
        search_result = regex.search(row_letters)
        if search_result:
            return [[i, search_result.span()[0]], [i, search_result.span()[1] - 1]]

        search_result = reversed_regex.search(row_letters)
        if search_result:
            return [[i, search_result.span()[1] - 1], [i, search_result.span()[0]]]

    for j in range(len(matrix[0])):
        column_letters = "".join([row[j] for row in matrix])
        search_result = regex.search(column_letters)
        if search_result:
            return [[search_result.span()[0], j], [search_result.span()[1] - 1, j]]

        search_result = reversed_regex.search(column_letters)
        if search_result:
            return [[search_result.span()[1] - 1, j], [search_result.span()[0], j]]


print(find_word([["a", "c", "t"], ["t", "a", "t"], ["c", "t", "c"]], "cat"))
print(find_word([["d", "o", "g"], ["o", "g", "d"], ["d", "g", "o"]], "dog"))
print(find_word([["h", "i", "s", "h"], ["i", "s", "f", "s"], ["f", "s", "i", "i"], ["s", "h", "i", "f"]], "fish"))
print(find_word([["f", "x", "o", "x"], ["o", "x", "o", "f"], ["f", "o", "f", "x"], ["f", "x", "x", "o"]], "fox"))

print(find_word([["f", "x", "o", "x"], ["x", "o", "f", "o"], ["f", "o", "f", "x"], ["f", "x", "x", "o"]], "fox"))
print(find_word([["x", "d", "o", "g"], ["x", "o", "g", "d"], ["x", "d", "g", "o"], ["x", "x", "x", "x"]], "dog"))
print(find_word([["x", "x", "x", "x"], ["x", "a", "c", "t"], ["x", "t", "a", "t"], ["x", "c", "t", "c"]], "cat"))