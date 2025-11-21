import re

def convert(heading):
    match_result = re.match(" *(?P<heading_level>#{1,6}) +(?P<heading_text>.+)", heading)
    
    if(not match_result):
        return "Invalid format"

    heading_level, heading_text = match_result.groups()

    return f"<h{len(heading_level)}>{heading_text}</h{len(heading_level)}>"

print(convert("# My level 1 heading"))
print(convert("My heading"))
print(convert("##### My level 5 heading"))
print(convert("#My heading"))
print(convert("  ###  My level 3 heading"))
print(convert("####### My level 7 heading"))
print(convert("## My #2 heading"))

tests_text = '''
1. convert("# My level 1 heading") should return "<h1>My level 1 heading</h1>".
2. convert("My heading") should return "Invalid format".
3. convert("##### My level 5 heading") should return "<h5>My level 5 heading</h5>".
4. convert("#My heading") should return "Invalid format".
5. convert("  ###  My level 3 heading") should return "<h3>My level 3 heading</h3>".
6. convert("####### My level 7 heading") should return "Invalid format".
7. convert("## My #2 heading") should return "<h2>My #2 heading</h2>".
'''

tests_regex = re.compile(r"(?P<number>\d+)\.\s(?P<function_call>.+) should return (?P<output>.+)\.$", re.MULTILINE)
test_data = [item.groupdict() for item in re.finditer(tests_regex, tests_text)]

def run_tests(test_data):
    print("---------------------------")
    print("🧪 Starting Verification...")
    print("---------------------------")

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