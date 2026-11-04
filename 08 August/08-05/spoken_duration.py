from functools import reduce

def get_spoken_duration(seconds):
    SECONDS_IN_MINUTE = 60
    SECONDS_IN_HOUR = 3600

    hours = seconds // SECONDS_IN_HOUR
    minutes = (seconds - hours * SECONDS_IN_HOUR) // SECONDS_IN_MINUTE
    seconds = seconds - hours * SECONDS_IN_HOUR - minutes * SECONDS_IN_MINUTE

    duration_object = {}

    if hours:
        duration_object['hours'] = hours

    if minutes:
        duration_object['minutes'] = minutes

    if seconds:
        duration_object['seconds'] = seconds

    duration_dict = duration_object.items()

    def build_duration_spoken_string(duration_spoken, index_unit_value):
        index, unit_value = index_unit_value
        unit, value = unit_value
        
        if index == 0:
            return f"{duration_spoken}{value} {unit[:-1] if value == 1 else unit}"

        if 0 < index < len(duration_dict) - 1:
            return f"{duration_spoken}, {value} {unit[:-1] if value == 1 else unit}"

        return f"{duration_spoken} and {value} {unit[:-1] if value == 1 else unit}"

    return reduce(build_duration_spoken_string, enumerate(duration_dict), "")

# --- TEST SUITE ---

tests_text = r'''
1. get_spoken_duration(3723) should return "1 hour, 2 minutes and 3 seconds".
2. get_spoken_duration(7295) should return "2 hours, 1 minute and 35 seconds".
3. get_spoken_duration(8521) should return "2 hours, 22 minutes and 1 second".
4. get_spoken_duration(435) should return "7 minutes and 15 seconds".
5. get_spoken_duration(14455) should return "4 hours and 55 seconds".
6. get_spoken_duration(72000) should return "20 hours".
7. get_spoken_duration(1) should return "1 second".
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