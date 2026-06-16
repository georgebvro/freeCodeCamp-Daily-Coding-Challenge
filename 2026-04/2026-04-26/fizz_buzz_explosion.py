def explode_fizzbuzz(target_z_count):
    START_STRING = "fizzbuzz"
    exploded_string = START_STRING
    stepCount = 0

    while len(re.findall("z", exploded_string)) < target_z_count:
        exploded_string = "".join([
            "fizzbuzz" if not (index_letter[0] + 1) % (3 * 5) 
            else "fizz" if not (index_letter[0] + 1) % 3 
            else "buzz" if not (index_letter[0] + 1) % 5 
            else index_letter[1] 
            for index_letter in enumerate(list(exploded_string))
        ])

        stepCount += 1

    return stepCount

# --- TEST SUITE ---

tests_text = r'''
1. explode_fizzbuzz(9) should return 1.
2. explode_fizzbuzz(15) should return 2.
3. explode_fizzbuzz(51) should return 3.
4. explode_fizzbuzz(52) should return 4.
5. explode_fizzbuzz(359) should return 5.
6. explode_fizzbuzz(789) should return 6.
7. explode_fizzbuzz(54482) should return 11.
8. explode_fizzbuzz(1000000) should return 14.
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