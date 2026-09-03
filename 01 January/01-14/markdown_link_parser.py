def parse_link(markdown):
    dict_groups = re.match(r"\[(?P<text>.+)]\((?P<url>.+)\)", markdown)

    return f"<a href=\"{dict_groups['url']}\">{dict_groups['text']}</a>"

# --- TEST SUITE ---

tests_text = r'''
1. parse_link("[freeCodeCamp](https://freecodecamp.org/)") should return '<a href="https://freecodecamp.org/">freeCodeCamp</a>'.
2. parse_link("[Donate to our charity.](https://www.freecodecamp.org/donate/)") should return '<a href="https://www.freecodecamp.org/donate/">Donate to our charity.</a>'.
3. parse_link("[Contribute to our repository at https://github.com/freeCodeCamp/freeCodeCamp.](https://github.com/freeCodeCamp/freeCodeCamp/)") should return '<a href="https://github.com/freeCodeCamp/freeCodeCamp/">Contribute to our repository at https://github.com/freeCodeCamp/freeCodeCamp.</a>'.
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