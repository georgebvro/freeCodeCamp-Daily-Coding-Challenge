def get_lowercase_words(s):
    # Solution using filter()
    #return " ".join(list(filter(lambda word: word == word.lower(), s.split(" "))))

    # Solution using list comprehension
    return " ".join([word for word in s.split(" ") if word == word.lower()])

# --- TEST SUITE ---

tests_text = r'''
1. get_lowercase_words("hello GOOD world") should return "hello world".
2. get_lowercase_words("these are all lowercase") should return "these are all lowercase".
3. get_lowercase_words("less is NoT more") should return "less is more".
4. get_lowercase_words("DonT eat pizza every OTHER day") should return "eat pizza every day".
5. get_lowercase_words("the Super quick AND snEaky brown fox Leapt anD jumped over aNd AROUND the lazy SloW dog") should return "the quick brown fox jumped over the lazy dog".
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