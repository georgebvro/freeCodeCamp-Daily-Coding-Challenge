import re

def repeat_vowels(s):
    regex = re.compile(r"[aeiouAEIOU]")
    vowel_repeater_str = ''
    vowel_counter = 0;

    for char in s:
        vowel_repeater_element = char
        if re.match(regex, char):
            vowel_repeater_element += char.lower() * vowel_counter
            vowel_counter += 1
        vowel_repeater_str += vowel_repeater_element
        
    return vowel_repeater_str

print(repeat_vowels("hello world")) 
print(repeat_vowels("freeCodeCamp"))
print(repeat_vowels("AEIOU"))
print(repeat_vowels("I like eating ice cream in Iceland"))

# --- TEST SUITE ---

tests_text = '''
1. repeat_vowels("hello world") should return "helloo wooorld".
2. repeat_vowels("freeCodeCamp") should return "freeeCooodeeeeCaaaaamp".
3. repeat_vowels("AEIOU") should return "AEeIiiOoooUuuuu".
4. repeat_vowels("I like eating ice cream in Iceland") should return "I liikeee eeeeaaaaatiiiiiing iiiiiiiceeeeeeee creeeeeeeeeaaaaaaaaaam iiiiiiiiiiin Iiiiiiiiiiiiceeeeeeeeeeeeelaaaaaaaaaaaaaand".
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