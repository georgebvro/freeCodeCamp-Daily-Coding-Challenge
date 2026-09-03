def is_valid_number(n, base):
    import re
    CODE_OF_UPPERCASE_A = ord('A')
    BASE_THRESHOLD = 11; #value of base beyond which letters are needed to represent digits

    invalid_digits = r"[^0-" + \
        (f"{base - 1}]" if base <= 10
        else f"9A-{chr(base - BASE_THRESHOLD + CODE_OF_UPPERCASE_A)}]")

    regex = re.compile(invalid_digits, re.IGNORECASE)
    
    return not regex.search(n)

print(is_valid_number("10101", 2))
print(is_valid_number("10201", 2))
print(is_valid_number("76543210", 8))
print(is_valid_number("9876543210", 8))
print(is_valid_number("9876543210", 10))
print(is_valid_number("ABC", 10))
print(is_valid_number("ABC", 16))
print(is_valid_number("Z", 36))
print(is_valid_number("ABC", 20))
print(is_valid_number("4B4BA9", 16))
print(is_valid_number("5G3F8F", 16))
print(is_valid_number("5G3F8F", 17))
print(is_valid_number("abc", 10))
print(is_valid_number("abc", 16))
print(is_valid_number("AbC", 16))
print(is_valid_number("z", 36))

# --- TEST SUITE ---

tests_text = '''
1. is_valid_number("10101", 2) should return True.
2. is_valid_number("10201", 2) should return False.
3. is_valid_number("76543210", 8) should return True.
4. is_valid_number("9876543210", 8) should return False.
5. is_valid_number("9876543210", 10) should return True.
6. is_valid_number("ABC", 10) should return False.
7. is_valid_number("ABC", 16) should return True.
8. is_valid_number("Z", 36) should return True.
9. is_valid_number("ABC", 20) should return True.
10. is_valid_number("4B4BA9", 16) should return True.
11. is_valid_number("5G3F8F", 16) should return False.
12. is_valid_number("5G3F8F", 17) should return True.
13. is_valid_number("abc", 10) should return False.
14. is_valid_number("abc", 16) should return True.
15. is_valid_number("AbC", 16) should return True.
16. is_valid_number("z", 36) should return True.
'''

import re

tests_regex = re.compile(r"(?P<number>\d+)\.\s(?P<function_call>.+) should return (?P<output>.+)\.$", re.MULTILINE)
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