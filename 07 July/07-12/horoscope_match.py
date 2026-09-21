def horoscope_match(sign1, sign2):
    SIGNS = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"]
    COMPATIBILITY = {
        0: "100%",
        1: "40%",
        2: "80%",
        3: "30%",
        4: "90%",
        5: "20%",
        6: "50%"
    }

    distance = abs(SIGNS.index(sign1) - SIGNS.index(sign2))

    return COMPATIBILITY[min(distance, len(SIGNS) - distance)]

# --- TEST SUITE ---

tests_text = r'''
1. horoscope_match("Libra", "Sagittarius") should return "80%".
2. horoscope_match("Gemini", "Scorpio") should return "20%".
3. horoscope_match("Pisces", "Aries") should return "40%".
4. horoscope_match("Capricorn", "Cancer") should return "50%".
5. horoscope_match("Aquarius", "Aquarius") should return "100%".
6. horoscope_match("Virgo", "Taurus") should return "90%".
7. horoscope_match("Leo", "Scorpio") should return "30%".
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