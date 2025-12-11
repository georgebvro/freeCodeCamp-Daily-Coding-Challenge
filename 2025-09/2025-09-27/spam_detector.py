def is_spam(number):
    import re
    groups_dict = re \
        .match(r"\+(?P<country_code>\d+) \((?P<area_code>\d{3})\) (?P<local_number1>\d{3})-(?P<local_number2>\d{4})", number) \
        .groupdict()

    country_code, area_code, local_number1, local_number2 = (
        groups_dict['country_code'],
        groups_dict['area_code'],
        groups_dict['local_number1'],
        groups_dict['local_number2']
    )

    if len(country_code) > 2 or country_code[0] != "0":
        return True

    if int(area_code) < 200 or 900 < int(area_code):
        return True

    sum_of_local_number1 = sum(map(lambda digit: int(digit), local_number1))
    if str(sum_of_local_number1) in local_number2:
        return True

    if re.search(r"(\d)\1{3,}", country_code + area_code + local_number1 + local_number2):
        return True

    return False

print(is_spam("+0 (200) 234-0182"))
print(is_spam("+091 (555) 309-1922"))
print(is_spam("+1 (555) 435-4792"))
print(is_spam("+0 (955) 234-4364"))
print(is_spam("+0 (155) 131-6943"))
print(is_spam("+0 (555) 135-0192"))
print(is_spam("+0 (555) 564-1987"))
print(is_spam("+00 (555) 234-0182"))

# --- TEST SUITE ---

tests_text = '''
1. is_spam("+0 (200) 234-0182") should return False.
2. is_spam("+091 (555) 309-1922") should return True.
3. is_spam("+1 (555) 435-4792") should return True.
4. is_spam("+0 (955) 234-4364") should return True.
5. is_spam("+0 (155) 131-6943") should return True.
6. is_spam("+0 (555) 135-0192") should return True.
7. is_spam("+0 (555) 564-1987") should return True.
8. is_spam("+00 (555) 234-0182") should return False.
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