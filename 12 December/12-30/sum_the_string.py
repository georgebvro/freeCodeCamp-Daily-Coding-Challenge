def string_sum(s):

    return sum([int(number) for number in re.findall("(\d+)", s)])

# --- TEST SUITE ---

tests_text = r'''
1. string_sum("3apples2bananas") should return 5.
2. string_sum("10cats5dogs2birds") should return 17.
3. string_sum("125344") should return 125344.
4. string_sum("a1b20c300") should return 321.
5. string_sum("a12b34c56d78e90f123g456h789i0j1k2l3m4n5") should return 1653.
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