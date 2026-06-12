def find_sum(arr, target):
    MINIMUM_SUBSET_LENGTH = 2

    def backtrack_dfs(start_index, current_subset, current_sum):
        print(start_index, current_subset, current_sum)

        if len(current_subset) >= MINIMUM_SUBSET_LENGTH and current_sum == target:
            return current_subset

        for i in range(start_index, len(arr)):
            current_subset.append(arr[i])

            result = backtrack_dfs(i + 1, current_subset, current_sum + arr[i])

            if result is not None:
                return result

            current_subset.pop()

        return None

    final_result = backtrack_dfs(0, [], 0)

    return final_result if final_result is not None else "Sum not found"

# --- TEST SUITE ---

tests_text = r'''
1. find_sum([1, 3, 5, 7], 6) should return [1, 5].
2. find_sum([1, 2, 3, 4, 5], 5) should return [1, 4].
3. find_sum([1, 2, 3, 4, 5], 6) should return [1, 2, 3].
4. find_sum([-1, -2, 3, 4], 1) should return [-1, -2, 4].
5. find_sum([3, 1, 4, 1, 5, 9, 2, 6], 10) should return [3, 1, 4, 2].
6. find_sum([1, 2, 3, 4, 5, 6, 7, 8, 9], 20) should return [1, 2, 3, 5, 9].
7. find_sum([7, 9, 4, 2, 5], 10) should return "Sum not found".
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