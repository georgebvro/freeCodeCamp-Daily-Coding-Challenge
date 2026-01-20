def parse_italics(markdown):

    return re.sub(r"(\*|_)(?!\s)(.+?)(?<!\s)\1", r"<i>\2</i>", markdown)

# --- TEST SUITE ---

tests_text = r'''
1. parse_italics("*This is italic*") should return "<i>This is italic</i>".
2. parse_italics("_This is also italic_") should return "<i>This is also italic</i>".
3. parse_italics("*This is not italic *") should return "*This is not italic *".
4. parse_italics("_ This is also not italic_") should return "_ This is also not italic_".
5. parse_italics("The *quick* brown fox _jumps_ over the *lazy* dog.") should return "The <i>quick</i> brown fox <i>jumps</i> over the <i>lazy</i> dog.".
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