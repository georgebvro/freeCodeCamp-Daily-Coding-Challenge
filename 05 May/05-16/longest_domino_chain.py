def get_longest_chain(dominoes):
    longest_chain = []

    def backtrack(current_chain, pool_of_remaining_tiles):
        print(current_chain, "-", pool_of_remaining_tiles)

        def add_tile_and_search_through_the_rest(tile, flip, pool_of_remaining_tiles):
            nonlocal longest_chain
            
            tile_to_add = tile[::-1] if flip else tile
            current_chain.append(tile_to_add)

            backtrack(current_chain, pool_of_remaining_tiles)

            if len(current_chain) > len(longest_chain):
                longest_chain = current_chain[:]
                print("Longest chain at this time:", longest_chain)

            del current_chain[-1]

        for i, tile in enumerate(pool_of_remaining_tiles):
            if current_chain[-1][1] == tile[0]:
                add_tile_and_search_through_the_rest(tile, False, [tile_to_keep for j, tile_to_keep in enumerate(pool_of_remaining_tiles) if j != i])
            elif current_chain[-1][1] == tile[1]:
                add_tile_and_search_through_the_rest(tile, True, [tile_to_keep for j, tile_to_keep in enumerate(pool_of_remaining_tiles) if j != i])

    for i, starting_tile in enumerate(dominoes):
        print("Starting tile index:", i)

        current_chain = [starting_tile]
        pool_of_remaining_tiles = [tile_to_keep for j, tile_to_keep in enumerate(dominoes) if j != i]
        backtrack(current_chain, pool_of_remaining_tiles)

        if starting_tile[0] != starting_tile[1]:
            current_chain = [starting_tile[::-1]]
            backtrack(current_chain, pool_of_remaining_tiles)

    return longest_chain

# --- TEST SUITE ---

tests_text = r'''
1. get_longest_chain([[1, 2], [4, 5], [2, 3]]) should return [[1, 2], [2, 3]].
2. get_longest_chain([[2, 1], [4, 3], [5, 3]]) should return [[4, 3], [3, 5]].
3. get_longest_chain([[1, 2], [3, 4], [2, 3], [4, 0]]) should return [[1, 2], [2, 3], [3, 4], [4, 0]].
4. get_longest_chain([[6, 6], [6, 1], [1, 1], [0, 3], [2, 3], [4, 1], [5, 6]]) should return [[4, 1], [1, 1], [1, 6], [6, 6], [6, 5]].
5. get_longest_chain([[0, 4], [3, 3], [0, 3], [5, 6], [4, 5], [4, 2], [5, 5], [1, 2], [4, 4]]) should return [[3, 3], [3, 0], [0, 4], [4, 4], [4, 5], [5, 5], [5, 6]].
'''

import re

tests_regex = re.compile(r"(?P<number>\d+)\.\s(?P<function_call>.+) should return (?P<output>.+?)\.?$", re.MULTILINE)
test_data = [item.groupdict() for item in re.finditer(tests_regex, tests_text)]

def run_tests(test_data):
    print("——————————————————————————",
        "\n🧪 Starting Verification...",
        "\n——————————————————————————")

    fail_count = 0

    for test in test_data:
        function_call_output = eval(test['function_call'])
        test_output = eval(test['output'])
        
        if function_call_output == test_output:
            print(f"{test['number']}.✅ PASS - Function Call:\n{test['function_call']}")
        else:
            print(f"{test['number']}.❌ FAIL - Function Call:\n{test['function_call']}\nExpected:\n{test_output}\nGot:\n{function_call_output}")
            fail_count += 1

        print("————————————————————————————")

    print(
        f"⚠️ WARNING: {fail_count}/{len(test_data)} tests FAILED." if fail_count
        else "🎉 SUCCESS: All tests PASSED."
    )

run_tests(test_data)