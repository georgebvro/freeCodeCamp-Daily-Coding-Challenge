def pet_years(pet, age):
    CONVERSION_TABLE = {
        'dog': 7,
        'cat': 6,
        'rabbit': 8,
        'hamster': 30,
        'guinea pig': 12,
        'goldfish': 6,
        'bird': 5
    }

    return age * CONVERSION_TABLE[pet]

# --- TEST SUITE ---

tests_text = r'''
1. pet_years("dog", 5) should return 35.
2. pet_years("cat", 9) should return 54.
3. pet_years("rabbit", 3) should return 24.
4. pet_years("hamster", 4) should return 120.
5. pet_years("guinea pig", 5) should return 60.
6. pet_years("goldfish", 2) should return 12.
7. pet_years("bird", 1) should return 5.
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