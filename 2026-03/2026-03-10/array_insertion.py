def insert_into_array(arr, value, index):
    arr.insert(index, value)
    
    return arr

# --- TEST SUITE ---

tests_text = r'''
1. insert_into_array([2, 4, 8, 10], 6, 2) should return [2, 4, 6, 8, 10].
2. insert_into_array(["the", "quick", "fox"], "brown", 2) should return ["the", "quick", "brown", "fox"].
3. insert_into_array([], 0, 0) should return [0].
4. insert_into_array([0, 1, 1, 2, 3, 8, 13], 5, 5) should return [0, 1, 1, 2, 3, 5, 8, 13].
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