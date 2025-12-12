import re

def parse_bold(markdown):

    return re.sub(r"(\*\*|__)([^ ].*?[^ ])\1", r"<b>\2</b>", markdown)

print(parse_bold("**This is bold**"))
print(parse_bold("__This is also bold__"))
print(parse_bold("**This is not bold **"))
print(parse_bold("__ This is also not bold__"))
print(parse_bold("The **quick** brown fox __jumps__ over the **lazy** dog."))

# --- TEST SUITE ---

tests_text = '''
1. parse_bold("**This is bold**") should return "<b>This is bold</b>".
2. parse_bold("__This is also bold__") should return "<b>This is also bold</b>".
3. parse_bold("**This is not bold **") should return "**This is not bold **".
4. parse_bold("__ This is also not bold__") should return "__ This is also not bold__".
5. parse_bold("The **quick** brown fox __jumps__ over the **lazy** dog.") should return "The <b>quick</b> brown fox <b>jumps</b> over the <b>lazy</b> dog.".
'''

import re

tests_regex = re.compile(r"(?P<number>\d+)\.\s(?P<function_call>.+) should return (?P<output>.+?)\.?$", re.MULTILINE)
test_data = [item.groupdict() for item in re.finditer(tests_regex, tests_text)]

def run_tests(test_data):
    print("--------------------------")
    print("🧪 Starting Verification...")
    print("--------------------------")

    all_passed = True
    fail_count = 0

    for test in test_data:
        function_call_output = eval(test['function_call'])
        test_output = eval(test['output'])
        
        if function_call_output == test_output:
            print(f"{test['number']}.✅ PASS - Function Call:\n{test['function_call']}")
        else:
            print(f"{test['number']}.❌ FAIL - Function Call:\n{test['function_call']}\nExpected:\n{test_output}\nGot:\n{function_call_output}")
            all_passed = False
            fail_count += 1

    print("----------------------------");

    if (all_passed):
        print("🎉 SUCCESS: All tests PASSED.");
    else:
        print(f"⚠️ WARNING: {fail_count}/{len(test_data)} tests FAILED.");

run_tests(test_data)