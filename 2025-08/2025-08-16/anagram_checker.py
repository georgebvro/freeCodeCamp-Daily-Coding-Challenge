def are_anagrams(str1, str2):
    import re

    regex1 = "[^" + "".join(set(re.compile(r"[^\s]").findall(str1.lower()))) + "]"
    regex2 = "[^" + "".join(set(re.compile(r"[^\s]").findall(str2.lower()))) + "]"

    return len(str1) == len(str2) \
        and not re.compile(regex1, re.I).search(str2.replace(" ", "")) \
        and not re.compile(regex2, re.I).search(str1.replace(" ", ""))

print(are_anagrams("listen", "silent"))
print(are_anagrams("School master", "The classroom"))
print(are_anagrams("A gentleman", "Elegant man"))
print(are_anagrams("Hello", "World"))
print(are_anagrams("apple", "banana"))
print(are_anagrams("cat", "dog"))

print(are_anagrams("abc", "abb"))
print(are_anagrams("abc", "abbc"))

# --- TEST SUITE ---

tests_text = '''
1. are_anagrams("listen", "silent") should return True.
2. are_anagrams("School master", "The classroom") should return True.
3. are_anagrams("A gentleman", "Elegant man") should return True.
4. are_anagrams("Hello", "World") should return False.
5. are_anagrams("apple", "banana") should return False.
6. are_anagrams("cat", "dog") should return False.
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