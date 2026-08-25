def parse_frontmatter(s):
    regex = re.compile(r"(?<=\n)(?P<key>.+?): (?P<value>.+?)(?=\n)")
    matches = [item.groupdict() for item in re.finditer(regex, s)]
    dictionary = {}

    for match in matches:
        key = match['key']
        value = match['value']

        if value.isdigit():
            dictionary[key] = int(value)
        elif value.count(".") == 1 and value.replace(".", "").isdigit():
            dictionary[key] = float(value)
        elif value.lower() == "true":
            dictionary[key] = True
        elif value.lower() == "false":
            dictionary[key] = False
        else:
            dictionary[key] = value

    return dictionary

# --- TEST SUITE ---

tests_text = r'''
1. parse_frontmatter("---\ntitle: My Post\ndraft: false\nviews: 100\n---") should return { 'title': "My Post", 'draft': False, 'views': 100 }.
2. parse_frontmatter("---\nid: 6a174db57256a112f932195c\ntitle: My Book\nlocale: en\nwordCount: 10000\npublished: false\n---") should return { 'id': "6a174db57256a112f932195c", 'title': "My Book", 'locale': "en", 'wordCount': 10000, 'published': False }.
3. parse_frontmatter("---\nversion: 1.0.0\nurl: https://example.com\nprivate: true\n---") should return { 'version': "1.0.0", 'url': "https://example.com", 'private': True }.
4. parse_frontmatter("---\nrating: 4.5\nprice: 9.99\n---") should return { 'rating': 4.5, 'price': 9.99 }.
'''

import re

tests_regex = re.compile(r"(?P<number>\d+)\.\s(?P<function_call>.+) should return (?P<output>.+?)\.?$", re.MULTILINE)
test_data = [item.groupdict() for item in re.finditer(tests_regex, tests_text)]

def run_tests(test_data):
    print("——————————————————————————",
        "\n🧪 Starting Verification...",
        "\n——————————————————————————")

    fail_count = 0

    for test in test_data:
        function_call_output = eval(test['function_call'])
        test_output = eval(test['output'])
        
        if function_call_output == test_output:
            print(f"{test['number']}.✅ PASS - Function Call:\n{test['function_call']}")
        else:
            print(f"{test['number']}.❌ FAIL - Function Call:\n{test['function_call']}\nExpected:\n{test_output}\nGot:\n{function_call_output}")
            fail_count += 1

        print("————————————————————————————")

    print(
        f"⚠️ WARNING: {fail_count}/{len(test_data)} tests FAILED." if fail_count
        else "🎉 SUCCESS: All tests PASSED."
    )

run_tests(test_data)