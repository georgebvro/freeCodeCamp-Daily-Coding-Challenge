def build_acronym(s):
    special_words = ["a", "for", "an", "and", "by", "of"]
    words = s.split(" ")

    return "".join([word[0].upper() \
        for word in words \
            if word.lower() not in special_words \
            or (word.lower() in special_words and words.index(word) == 0)])
    
print(build_acronym("Search Engine Optimization"))
print(build_acronym("Frequently Asked Questions"))
print(build_acronym("National Aeronautics and Space Administration"))
print(build_acronym("Federal Bureau of Investigation"))
print(build_acronym("For your information"))
print(build_acronym("By the way"))
print(build_acronym("An unstoppable herd of waddling penguins overtakes the icy mountains and sings happily"))

print(build_acronym("For An Open Door"));
print(build_acronym("for An Open Door"));

# --- TEST SUITE ---

tests_text = '''
1. build_acronym("Search Engine Optimization") should return "SEO".
2. build_acronym("Frequently Asked Questions") should return "FAQ".
3. build_acronym("National Aeronautics and Space Administration") should return "NASA".
4. build_acronym("Federal Bureau of Investigation") should return "FBI".
5. build_acronym("For your information") should return "FYI".
6. build_acronym("By the way") should return "BTW".
7. build_acronym("An unstoppable herd of waddling penguins overtakes the icy mountains and sings happily") should return "AUHWPOTIMSH".
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