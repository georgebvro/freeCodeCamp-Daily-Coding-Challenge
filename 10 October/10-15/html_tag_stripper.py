def strip_tags(html):
    import re

    return re.sub("<[^>]+>", "", html)

print(strip_tags('<a href="#">Click here</a>'))
print(strip_tags('<p class="center">Hello <b>World</b>!</p>'))
print(strip_tags('<img src="cat.jpg" alt="Cat">'))
print(strip_tags('<main id="main"><section class="section">section</section><section class="section">section</section></main>'))

# --- TEST SUITE ---

tests_text = '''
1. strip_tags('<a href="#">Click here</a>') should return "Click here".
2. strip_tags('<p class="center">Hello <b>World</b>!</p>') should return "Hello World!".
3. strip_tags('<img src="cat.jpg" alt="Cat">') should return "".
4. strip_tags('<main id="main"><section class="section">section</section><section class="section">section</section></main>') should return "sectionsection".
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