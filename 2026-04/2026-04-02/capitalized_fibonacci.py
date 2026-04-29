def capitalize_fibonacci(s):
    FIBONACCI_START_SEQUENCE = [0, 1]
    fibonacci_sequence = generate_fibonacci_sequence(FIBONACCI_START_SEQUENCE, len(s))
    
    return "".join([c.upper() if i in fibonacci_sequence else c.lower() for i, c in enumerate([*s])])

def generate_fibonacci_sequence(sequence, n):
    if sequence[-1] >= n:
        return sequence

    return generate_fibonacci_sequence([*sequence, sequence[-2] + sequence[-1]], n)

# --- TEST SUITE ---

tests_text = r'''
1. capitalize_fibonacci("hello world") should return "HELLo woRld".
2. capitalize_fibonacci("HELLO WORLD") should return "HELLo woRld".
3. capitalize_fibonacci("hello, world!") should return "HELLo, wOrld!".
4. capitalize_fibonacci("The quick brown fox jumped over the lazy dog.") should return "THE qUicK broWn fox jUmped over thE lazy dog.".
5. capitalize_fibonacci("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar ex nibh, vel ullamcorper ligula egestas quis. Integer tincidunt fringilla accumsan. Integer et metus placerat, gravida felis at, pellentesque nisl.") should return "LOREm ipSum dOlor sit amet, consecTetur adipiscing elit. proin pulvinar ex nibh, vel ullaMcorper ligula egestas quis. integer tincidunt fringillA accumsan. integer et metus placerat, gravida felis at, pellentesque nisl.".
'''

import re

tests_regex = re.compile(r"(?P<number>\d+)\.\s(?P<function_call>.+) should return (?P<output>.+?)\.?$", re.MULTILINE)
test_data = [item.groupdict() for item in re.finditer(tests_regex, tests_text)]

def run_tests(test_data):
    print("--------------------------")
    print("🧪 Starting Verification...")
    print("--------------------------")

    fail_count = 0

    for test in test_data:
        function_call_output = eval(test['function_call'])
        test_output = eval(test['output'])
        
        if function_call_output == test_output:
            print(f"{test['number']}.✅ PASS - Function Call:\n{test['function_call']}")
        else:
            print(f"{test['number']}.❌ FAIL - Function Call:\n{test['function_call']}\nExpected:\n{test_output}\nGot:\n{function_call_output}")
            fail_count += 1

    print("----------------------------",
        f"\n⚠️ WARNING: {fail_count}/{len(test_data)} tests FAILED." if fail_count
        else "\n🎉 SUCCESS: All tests PASSED."
    )

run_tests(test_data)