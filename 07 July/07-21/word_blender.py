def blend_words(word1, word2):

    return word1[0:len(word1) // 2] + word2[len(word2) // 2:]

# --- TEST SUITE ---

tests_text = r'''
1. blend_words("turtle", "toucan") should return "turcan".
2. blend_words("chipmunk", "flamingo") should return "chipingo".
3. blend_words("falcon", "pelican") should return "falican".
4. blend_words("hyena", "iguana") should return "hyana".
5. blend_words("scorpion", "gorilla") should return "scorilla".
6. blend_words("platypus", "wolverine") should return "platerine".
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