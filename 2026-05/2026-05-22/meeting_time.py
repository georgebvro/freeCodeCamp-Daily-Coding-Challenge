from functools import reduce

def get_meeting_time(availability):
    result = reduce(
        lambda x, y: x.intersection(y), 
        [set(
            reduce(
                lambda x, y: x + y, 
                [list(range(interval[0], interval[1])) for interval in person]
            )
        ) for person in availability]
    )

    return min(result) if len(result) else "None"

# --- TEST SUITE ---

tests_text = r'''
1. get_meeting_time([[[10, 12], [15, 16]], [[11, 14], [15, 16]]]) should return 11.
2. get_meeting_time([[[9, 10], [12, 15]], [[10, 11], [13, 14]], [[9, 11], [10, 14]]]) should return 13.
3. get_meeting_time([[[7, 8], [9, 11], [12, 14], [15, 16]], [[8, 11], [12, 13], [14, 15]]]) should return 9.
4. get_meeting_time([[[7, 8], [10, 12], [13, 15]], [[8, 11], [12, 13], [14, 15]], [[6, 7], [8, 9], [12, 13]]]) should return "None".
5. get_meeting_time([[[1, 3], [4, 6], [8, 10], [20, 23]], [[15, 16], [17, 18], [19, 22], [23, 24]], [[14, 16], [17, 23]], [[2, 4], [5, 6], [18, 19], [21, 22], [23, 24]]]) should return 21.
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