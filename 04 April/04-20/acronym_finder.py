def find_org(acronym):
    ORGANIZATIONS = [
        "National Avocado Storage Authority", 
        "Cats Infiltration Agency", 
        "Fluffy Beanbag Inspectors", 
        "Department Of Jelly", 
        "Wild Honey Organization", 
        "Eating Pancakes Administration"
    ]

    organization_acronyms = ["".join([word[0] for word in organization.split()]) for organization in ORGANIZATIONS]

    return ORGANIZATIONS[organization_acronyms.index(acronym)]

# --- TEST SUITE ---

tests_text = r'''
1. find_org("NASA") should return "National Avocado Storage Authority".
2. find_org("CIA") should return "Cats Infiltration Agency".
3. find_org("FBI") should return "Fluffy Beanbag Inspectors".
4. find_org("DOJ") should return "Department Of Jelly".
5. find_org("WHO") should return "Wild Honey Organization".
6. find_org("EPA") should return "Eating Pancakes Administration".
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