def vowel_case(s):

    return re.sub(
        "[aeiou]", 
        lambda match_vowel: match_vowel[0].upper(), 
        re.sub(
            "[^aeiou]", 
            lambda match_non_vowel: match_non_vowel[0].lower(), 
            s, 
            flags = re.IGNORECASE
        ), 
        flags = re.IGNORECASE
    )

# --- TEST SUITE ---

tests_text = r'''
1. vowel_case("vowelcase") should return "vOwElcAsE".
2. vowel_case("coding is fun") should return "cOdIng Is fUn".
3. vowel_case("HELLO, world!") should return "hEllO, wOrld!".
4. vowel_case("git cherry-pick") should return "gIt chErry-pIck".
5. vowel_case("HEAD~1") should return "hEAd~1".
'''

import re

tests_regex = re.compile(r"(?P<number>\d+)\.\s(?P<function_call>.+) should return (?P<output>.+?)\.?$", re.MULTILINE)
test_data = [item.groupdict() for item in re.finditer(tests_regex, tests_text)]

def run_tests(test_data):
    print("--------------------------")
    print("🧪 Starting Verification...")
    print("--------------------------")

    fail_count = 0

    for test in test_data:
        function_call_output = eval(test['function_call'])
        test_output = eval(test['output'])
        
        if function_call_output == test_output:
            print(f"{test['number']}.✅ PASS - Function Call:\n{test['function_call']}")
        else:
            print(f"{test['number']}.❌ FAIL - Function Call:\n{test['function_call']}\nExpected:\n{test_output}\nGot:\n{function_call_output}")
            fail_count += 1

    print("----------------------------",
        f"\n⚠️ WARNING: {fail_count}/{len(test_data)} tests FAILED." if fail_count
        else "\n🎉 SUCCESS: All tests PASSED."
    )

run_tests(test_data)