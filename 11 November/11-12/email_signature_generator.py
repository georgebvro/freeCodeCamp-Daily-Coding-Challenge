import re

def generate_signature(name, title, company):
    if re.match("^[A-I]", name, re.IGNORECASE):
        prefix = ">>"

    if re.match("^[J-R]", name, re.IGNORECASE):
        prefix = "--"

    if re.match("^[S-Z]", name, re.IGNORECASE):
        prefix = "::"

    return f"{prefix}{name}, {title} at {company}"

print(generate_signature("Quinn Waverly", "Founder and CEO", "TechCo"))
print(generate_signature("Alice Reed", "Engineer", "TechCo"))
print(generate_signature("Tina Vaughn", "Developer", "example.com"))
print(generate_signature("B. B.", "Product Tester", "AcmeCorp"))
print(generate_signature("windstorm", "Cloud Architect", "Atmospheronics"))

# --- TEST SUITE ---

tests_text = '''
1. generate_signature("Quinn Waverly", "Founder and CEO", "TechCo") should return "--Quinn Waverly, Founder and CEO at TechCo".
2. generate_signature("Alice Reed", "Engineer", "TechCo") should return ">>Alice Reed, Engineer at TechCo".
3. generate_signature("Tina Vaughn", "Developer", "example.com") should return "::Tina Vaughn, Developer at example.com".
4. generate_signature("B. B.", "Product Tester", "AcmeCorp") should return ">>B. B., Product Tester at AcmeCorp".
5. generate_signature("windstorm", "Cloud Architect", "Atmospheronics") should return "::windstorm, Cloud Architect at Atmospheronics".
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