def pig_latin(s):
    def convert(word):
        if re.match("[aeiou]", word):
            return f"{word}way"

        match = re.match("^[b-df-hj-np-tv-z]+", word, re.IGNORECASE)
        
        if match:
            return \
                f"{word[match.end()].upper()}{word[match.end() + 1:]}{match[0].lower()}ay" if match[0][0] == match[0][0].upper() \
                else f"{word[match.end():]}{match[0]}ay"

    return " ".join(map(convert, s.split(" ")))

# --- TEST SUITE ---

tests_text = r'''
1. pig_latin("universe") should return "universeway".
2. pig_latin("hello") should return "ellohay".
3. pig_latin("hello universe") should return "ellohay universeway".
4. pig_latin("Hello universe") should return "Ellohay universeway".
5. pig_latin("Pig Latin is fun") should return "Igpay Atinlay isway unfay".
6. pig_latin("The quick brown fox jumped over the lazy dog") should return "Ethay uickqay ownbray oxfay umpedjay overway ethay azylay ogday".
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