def get_lucky_number(name):
    groups_dict = re.match("(?P<first_name>.+) (?P<last_name>.+)", name).groupdict()
    first_name = groups_dict['first_name']
    last_name = groups_dict['last_name']
    first_name_vowel_count = len(list(re.finditer("[aeiou]", first_name, re.IGNORECASE)))
    last_name_vowel_count = len(list(re.finditer("[aeiou]", last_name, re.IGNORECASE)))
    first_name_consonant_count = len(list(re.finditer("[b-df-hj-np-tv-z]", first_name, re.IGNORECASE)))
    last_name_consonant_count = len(list(re.finditer("[b-df-hj-np-tv-z]", last_name, re.IGNORECASE)))
    smaller_vowel_count = min(first_name_vowel_count, last_name_vowel_count)
    smaller_consonant_count = min(first_name_consonant_count, last_name_consonant_count)
    smaller_name_length = min(len(first_name), len(last_name))
    larger_vowel_count = max(first_name_vowel_count, last_name_vowel_count)
    larger_consonant_count = max(first_name_consonant_count, last_name_consonant_count)
    larger_name_length = max(len(first_name), len(last_name))

    return larger_vowel_count * larger_consonant_count * larger_name_length \
        - smaller_vowel_count * smaller_consonant_count * smaller_name_length \
        or 13

# --- TEST SUITE ---

tests_text = r'''
1. get_lucky_number("John Doe") should return 21.
2. get_lucky_number("Olivia Lewis") should return 52.
3. get_lucky_number("James Wilson") should return 18.
4. get_lucky_number("Elizabeth Hernandez") should return 81.
5. get_lucky_number("Mike Walker") should return 32.
6. get_lucky_number("Chloe Perez") should return 13.
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