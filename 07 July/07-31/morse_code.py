def decode_morse(code):
    MORSE = {
        '.-': "A",
        '-...': "B",
        '-.-.': "C",
        '-..': "D",
        '.': "E",
        '..-.': "F",
        '--.': "G",
        '....': "H",
        '..': "I",
        '.---': "J",
        '-.-': "K",
        '.-..': "L",
        '--': "M",
        '-.': "N",
        '---': "O",
        '.--.': "P",
        '--.-': "Q",
        '.-.': "R",
        '...': "S",
        '-': "T",
        '..-': "U",
        '...-': "V",
        '.--': "W",
        '-..-': "X",
        '-.--': "Y",
        '--..': "Z"
    }

    return " ".join([
        "".join([MORSE[letter_code] for letter_code in word.split(" ")]) 
        for word in code.split("   ")
    ])

# --- TEST SUITE ---

tests_text = r'''
1. decode_morse("--..") should return "Z".
2. decode_morse("... --- ...") should return "SOS".
3. decode_morse("..-. .-. . . -.-. --- -.. . -.-. .- -- .--.") should return "FREECODECAMP".
4. decode_morse(".... . .-.. .-.. ---   .-- --- .-. .-.. -..") should return "HELLO WORLD".
5. decode_morse("- .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. . -..   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --.") should return "THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG".
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