import math
from functools import reduce

def get_pizzas_to_order(hours_worked):
    HOURS_WORKED_PER_SLICE = 3
    MINIMUM_SLICES_PER_PERSON = 2
    SLICES_PER_PIZZA = 8

    def total_slice_count (total, hours):
        person_s_slice_count = math.ceil(hours / HOURS_WORKED_PER_SLICE)

        return total + (2 if person_s_slice_count < 2 else person_s_slice_count)

    return math.ceil(reduce(total_slice_count, hours_worked, 0) / 8)

# --- TEST SUITE ---

tests_text = r'''
1. get_pizzas_to_order([8, 8, 8]) should return 2.
2. get_pizzas_to_order([10, 9, 8, 2, 2, 6, 10]) should return 3.
3. get_pizzas_to_order([1, 2, 3, 4, 5]) should return 2.
4. get_pizzas_to_order([8, 8, 8, 8, 8, 8, 8, 8]) should return 3.
5. get_pizzas_to_order([9, 9, 6]) should return 1.
6. get_pizzas_to_order([10, 12, 16, 9, 8, 11, 15, 8, 0]) should return 5.
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