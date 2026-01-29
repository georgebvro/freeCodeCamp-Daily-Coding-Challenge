def parse_inline_code(markdown):

    return re.sub("`(.+?)`", r"<code>\1</code>", markdown)

# --- TEST SUITE ---

tests_text = r'''
1. parse_inline_code("Use `let` to declare the variable.") should return "Use <code>let</code> to declare the variable.".
2. parse_inline_code("Use `let` or `const` to declare a variable.") should return "Use <code>let</code> or <code>const</code> to declare a variable.".
3. parse_inline_code("Run `npm install` then `npm start`.") should return "Run <code>npm install</code> then <code>npm start</code>.".
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