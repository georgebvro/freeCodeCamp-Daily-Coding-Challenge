def get_longest_substring(s):
    longest_substring = ""

    for substring_length in range(1, len(s)):

        for index1 in range(len(s) - substring_length):
            substring1 = s[index1 : index1 + substring_length]

            for index2 in range(index1 + 1, len(s) - substring_length + 1):
                substring2 = s[index2 : index2 + substring_length]

                if substring1 == substring2 and len(substring1) > len(longest_substring):
                    longest_substring = substring1
                    break

    return longest_substring

# --- TEST SUITE ---

tests_text = r'''
1. get_longest_substring("abracadabra") should return "abra".
2. get_longest_substring("hello world hello") should return "hello".
3. get_longest_substring("mississippi") should return "issi".
4. get_longest_substring("ha ha ha ha ha ha ha") should return "ha ha ha ha ha ha".
5. get_longest_substring("the quick brown fox jumped over the lazy dog that the quick brown fox jumped over") should return "the quick brown fox jumped over".
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