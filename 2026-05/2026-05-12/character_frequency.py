def get_frequency(s):
    frequencies = {}

    for character in list(s):
        try:
            frequencies[character] += 1
        except KeyError:
            frequencies[character] = 1

    return frequencies

# --- TEST SUITE ---

tests_text = r'''
1. get_frequency("test") should return {"t": 2, "e": 1, "s": 1}.
2. get_frequency("mississippi") should return {"m": 1, "i": 4, "s": 4, "p": 2}.
3. get_frequency("hello world") should return {"h": 1, "e": 1, "l": 3, "o": 2, " ": 1, "w": 1, "r": 1, "d": 1}.
4. get_frequency("She sells seashells by the seashore.") should return {"S": 1, "h": 4, "e": 7, " ": 5, "s": 7, "l": 4, "a": 2, "b": 1, "y": 1, "t": 1, "o": 1, "r": 1, ".": 1}.
5. get_frequency("The quick brown fox jumps over the lazy dog.") should return {"T": 1, "h": 2, "e": 3, " ": 8, "q": 1, "u": 2, "i": 1, "c": 1, "k": 1, "b": 1, "r": 2, "o": 4, "w": 1, "n": 1, "f": 1, "x": 1, "j": 1, "m": 1, "p": 1, "s": 1, "v": 1, "t": 1, "l": 1, "a": 1, "z": 1, "y": 1, "d": 1, "g": 1, ".": 1}.
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