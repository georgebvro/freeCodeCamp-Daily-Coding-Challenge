def convert_words(s):

    # Solution using map()
    # return " ".join(map(str, map(len, s.split())))

    # Solution using list comprehension
    return " ".join([str(len(word)) for word in s.split()])

# --- TEST SUITE ---

tests_text = r'''
1. convert_words("hello world") should return "5 5".
2. convert_words("Thanks and happy coding") should return "6 3 5 6".
3. convert_words("The quick brown fox jumps over the lazy dog") should return "3 5 5 3 5 4 3 4 3".
4. convert_words("Lorem ipsum dolor sit amet consectetur adipiscing elit donec ut ligula vehicula iaculis orci vel semper nisl") should return "5 5 5 3 4 11 10 4 5 2 6 8 7 4 3 6 4".
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