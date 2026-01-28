def to_consonant_case(s):
    consonant_case_s = re.sub("(?![aeiou])[a-z]", lambda match_lowercase_consonant: match_lowercase_consonant[0].upper(), s)
    consonant_case_s = re.sub("[AEIOU]", lambda match_uppercase_consonant: match_uppercase_consonant[0].lower(), consonant_case_s)
    consonant_case_s = consonant_case_s.replace("-", "_")

    return consonant_case_s

# --- TEST SUITE ---

tests_text = r'''
1. to_consonant_case("helloworld") should return "HeLLoWoRLD".
2. to_consonant_case("HELLOWORLD") should return "HeLLoWoRLD".
3. to_consonant_case("_hElLO-WOrlD-") should return "_HeLLo_WoRLD_".
4. to_consonant_case("_~-generic_~-variable_~-name_~-here-~_") should return "_~_GeNeRiC_~_VaRiaBLe_~_NaMe_~_HeRe_~_".
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