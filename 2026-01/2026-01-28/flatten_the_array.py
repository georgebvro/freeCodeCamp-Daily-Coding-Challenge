def flatten(arr):

    return list(flatten_generator(arr))

def flatten_generator(arr):
    for item in arr:
        if hasattr(item, '__iter__') and not isinstance(item, (str, bytes)):
            for sub_item in flatten_generator(item):
                yield sub_item
        else:
            yield item

# --- TEST SUITE ---

tests_text = r'''
1. flatten([1, [2, 3], 4]) should return [1, 2, 3, 4].
2. flatten([5, [4, [3, 2]], 1]) should return [5, 4, 3, 2, 1].
3. flatten(["A", [[[["B"]]]], "C"]) should return ["A", "B", "C"].
4. flatten([["L", "M", "N"], ["O", ["P", "Q", ["R", ["S", ["T", "U"]]]]], "V", ["W", ["X", ["Y", ["Z"]]]]]) should return ["L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"].
5. flatten([["red", ["blue", ["green", ["yellow", ["purple"]]]]], "orange", ["pink", ["brown"]]]) should return ["red","blue","green","yellow","purple","orange","pink","brown"].
'''

import re

tests_regex = re.compile(r"(?P<number>\d+)\.\s(?P<function_call>.+) should return (?P<output>.+?)\.?$", re.MULTILINE)
test_data = [item.groupdict() for item in re.finditer(tests_regex, tests_text)]

def run_tests(test_data):
    print("--------------------------")
    print("🧪 Starting Verification...")
    print("--------------------------")

    fail_count = 0

    for test in test_data:
        function_call_output = eval(test['function_call'])
        test_output = eval(test['output'])
        
        if function_call_output == test_output:
            print(f"{test['number']}.✅ PASS - Function Call:\n{test['function_call']}")
        else:
            print(f"{test['number']}.❌ FAIL - Function Call:\n{test['function_call']}\nExpected:\n{test_output}\nGot:\n{function_call_output}")
            fail_count += 1

    print("----------------------------",
        f"\n⚠️ WARNING: {fail_count}/{len(test_data)} tests FAILED." if fail_count
        else "\n🎉 SUCCESS: All tests PASSED."
    )

run_tests(test_data)