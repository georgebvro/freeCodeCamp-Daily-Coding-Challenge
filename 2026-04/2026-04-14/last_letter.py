def get_last_letter(s):
    letters_list = [*re.sub("[^A-Z]", "", s, flags=re.IGNORECASE)]
    highest_char_code = float('-inf')
    
    for letter in letters_list:
        current_letter_char_code = ord(letter.upper())

        if current_letter_char_code > highest_char_code:
            last_in_the_alphabet = letter
            highest_char_code = current_letter_char_code

    return last_in_the_alphabet

# --- TEST SUITE ---

tests_text = r'''
1. get_last_letter("world") should return "w".
2. get_last_letter("Hello World") should return "W".
3. get_last_letter("The quick brown fox jumped over the lazy dog.") should return "z".
4. get_last_letter("HeLl0") should return "L".
5. get_last_letter("!#$ er@R asd fT.,> 2t0e9") should return "T".
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