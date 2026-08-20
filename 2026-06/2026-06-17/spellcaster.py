from functools import reduce

def cast(spells):
    SPELL_CONFIG = {
        'f': { 'spell': "Fire", 'category': "Destruction", 'score': 3},
        'l': { 'spell': "Lightning", 'category': "Destruction", 'score': 3},
        'i': { 'spell': "Ice", 'category': "Control", 'score': 2},
        'w': { 'spell': "Wind", 'category': "Control", 'score': 2},
        'h': { 'spell': "Heal", 'category': "Restoration", 'score': 1},
        's': { 'spell': "Shield", 'category': "Restoration", 'score': 1}
    }
    multiplier = None

    def total_score(total, index_spell_code):
        nonlocal multiplier
        index, spell_code = index_spell_code
        
        multiplier = multiplier + 1 if index > 0 and SPELL_CONFIG[spell_code]['category'] != SPELL_CONFIG[spells[index - 1]]['category'] else 1

        return total + SPELL_CONFIG[spell_code]['score'] * multiplier

    return reduce(total_score, enumerate(list(spells)), 0)

# --- TEST SUITE ---

tests_text = r'''
1. cast("fihwl") should return 33.
2. cast("lwswfi") should return 45.
3. cast("wislhfl") should return 37.
4. cast("sihwlih") should return 50.
5. cast("wishlfihwslwifihl") should return 101.
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