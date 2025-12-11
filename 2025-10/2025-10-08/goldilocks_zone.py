def goldilocks_zone(mass):
    luminosity = mass ** 3.5
    goldilocks_zone_start = 0.95 * luminosity ** 0.5
    goldilocks_zone_end = 1.37 * luminosity ** 0.5

    return [round(goldilocks_zone_start, 2), round(goldilocks_zone_end, 2)]

print(goldilocks_zone(1))
print(goldilocks_zone(0.5))
print(goldilocks_zone(6))
print(goldilocks_zone(3.7))
print(goldilocks_zone(20))

# --- TEST SUITE ---

tests_text = '''
1. goldilocks_zone(1) should return [0.95, 1.37].
2. goldilocks_zone(0.5) should return [0.28, 0.41].
3. goldilocks_zone(6) should return [21.85, 31.51].
4. goldilocks_zone(3.7) should return [9.38, 13.52].
5. goldilocks_zone(20) should return [179.69, 259.13].
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