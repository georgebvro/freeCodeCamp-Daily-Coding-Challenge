def extract_attributes(element):
    import re

    attributes = re.findall("\s(?P<attributeName>[^\t\n\f \/>\"'=]+)=[\"'](?P<attributeValue>[^\"']+)[\"']", element)

    return list(map(lambda attribute: f"{attribute[0]}, {attribute[1]}", attributes))

print(extract_attributes('<span class="red"></span>'))
print(extract_attributes('<meta charset="UTF-8" />'))
print(extract_attributes("<p>Lorem ipsum dolor sit amet</p>"))
print(extract_attributes('<input name="email" type="email" required="true" />'))
print(extract_attributes('<button id="submit" class="btn btn-primary">Submit</button>'))

# --- TEST SUITE ---

tests_text = '''
1. extract_attributes('<span class="red"></span>') should return ["class, red"].
2. extract_attributes('<meta charset="UTF-8" />') should return ["charset, UTF-8"].
3. extract_attributes("<p>Lorem ipsum dolor sit amet</p>") should return [].
4. extract_attributes('<input name="email" type="email" required="true" />') should return ["name, email", "type, email", "required, true"].
5. extract_attributes('<button id="submit" class="btn btn-primary">Submit</button>') should return ["id, submit", "class, btn btn-primary"].
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