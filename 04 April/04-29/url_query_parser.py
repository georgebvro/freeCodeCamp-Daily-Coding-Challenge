def parse_url_query(url):
    parameter_list = url[url.index("?") + 1:].split("&")
    parameters_object = {}

    for parameter in parameter_list:
        key, value = parameter.split("=")
        parameters_object[key] = value

    return parameters_object

# --- TEST SUITE ---

tests_text = r'''
1. parse_url_query("https://example.com/search?name=Alice&age=30") should return {"name": "Alice", "age": "30"}
2. parse_url_query("https://freecodecamp.org/learn?skill=programming&language=python") should return {"skill": "programming", "language": "python"}
3. parse_url_query("https://freecodecamp.org/items?category=books&sort=asc&page=2") should return {"category": "books", "sort": "asc", "page": "2"}
4. parse_url_query("https://example.com?redirect=freecodecamp.org/learn&when=now") should return {"redirect": "freecodecamp.org/learn", "when": "now"}
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