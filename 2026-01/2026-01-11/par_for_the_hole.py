def golf_score(par, strokes):
    difference = strokes - par

    if strokes == 1:
        return "Hole in one!"

    match difference:
        case -2:
            return "Eagle"
        case -1:
            return "Birdie"
        case 0:
            return "Par"
        case 1:
            return "Bogey"
        case 2:
            return "Double bogey"
        case _:
            return "Strokes out of range"

# --- TEST SUITE ---

tests_text = r'''
1. golf_score(3, 3) should return "Par".
2. golf_score(4, 3) should return "Birdie".
3. golf_score(3, 1) should return "Hole in one!".
4. golf_score(5, 7) should return "Double bogey".
5. golf_score(4, 5) should return "Bogey".
6. golf_score(5, 3) should return "Eagle".
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