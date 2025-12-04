def convert_list_item(markdown):
    match_result = re.match(r"^\s*\d+\.\s+(?P<list_item_text>.*)", markdown)
    
    return f"<li>{match_result.groupdict()['list_item_text']}</li>" if match_result else "Invalid format"

# --- TEST SUITE ---

tests_text = '''
Waiting:1. convert_list_item("1. My item") should return "<li>My item</li>".
Waiting:2. convert_list_item(" 1.  Another item") should return "<li>Another item</li>".
Waiting:3. convert_list_item("1 . invalid item") should return "Invalid format".
Waiting:4. convert_list_item("2. list item text") should return "<li>list item text</li>".
Waiting:5. convert_list_item(". invalid again") should return "Invalid format".
Waiting:6. convert_list_item("A. last invalid") should return "Invalid format".
'''

import re

tests_regex = re.compile(r"(?P<number>\d+)\.\s(?P<function_call>.+) should return (?P<output>.+)\.$", re.MULTILINE)
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