def wise_speak(sentence):
    import re

    groups_dict = re.match(r"(?P<goes_to_end>.*?(have|must|are|will|can)) (?P<goes_to_front>.*)(?P<punctuation>.)", sentence).groupdict()

    return f"{groups_dict['goes_to_front'][0].upper()}{groups_dict['goes_to_front'][1:]}, {groups_dict['goes_to_end'].lower()}{groups_dict['punctuation']}"

print(wise_speak("You must speak wisely."))
print(wise_speak("You can do it!"))
print(wise_speak("Do you think you will complete this?"))
print(wise_speak("All your base are belong to us."))
print(wise_speak("You have much to learn."))

# --- TEST SUITE ---

tests_text = '''
1. wise_speak("You must speak wisely.") should return "Speak wisely, you must."
2. wise_speak("You can do it!") should return "Do it, you can!"
3. wise_speak("Do you think you will complete this?") should return "Complete this, do you think you will?"
4. wise_speak("All your base are belong to us.") should return "Belong to us, all your base are."
5. wise_speak("You have much to learn.") should return "Much to learn, you have."
'''

import re

tests_regex = re.compile(r"(?P<number>\d+)\.\s(?P<function_call>.+) should return (?P<output>.+?)\.?$", re.MULTILINE)
test_data = [item.groupdict() for item in re.finditer(tests_regex, tests_text)]

def run_tests(test_data):
    print("--------------------------")
    print("🧪 Starting Verification...")
    print("--------------------------")

    all_passed = True
    fail_count = 0

    for test in test_data:
        function_call_output = eval(test['function_call'])
        test_output = eval(test['output'])
        
        if function_call_output == test_output:
            print(f"{test['number']}.✅ PASS - Function Call:\n{test['function_call']}")
        else:
            print(f"{test['number']}.❌ FAIL - Function Call:\n{test['function_call']}\nExpected:\n{test_output}\nGot:\n{function_call_output}")
            all_passed = False
            fail_count += 1

    print("----------------------------");

    if (all_passed):
        print("🎉 SUCCESS: All tests PASSED.");
    else:
        print(f"⚠️ WARNING: {fail_count}/{len(test_data)} tests FAILED.");

run_tests(test_data)