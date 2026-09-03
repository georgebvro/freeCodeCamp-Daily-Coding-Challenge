def get_fastest_speed(times):
    track_segments_meters = [320, 280, 350, 300, 250]
    segment_speeds = list(map(lambda a, b: a / b, track_segments_meters, times))

    highest_speed = max(segment_speeds)
    fastest_segment = segment_speeds.index(highest_speed) + 1

    return f"The luger's fastest speed was {highest_speed:.2f} m/s on segment {fastest_segment}."

# --- TEST SUITE ---

tests_text = r'''
1. get_fastest_speed([9.523, 8.234, 10.012, 9.001, 7.128]) should return "The luger's fastest speed was 35.07 m/s on segment 5."
2. get_fastest_speed([9.381, 7.417, 9.912, 8.815, 7.284]) should return "The luger's fastest speed was 37.75 m/s on segment 2."
3. get_fastest_speed([8.890, 7.601, 9.093, 8.392, 6.912]) should return "The luger's fastest speed was 38.49 m/s on segment 3."
4. get_fastest_speed([8.490, 7.732, 10.103, 8.489, 6.840]) should return "The luger's fastest speed was 37.69 m/s on segment 1."
5. get_fastest_speed([8.204, 7.230, 9.673, 7.645, 6.508]) should return "The luger's fastest speed was 39.24 m/s on segment 4."
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