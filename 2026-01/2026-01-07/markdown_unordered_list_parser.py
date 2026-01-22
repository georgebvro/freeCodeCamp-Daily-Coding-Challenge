import re

def parse_unordered_list(markdown):
    regex = re.compile(r"[*-][ \t]+(?P<list_item_text>.*?)(\n|$)")

    return "<ul>" \
        + "".join([f"<li>{item.groupdict()['list_item_text']}</li>" for item in re.finditer(regex, markdown)]) \
        + "</ul>"

print(parse_unordered_list("- Item A\n- Item B"))
print(parse_unordered_list("-  JavaScript\n-  Python"))
print(parse_unordered_list("- 2 C Flour\n- 1/2 C Sugar\n- 1 Tsp Vanilla"))
print(parse_unordered_list("- A-1\n- A-2\n- B-1"))

# --- TEST SUITE ---

tests_text = r'''
1. parse_unordered_list("- Item A\n- Item B") should return "<ul><li>Item A</li><li>Item B</li></ul>".
2. parse_unordered_list("-  JavaScript\n-  Python") should return "<ul><li>JavaScript</li><li>Python</li></ul>".
3. parse_unordered_list("- 2 C Flour\n- 1/2 C Sugar\n- 1 Tsp Vanilla") should return "<ul><li>2 C Flour</li><li>1/2 C Sugar</li><li>1 Tsp Vanilla</li></ul>".
4. parse_unordered_list("- A-1\n- A-2\n- B-1") should return "<ul><li>A-1</li><li>A-2</li><li>B-1</li></ul>".
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