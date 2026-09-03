import re

def spookify(boo):
    spooky = list(re.sub("[_-]", "~", boo))
    everyOtherLetter = True

    for index, character in enumerate(spooky):
        if re.match("[a-zA-Z]", character):
            
            spooky[index] = character.upper() if everyOtherLetter else character.lower()
            everyOtherLetter = not everyOtherLetter

    return "".join(spooky)

print(spookify("hello_world"))
print(spookify("Spooky_Case"))
print(spookify("TRICK-or-TREAT"))
print(spookify("c_a-n_d-y_-b-o_w_l"))
print(spookify("thE_hAUntEd-hOUsE-Is-fUll_Of_ghOsts"))

# --- TEST SUITE ---

tests_text = '''
1. spookify("hello_world") should return "HeLlO~wOrLd".
2. spookify("Spooky_Case") should return "SpOoKy~CaSe".
3. spookify("TRICK-or-TREAT") should return "TrIcK~oR~tReAt".
4. spookify("c_a-n_d-y_-b-o_w_l") should return "C~a~N~d~Y~~b~O~w~L".
5. spookify("thE_hAUntEd-hOUsE-Is-fUll_Of_ghOsts") should return "ThE~hAuNtEd~HoUsE~iS~fUlL~oF~gHoStS".
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