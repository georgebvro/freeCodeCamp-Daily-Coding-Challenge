def chunk_array(arr, size):
    chunks = []

    for i in range(0, len(arr), size):
        chunks.append(arr[i:i + size])

    return chunks

# --- TEST SUITE ---

tests_text = r'''
1. chunk_array([1, 2, 3, 4, 5, 6], 3) should return [[1, 2, 3], [4, 5, 6]].
2. chunk_array([1, "two", 3, "four", 5, "six", 7, "eight"], 2) should return [[1, "two"], [3, "four"], [5, "six"], [7, "eight"]].
3. chunk_array([1, 2, 3, 4, 5], 3) should return [[1, 2, 3], [4, 5]].
4. chunk_array(["a", "b", "c", "d", "e"], 1) should return [["a"], ["b"], ["c"], ["d"], ["e"]].
5. chunk_array([1, 2, 3], 5) should return [[1, 2, 3]].
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