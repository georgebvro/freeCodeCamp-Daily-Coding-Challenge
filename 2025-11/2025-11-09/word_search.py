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

# --- TEST SUITE ---

tests_text = '''
1. find_word([["a", "c", "t"], ["t", "a", "t"], ["c", "t", "c"]], "cat") should return [[0, 1], [2, 1]].
2. find_word([["d", "o", "g"], ["o", "g", "d"], ["d", "g", "o"]], "dog") should return [[0, 0], [0, 2]].
3. find_word([["h", "i", "s", "h"], ["i", "s", "f", "s"], ["f", "s", "i", "i"], ["s", "h", "i", "f"]], "fish") should return [[3, 3], [0, 3]].
4. find_word([["f", "x", "o", "x"], ["o", "x", "o", "f"], ["f", "o", "f", "x"], ["f", "x", "x", "o"]], "fox") should return [[1, 3], [1, 1]].
'''

import re

tests_regex = re.compile(r"(?P<number>\d+)\.\s(?P<function_call>.+) should return (?P<output>.+)\.$", re.MULTILINE)
test_data = [item.groupdict() for item in re.finditer(tests_regex, tests_text)]

def run_tests(test_data):
    print("--------------------------")
    print("🧪 Starting Verification...")
    print("--------------------------")

    all_passed = True
    fail_count = 0

    for test in test_data:
        function_call_output = eval(test['function_call'])
        test_output = eval(test['output'])
        
        if function_call_output == test_output:
            print(f"{test['number']}.✅ PASS - Function Call:\n{test['function_call']}")
        else:
            print(f"{test['number']}.❌ FAIL - Function Call:\n{test['function_call']}\nExpected:\n{test_output}\nGot:\n{function_call_output}")
            all_passed = False
            fail_count += 1

    print("----------------------------");

    if (all_passed):
        print("🎉 SUCCESS: All tests PASSED.");
    else:
        print(f"⚠️ WARNING: {fail_count}/{len(test_data)} tests FAILED.");

run_tests(test_data)