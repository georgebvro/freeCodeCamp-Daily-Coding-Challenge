def navigate(commands):
    import re

    history = ["Home"]
    cursor = 0

    for command in commands:
        groups_dict = re.match(r"(?P<action>Visit|Back|Forward) ?(?P<page>.*)", command)

        match groups_dict['action']:
            case "Visit":
                history = history[:cursor + 1]
                history.append(groups_dict['page'])
                cursor += 1

            case "Back":
                if cursor > 0:
                    cursor -= 1
                
            case "Forward":
                if cursor < len(history) - 1:
                    cursor += 1

    return history[cursor]

print(navigate(["Visit About Us", "Back", "Forward"]))
print(navigate(["Forward"]))
print(navigate(["Back"]))
print(navigate(["Visit About Us", "Visit Gallery"]))
print(navigate(["Visit About Us", "Visit Gallery", "Back", "Back"]))
print(navigate(["Visit About", "Visit Gallery", "Back", "Visit Contact", "Forward"]))
print(navigate(["Visit About Us", "Visit Visit Us", "Forward", "Visit Contact Us", "Back"]))

# --- TEST SUITE ---

tests_text = '''
1. navigate(["Visit About Us", "Back", "Forward"]) should return "About Us".
2. navigate(["Forward"]) should return "Home".
3. navigate(["Back"]) should return "Home".
4. navigate(["Visit About Us", "Visit Gallery"]) should return "Gallery".
5. navigate(["Visit About Us", "Visit Gallery", "Back", "Back"]) should return "Home".
6. navigate(["Visit About", "Visit Gallery", "Back", "Visit Contact", "Forward"]) should return "Contact".
7. navigate(["Visit About Us", "Visit Visit Us", "Forward", "Visit Contact Us", "Back"]) should return "Visit Us".
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