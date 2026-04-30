def get_browser_history(commands):
    history = []
    current_page_index = -1

    for command in commands:
        match command:
            case "Back":
                current_page_index = current_page_index - 1 if current_page_index > 0 else current_page_index

            case "Forward":
                current_page_index = current_page_index + 1 if current_page_index < len(history) - 1 else current_page_index

            case _:
                history = history[:current_page_index + 1]
                history.append(command)
                current_page_index += 1

    return [history, current_page_index]

# --- TEST SUITE ---

tests_text = r'''
1. get_browser_history(["freecodecamp.org", "freecodecamp.org/learn", "Back"]) should return [["freecodecamp.org", "freecodecamp.org/learn"], 0].
2. get_browser_history(["example.com", "example.com/about", "example.com/contact", "example.com/blog"]) should return [["example.com", "example.com/about", "example.com/contact", "example.com/blog"], 3].
3. get_browser_history(["example.com", "example.com/about", "Back", "example.com/contact", "example.com/blog", "Back", "Back", "Forward"]) should return [["example.com", "example.com/contact", "example.com/blog"], 1].
4. get_browser_history(["example.com", "example.com/about", "example.com/contact", "example.com/blog", "Back", "Back", "Forward", "freecodecamp.org"]) should return [["example.com", "example.com/about", "example.com/contact", "freecodecamp.org"], 3].
5. get_browser_history(["example.com", "example.com/about", "Back", "Back"]) should return [["example.com", "example.com/about"], 0].
6. get_browser_history(["example.com", "example.com/about", "Forward"]) should return [["example.com", "example.com/about"], 1].
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