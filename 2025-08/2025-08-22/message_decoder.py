def decode(message, shift):
    CODE_OF_UPPERCASE_A = ord('A')
    CODE_OF_UPPERCASE_Z = ord('Z')
    CODE_OF_LOWERCASE_A = ord('a')
    CODE_OF_LOWERCASE_Z = ord('z')
    ALPHABET_LENGTH = CODE_OF_UPPERCASE_Z - CODE_OF_UPPERCASE_A + 1
    decoded_message = ''

    for char in message:
        current_char_code = ord(char)
        new_char_code = current_char_code

        if CODE_OF_UPPERCASE_A <= current_char_code and current_char_code <= CODE_OF_UPPERCASE_Z:
            alphabet_index = current_char_code - CODE_OF_UPPERCASE_A
            new_alphabet_index = (alphabet_index - shift + ALPHABET_LENGTH) % ALPHABET_LENGTH
            new_char_code = CODE_OF_UPPERCASE_A + new_alphabet_index

        elif CODE_OF_LOWERCASE_A <= current_char_code and current_char_code <= CODE_OF_LOWERCASE_Z:
            alphabet_index = current_char_code - CODE_OF_LOWERCASE_A
            new_alphabet_index = (alphabet_index - shift + ALPHABET_LENGTH) % ALPHABET_LENGTH
            new_char_code = CODE_OF_LOWERCASE_A + new_alphabet_index

        decoded_message += chr(new_char_code)

    return decoded_message

print(decode("Xlmw mw e wigvix qiwweki.", 4))
print(decode("Byffi Qilfx!", 20))
print(decode("Zqd xnt njzx?", -1))
print(decode("oannLxmnLjvy", 9))

# --- TEST SUITE ---

tests_text = '''
1. decode("Xlmw mw e wigvix qiwweki.", 4) should return "This is a secret message."
2. decode("Byffi Qilfx!", 20) should return "Hello World!"
3. decode("Zqd xnt njzx?", -1) should return "Are you okay?"
4. decode("oannLxmnLjvy", 9) should return "freeCodeCamp"
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