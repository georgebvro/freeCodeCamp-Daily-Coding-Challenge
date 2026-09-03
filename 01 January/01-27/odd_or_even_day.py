from datetime import datetime

def odd_or_even_day(timestamp):
    day_of_the_month = datetime.utcfromtimestamp(timestamp / 1000).day

    return "odd" if day_of_the_month % 2 else "even"

# --- TEST SUITE ---

tests_text = r'''
1. odd_or_even_day(1769472000000) should return "odd".
2. odd_or_even_day(1769444440000) should return "even".
3. odd_or_even_day(6739456780000) should return "odd".
4. odd_or_even_day(1) should return "odd".
5. odd_or_even_day(86400000) should return "even".
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