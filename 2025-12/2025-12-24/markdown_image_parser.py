def parse_image(markdown):
    groups_dict = re.match(r"!\[(?P<alt_text>.*)]\((?P<image_url>[^ ]*).*\)", markdown).groupdict()

    return f"<img src=\"{groups_dict['image_url']}\" alt=\"{groups_dict['alt_text']}\">"

# --- TEST SUITE ---

tests_text = '''
1. parse_image("![Cute cat](cat.png)") should return '<img src="cat.png" alt="Cute cat">'.
2. parse_image("![Rocket Ship](https://freecodecamp.org/cdn/rocket-ship.jpg)") should return '<img src="https://freecodecamp.org/cdn/rocket-ship.jpg" alt="Rocket Ship">'.
3. parse_image("![Cute cats!](https://freecodecamp.org/cats.jpeg)") should return '<img src="https://freecodecamp.org/cats.jpeg" alt="Cute cats!">'.
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