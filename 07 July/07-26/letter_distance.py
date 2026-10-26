from functools import reduce

def letter_distance(str1, str2):

    ALPHABET_LENGTH = ord('z') - ord('a') + 1

    def calculate_sum(sum, letters):
        distance = abs(ord(letters[0]) - ord(letters[1]))

        return sum + min(distance, ALPHABET_LENGTH - distance)

    return reduce(calculate_sum, zip(str1, str2), 0)

# --- TEST SUITE ---

tests_text = r'''
1. letter_distance("abc", "bcd") should return 3.
2. letter_distance("abc", "xyz") should return 9.
3. letter_distance("encrypt", "decrypt") should return 10.
4. letter_distance("algorithm", "codeblock") should return 43.
5. letter_distance("lobster", "penguin") should return 47.
6. letter_distance("alligator", "crocodile") should return 55.
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