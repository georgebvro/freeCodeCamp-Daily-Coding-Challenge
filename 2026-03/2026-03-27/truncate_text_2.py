CHARACTER_WIDTHS = {
    'ilI': 1,
    'fjrt': 2,
    'abcdeghkmnopqrstuvwxyzJL': 3,
    'ABCDEFGHKMNOPQRSTUVWXYZ': 4,
    ' ': 2,
    '.': 1
}
MAX_WIDTH = 50
TRUNCATION_STRING = "..."

def truncate_text(s):
    widths_list = [find_character_width(character) for character in s]

    total_units = sum(widths_list)

    if total_units <= 50:
        return s

    truncation_string_width = sum([find_character_width(character) for character in TRUNCATION_STRING])

    while total_units > MAX_WIDTH - truncation_string_width:
        total_units -= widths_list[-1]
        widths_list = widths_list[:-1]

    return s[:len(widths_list)] + TRUNCATION_STRING

def find_character_width(character):
    return [width for characters, width in CHARACTER_WIDTHS.items() if character in characters][0]

# --- TEST SUITE ---

tests_text = r'''
1. truncate_text("The quick brown fox") should return "The quick brown f...".
2. truncate_text("The silky smooth sloth") should return "The silky smooth s...".
3. truncate_text("THE LOUD BRIGHT BIRD") should return "THE LOUD BRIG...".
4. truncate_text("The fast striped zebra") should return "The fast striped z...".
5. truncate_text("The big black bear") should return "The big black bear".
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