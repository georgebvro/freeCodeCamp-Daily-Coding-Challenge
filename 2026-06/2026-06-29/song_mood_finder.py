def get_mood(genre, bpm):
    MOOD_TABLE = [
        { 'mood': "focus", 'genre': "classical", 'bpm_range': 60 <= bpm and bpm <= 109 },
        { 'mood': "focus", 'genre': "electronic", 'bpm_range': 60 <= bpm and bpm <= 89 },
        { 'mood': "happy", 'genre': "pop", 'bpm_range': 60 <= bpm and bpm <= 180 },
        { 'mood': "happy", 'genre': "classical", 'bpm_range': 110 <= bpm and bpm <= 180 },
        { 'mood': "happy", 'genre': "rock", 'bpm_range': 60 <= bpm and bpm <= 129 },
        { 'mood': "happy", 'genre': "electronic", 'bpm_range': 90 <= bpm and bpm <= 134 },
        { 'mood': "hype", 'genre': "rock", 'bpm_range': 130 <= bpm and bpm <= 180 },
        { 'mood': "hype", 'genre': "electronic", 'bpm_range': 135 <= bpm and bpm <= 180 }
    ]

    # Using list comprehension
    #return [config['mood'] for config in MOOD_TABLE if config['genre'] == genre and config['bpm_range']][0]
    
    # Using filter()
    return list(filter(lambda config: config['genre'] == genre and config['bpm_range'], MOOD_TABLE))[0]['mood']

# --- TEST SUITE ---

tests_text = r'''
1. get_mood("rock", 111) should return "happy".
2. get_mood("electronic", 74) should return "focus".
3. get_mood("classical", 180) should return "happy".
4. get_mood("rock", 155) should return "hype".
5. get_mood("electronic", 90) should return "happy".
6. get_mood("classical", 67) should return "focus".
7. get_mood("pop", 100) should return "happy".
8. get_mood("electronic", 135) should return "hype".
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