def calculate_handicap(scores, pars):

    return round(sum([score - pars[index] for index, score in enumerate(scores)]) / len(scores), 1)

# --- TEST SUITE ---

tests_text = r'''
1. calculate_handicap([72, 72, 72], [72, 72, 72]) should return 0.
2. calculate_handicap([80, 76, 78, 78], [72, 72, 72, 72]) should return 6.
3. calculate_handicap([42, 45, 46, 45], [36, 36, 36, 36]) should return 8.5.
4. calculate_handicap([85, 80, 76, 79, 82], [72, 72, 72, 71, 71]) should return 8.8.
5. calculate_handicap([41, 50, 48, 52, 46, 49], [35, 37, 35, 37, 35, 37]) should return 11.7.
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