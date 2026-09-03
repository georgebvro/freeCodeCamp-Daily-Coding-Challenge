def kaprekar(n):
    count = 0

    while n != 6174:
        largest_number = int("".join(sorted(list(str(n)), reverse = True)))
        smallest_number = int(str(largest_number)[::-1])
        n = largest_number - smallest_number
        count += 1

    return count

# --- TEST SUITE ---

tests_text = r'''
1. kaprekar(1234) should return 3.
2. kaprekar(2025) should return 6.
3. kaprekar(7173) should return 4.
4. kaprekar(3164) should return 7.
5. kaprekar(8082) should return 2.
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