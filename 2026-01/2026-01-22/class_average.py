def get_average_grade(scores):
    average_score = sum(scores) / len(scores)

    if average_score >= 97:
        return "A+";

    if average_score >= 93:
        return "A";

    if average_score >= 90:
        return "A-";

    if average_score >= 87:
        return "B+";

    if average_score >= 83:
        return "B";

    if average_score >= 80:
        return "B-";

    if average_score >= 77:
        return "C+";

    if average_score >= 73:
        return "C";

    if average_score >= 70:
        return "C-";

    if average_score >= 67:
        return "D+";

    if average_score >= 63:
        return "D";

    if average_score >= 60:
        return "D-";

    if average_score < 60:
        return "F";

# --- TEST SUITE ---

tests_text = r'''
1. get_average_grade([92, 91, 90, 94, 89, 93]) should return "A-".
2. get_average_grade([84, 89, 85, 100, 91, 88, 79]) should return "B+".
3. get_average_grade([63, 69, 65, 66, 71, 64, 65]) should return "D".
4. get_average_grade([97, 98, 99, 100, 96, 97, 98, 99, 100]) should return "A+".
5. get_average_grade([75, 100, 88, 79, 80, 78, 64, 60]) should return "C+".
6. get_average_grade([45, 48, 50, 52, 100, 54, 56, 58, 59]) should return "F".
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