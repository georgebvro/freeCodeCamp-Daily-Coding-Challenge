def classification(temp):
    
    if temp >= 30000:
        stellar_classification = "O"

    elif temp >= 10000:
        stellar_classification = "B"

    elif temp >= 7500:
        stellar_classification = "A"

    elif temp >= 6000:
        stellar_classification = "F"

    elif temp >= 5200:
        stellar_classification = "G"

    elif temp >= 3700:
        stellar_classification = "K"

    elif temp >= 0:
        stellar_classification = "M"

    return stellar_classification

print(classification(5778))
print(classification(2400))
print(classification(9999))
print(classification(3700))
print(classification(3699))
print(classification(210000))
print(classification(6000))
print(classification(11432))

# --- TEST SUITE ---

tests_text = '''
1. classification(5778) should return "G".
2. classification(2400) should return "M".
3. classification(9999) should return "A".
4. classification(3700) should return "K".
5. classification(3699) should return "M".
6. classification(210000) should return "O".
7. classification(6000) should return "F".
8. classification(11432) should return "B".
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