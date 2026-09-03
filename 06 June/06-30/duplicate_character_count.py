def duplicate_character_count(str1, str2):
    duplicate_count = 0

    for character in str2:
        if re.search(character, str1):
            duplicate_count += 1

    return duplicate_count

# --- TEST SUITE ---

tests_text = r'''
1. duplicate_character_count("aloha", "hei") should return 1.
2. duplicate_character_count("jambo", "bonjour") should return 4.
3. duplicate_character_count("hello", "hola") should return 3.
4. duplicate_character_count("ola", "hej") should return 0.
5. duplicate_character_count("ciao", "konnichiwa") should return 5.
6. duplicate_character_count("merhaba", "xin chao") should return 2.
7. duplicate_character_count("hello world", "hello to everyone around the world") should return 26.
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