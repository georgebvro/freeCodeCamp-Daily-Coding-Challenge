from collections import Counter

def purge_most_frequent(arr):
    counts = dict(Counter(arr))
    max_count = 0

    for element in counts:
        if counts[element] > max_count:
            elements_to_remove_set = {element}
            max_count = counts[element]
        elif counts[element] == max_count:
            elements_to_remove_set.add(element)

    return [element for element in arr if element not in elements_to_remove_set]

print(purge_most_frequent([1, 2, 2, 3]))
print(purge_most_frequent(["a", "b", "d", "b", "c", "d", "c", "d", "c", "d"]))
print(purge_most_frequent(["red", "blue", "green", "red", "blue", "green", "blue"]))
print(purge_most_frequent([5, 5, 5, 5]))

print(purge_most_frequent([1, 1, 2, 2, 3]))

# --- TEST SUITE ---

tests_text = '''
1. purge_most_frequent([1, 2, 2, 3]) should return [1, 3].
2. purge_most_frequent(["a", "b", "d", "b", "c", "d", "c", "d", "c", "d"]) should return ["a", "b", "b", "c", "c", "c"].
3. purge_most_frequent(["red", "blue", "green", "red", "blue", "green", "blue"]) should return ["red", "green", "red", "green"].
4. purge_most_frequent([5, 5, 5, 5]) should return [].
'''

import re

tests_regex = re.compile(r"(?P<number>\d+)\.\s(?P<function_call>.+) should return (?P<output>.+?)\.?$", re.MULTILINE)
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