def largest_number(s):

    # Solution using list comprehension
    # return max(float(number) for number in re.split("[,!?:;]", s))
    
    # Solution using map()
    return max(map(float, re.split("[,!?:;]", s)))

# --- TEST SUITE ---

tests_text = r'''
1. largest_number("1,2") should return 2.
2. largest_number("4;15:60,26?52!0") should return 60.
3. largest_number("-402,-1032!-569:-947;-633?-800!-1012;-402,-723?-8102!-3011") should return -402.
4. largest_number("12;-50,99.9,49.1!-10.1?88?16") should return 99.9.
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