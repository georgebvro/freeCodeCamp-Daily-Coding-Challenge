def can_donate(donor, recipient):
    regex = re.compile(r"^(?P<letter>AB|A|B|O)(?P<rh>\+|-)$")
    donor_dict = re.match(regex, donor)
    recipient_dict = re.match(regex, recipient)

    if donor_dict['rh'] == "+" and recipient_dict['rh'] == "-":
        return False

    match donor_dict['letter']:
        case "A":
            if recipient_dict['letter'] != "A" and recipient_dict['letter'] != "AB":
                return False
        case "B":
            if recipient_dict['letter'] != "B" and recipient_dict['letter'] != "AB":
                return False
        case "AB":
            if recipient_dict['letter'] != "AB":
                return False

    return True

# --- TEST SUITE ---

tests_text = r'''
1. can_donate("B+", "B+") should return True.
2. can_donate("O-", "AB-") should return True.
3. can_donate("O+", "A-") should return False.
4. can_donate("A+", "AB+") should return True.
5. can_donate("A-", "B-") should return False.
6. can_donate("B-", "AB+") should return True.
7. can_donate("B-", "A+") should return False.
8. can_donate("O-", "O+") should return True.
9. can_donate("O+", "O-") should return False.
10. can_donate("AB+", "AB-") should return False.
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