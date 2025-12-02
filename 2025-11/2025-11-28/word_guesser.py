def compare(word, guess):
    word_list = list(word)
    guess_list = list(guess)
    correct_position = "2"
    wrong_position = "1"
    missing_letter = "0"

    for index, guess_character in enumerate(guess_list):
        if word_list[index] == guess_character:
            word_list[index] = "-"
            guess_list[index] = correct_position

        if re.match("[A-Z]", guess_character) and not re.search(f"{guess_character}", word):
            guess_list[index] = missing_letter

    for index, guess_character in enumerate(guess_list):
        if re.match("[A-Z]", guess_character):
            try:
                index_found = word_list.index(guess_character)
            except ValueError:
                guess_list[index] = missing_letter
            else:
                word_list[index_found] = "-"
                guess_list[index] = wrong_position

    return "".join(guess_list)

# --- TEST SUITE ---

tests_text = '''
1. compare("APPLE", "POPPA") should return "10201".
2. compare("REACT", "TRACE") should return "11221".
3. compare("DEBUGS", "PYTHON") should return "000000".
4. compare("JAVASCRIPT", "TYPESCRIPT") should return "0000222222".
5. compare("ORANGE", "ROUNDS") should return "110200".
6. compare("WIRELESS", "ETHERNET") should return "10021000".
'''

import re

tests_regex = re.compile(r"(?P<number>\d+)\.\s(?P<function_call>.+) should return (?P<output>.+)\.$", re.MULTILINE)
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