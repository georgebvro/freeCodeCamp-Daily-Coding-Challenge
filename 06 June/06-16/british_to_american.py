def british_to_american(sentence):
    WORDS = {
        "colour": "color",
        "flavour": "flavor",
        "honour": "honor",
        "neighbour": "neighbor",
        "labour": "labor",
        "humour": "humor",
        "centre": "center",
        "fibre": "fiber",
        "defence": "defense",
        "offence": "offense",
        "organise": "organize",
        "recognise": "recognize",
        "analyse": "analyze"
    }
    translated_sentence = sentence;

    def replacer(match):
        replacement = WORDS[match[0].lower()]

        if match[0][0].isupper():
            replacement = replacement[0].upper() + replacement[1:]

        if match[0].isupper():
            replacement = replacement.upper()

        return replacement

    for word in WORDS:
        regex = re.compile(word, re.IGNORECASE)
        translated_sentence = re.sub(regex, replacer, translated_sentence)

    return translated_sentence

# --- TEST SUITE ---

tests_text = r'''
1. british_to_american("I love the colour blue.") should return "I love the color blue."
2. british_to_american("The fibre optic cable is new.") should return "The fiber optic cable is new."
3. british_to_american("It's an honour to meet someone with such humour.") should return "It's an honor to meet someone with such humor."
4. british_to_american("The unrecognised artist analysed his colour palette at the centre.") should return "The unrecognized artist analyzed his color palette at the center."
5. british_to_american("The offence analysed, with organisation, the defence centre and recognised that the neighbouring labouror was humourous, flavourful, and colourful.") should return "The offense analyzed, with organisation, the defense center and recognized that the neighboring laboror was humorous, flavorful, and colorful."
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