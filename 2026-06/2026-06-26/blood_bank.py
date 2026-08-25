def triage_blood(bank, patients):
    COMPATIBILITY = {
        'O': ["O"],
        'A': ["A", "O"],
        'B': ["B", "O"],
        'AB': ["AB", "A", "B", "O"]
    }
    patients_count = {}
    ordered_patients = []
    served_patients = 0

    for patient in patients:
        try:
            patients_count[patient] += 1
        except KeyError:
            patients_count[patient] = 1

    for blood_type in ["O", "A", "B", "AB"]:
        try:
            ordered_patients += [blood_type] * patients_count[blood_type]
        except KeyError:
            pass
        
    for patient in ordered_patients:
        for possible_donor in COMPATIBILITY[patient]:
            if possible_donor in bank:
                bank.remove(possible_donor)
                served_patients += 1
                break

    return f"{served_patients} of {len(patients)} patients served"

# --- TEST SUITE ---

tests_text = r'''
1. triage_blood(["O", "A", "B", "AB"], ["O", "A", "B", "AB"]) should return "4 of 4 patients served".
2. triage_blood(["A", "A", "B", "B", "AB"], ["O", "A", "B", "B", "B"]) should return "3 of 5 patients served".
3. triage_blood(["O", "A", "B", "AB"], ["AB", "AB", "AB", "AB", "AB"]) should return "4 of 5 patients served".
4. triage_blood(["O", "O", "O", "O", "O"], ["O", "A", "B", "AB"]) should return "4 of 4 patients served".
5. triage_blood(["A", "O", "B", "AB", "B", "AB", "O", "A", "A"], ["O", "A", "B", "AB", "A", "B", "A", "A", "B", "A", "B"]) should return "8 of 11 patients served".
6. triage_blood(["O", "B", "AB", "AB", "O", "A", "A", "AB", "O", "B", "B", "AB", "A", "B", "AB"], ["O", "A", "B", "B", "A", "B", "AB", "A", "B", "A", "O", "AB", "AB", "O"]) should return "13 of 14 patients served".
'''

import re

tests_regex = re.compile(r"(?P<number>\d+)\.\s(?P<function_call>.+) should return (?P<output>.+?)\.?$", re.MULTILINE)
test_data = [item.groupdict() for item in re.finditer(tests_regex, tests_text)]

def run_tests(test_data):
    print("——————————————————————————",
        "\n🧪 Starting Verification...",
        "\n——————————————————————————")

    fail_count = 0

    for test in test_data:
        function_call_output = eval(test['function_call'])
        test_output = eval(test['output'])
        
        if function_call_output == test_output:
            print(f"{test['number']}.✅ PASS - Function Call:\n{test['function_call']}")
        else:
            print(f"{test['number']}.❌ FAIL - Function Call:\n{test['function_call']}\nExpected:\n{test_output}\nGot:\n{function_call_output}")
            fail_count += 1

        print("————————————————————————————")

    print(
        f"⚠️ WARNING: {fail_count}/{len(test_data)} tests FAILED." if fail_count
        else "🎉 SUCCESS: All tests PASSED."
    )

run_tests(test_data)