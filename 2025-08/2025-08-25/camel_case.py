def to_camel_case(s):
    import re;
    words = re.split(r'[ _-]+', s)

    for i in range(len(words)):
        words[i] = words[i].lower()

        if i > 0:
            words[i] = words[i][0].upper() + words[i][1:]

    return ''.join(words)

print(to_camel_case("hello world"))
print(to_camel_case("HELLO WORLD"))
print(to_camel_case("secret agent-X"))
print(to_camel_case("FREE cODE cAMP"))
print(to_camel_case("ye old-_-sea  faring_buccaneer_-_with a - peg__leg----and a_parrot_ _named- _squawk"))

# --- TEST SUITE ---

tests_text = '''
1. to_camel_case("hello world") should return "helloWorld".
2. to_camel_case("HELLO WORLD") should return "helloWorld".
3. to_camel_case("secret agent-X") should return "secretAgentX".
4. to_camel_case("FREE cODE cAMP") should return "freeCodeCamp".
5. to_camel_case("ye old-_-sea  faring_buccaneer_-_with a - peg__leg----and a_parrot_ _named- _squawk") should return "yeOldSeaFaringBuccaneerWithAPegLegAndAParrotNamedSquawk".
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