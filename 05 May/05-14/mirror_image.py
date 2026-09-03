def is_mirror_image(s1, s2):
    SYMMETRIC_CHARACTERS = ["W", "T", "Y", "U", "I", "O", "H", "A", "X", "V", "M", "w", "o", "x", "v", "0", "8", "=", "+", ":", "|", "-", "_", "*", "^", "!", ".", " "]
    MIRRORED_PAIRS = {
        "[": "]",
        "{": "}",
        "<": ">",
        "b": "d",
        "p": "q",
        "(": ")"
    }

    def is_mirrorable(s):
        for character in s:
            if character not in SYMMETRIC_CHARACTERS and character not in MIRRORED_PAIRS.keys() and character not in MIRRORED_PAIRS.values():
                return False

        return True

    if not is_mirrorable(s1) or not is_mirrorable(s2):
        return False

    def mirror_swap(character):
        mirrored_character = character

        for char, swap in MIRRORED_PAIRS.items():
            if char == character:
                mirrored_character = swap
                break

            if swap == character:
                mirrored_character = char
                break

        return mirrored_character

    return "".join(reversed([mirror_swap(character) for character in s1])) == s2

# --- TEST SUITE ---

tests_text = r'''
1. is_mirror_image("[HOW]", "[WOH]") should return True.
2. is_mirror_image("MOM", "MOM") should return True.
3. is_mirror_image("vow", "wov") should return True.
4. is_mirror_image("TIM", "TIM") should return False.
5. is_mirror_image("{WOW}", "}WOW{") should return False.
6. is_mirror_image("XXVII", "IIV%X") should return False.
7. is_mirror_image("><(((*>", "<*)))><") should return True.
8. is_mirror_image("WTYUIOHAXVMwoxv08=+:|-_*^!.[]{}<>bdpq()", "()pqbd<>{}[].!^*_-|:+=80vxowMVXAHOIUYTW") should return True.
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