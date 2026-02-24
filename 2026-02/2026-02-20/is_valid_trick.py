def is_valid_trick(trick_name):
    groups_dict = re.match(r"^(?P<first_word>\w+) (?P<second_word>\w+)$", trick_name).groupdict()
    valid_first_words = ["Misty", "Ghost", "Thunder", "Solar", "Sky", "Phantom", "Frozen", "Polar"]
    valid_second_words = ["Twister", "Icequake", "Avalanche", "Vortex", "Snowstorm", "Frostbite", "Blizzard", "Shadow"]

    return groups_dict['first_word'] in valid_first_words \
        and groups_dict['second_word'] in valid_second_words

# --- TEST SUITE ---

tests_text = r'''
1. is_valid_trick("Polar Vortex") should return True.
2. is_valid_trick("Solar Icequake") should return True.
3. is_valid_trick("Thunder Blizzard") should return True.
4. is_valid_trick("Phantom Frostbite") should return True.
5. is_valid_trick("Ghost Avalanche") should return True.
6. is_valid_trick("Snowstorm Shadow") should return False.
7. is_valid_trick("Solar Sky") should return False.
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