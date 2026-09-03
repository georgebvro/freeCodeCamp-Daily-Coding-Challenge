def smallest_gap(s):
    smallest_gap_size = float('inf')
    smallest_gap_contents = ""

    for i in range(len(s) - 1):
        for j in range(i + 1, len(s)):
            gap_size = j - i - 1
            
            if s[i] == s[j] and gap_size < smallest_gap_size:
                smallest_gap_size = gap_size
                smallest_gap_contents = s[i + 1:j]
                break

    return smallest_gap_contents

# --- TEST SUITE ---

tests_text = r'''
1. smallest_gap("ABCDAC") should return "DA".
2. smallest_gap("racecar") should return "e".
3. smallest_gap("A{5e^SD*F4i!o#q6e&rkf(po8|we9+kr-2!3}=4") should return "#q6e&rkf(p".
4. smallest_gap("Hello World") should return "".
5. smallest_gap("The quick brown fox jumps over the lazy dog.") should return "fox".
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