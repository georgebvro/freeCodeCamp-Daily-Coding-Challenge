def sort_numbers(s):

    return sorted(map(int, s.split(",")))

# --- TEST SUITE ---

tests_text = r'''
1. sort_numbers("3,1,2") should return [1, 2, 3].
2. sort_numbers("5,3,8,1,9,2") should return [1, 2, 3, 5, 8, 9].
3. sort_numbers("12,61,49,80,19,50,77,38") should return [12, 19, 38, 49, 50, 61, 77, 80].
4. sort_numbers("0,6,-19,44,-2,7,0") should return [-19, -2, 0, 0, 6, 7, 44].
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