def parse_blockquote(markdown):
    group_dict = re.match("^ *> +(?P<text>.+)$", markdown).groupdict()
    
    return f"<blockquote>{group_dict['text']}</blockquote>"

# --- TEST SUITE ---

tests_text = '''
1. parse_blockquote("> This is a quote") should return "<blockquote>This is a quote</blockquote>".
2. parse_blockquote(" > This is also a quote") should return "<blockquote>This is also a quote</blockquote>".
3. parse_blockquote("  >    So  Is  This") should return "<blockquote>So  Is  This</blockquote>".
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