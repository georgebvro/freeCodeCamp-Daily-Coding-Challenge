def mix_paint(bucket1, bucket2):

    return [
        round((bucket1['color'][0] * bucket1['fullness'] + bucket2['color'][0] * bucket2['fullness']) / (bucket1['fullness'] + bucket2['fullness'])),
        round((bucket1['color'][1] * bucket1['fullness'] + bucket2['color'][1] * bucket2['fullness']) / (bucket1['fullness'] + bucket2['fullness'])),
        round((bucket1['color'][2] * bucket1['fullness'] + bucket2['color'][2] * bucket2['fullness']) / (bucket1['fullness'] + bucket2['fullness']))
    ]

# --- TEST SUITE ---

tests_text = r'''
1. mix_paint({"color": [250, 250, 250], "fullness": 50}, {"color": [0, 0, 0], "fullness": 50}) should return [125, 125, 125].
2. mix_paint({"color": [250, 250, 250], "fullness": 80}, {"color": [0, 0, 0], "fullness": 20}) should return [200, 200, 200].
3. mix_paint({"color": [100, 150, 200], "fullness": 30}, {"color": [100, 150, 200], "fullness": 70}) should return [100, 150, 200].
4. mix_paint({"color": [143, 143, 101], "fullness": 45}, {"color": [100, 204, 204], "fullness": 90}) should return [114, 184, 170].
5. mix_paint({"color": [15, 134, 249], "fullness": 29}, {"color": [97, 178, 55], "fullness": 54}) should return [68, 163, 123].
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