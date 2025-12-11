def mile_pace(miles, duration):
    duration_split = duration.split(":")

    duration_total_seconds = int(duration_split[0]) * 60 + int(duration_split[1])
    average_seconds_per_mile = int(duration_total_seconds / miles)

    average_time_minutes = int(average_seconds_per_mile / 60)
    average_time_seconds = average_seconds_per_mile % 60

    if average_time_minutes < 10:
        average_time_minutes = '0' + str(average_time_minutes)
    if average_time_seconds < 10:
        average_time_seconds = '0' + str(average_time_seconds)

    average_time = str(average_time_minutes) + ":" + str(average_time_seconds)

    #print(duration_split, duration_total_seconds, average_seconds_per_mile, average_time_minutes, average_time_seconds, average_time)

    return average_time

print(mile_pace(3, "24:00"))
print(mile_pace(1, "06:45"))
print(mile_pace(2, "07:00"))
print(mile_pace(26.2, "120:35"))
print(mile_pace(1, "00:00"))

# --- TEST SUITE ---

tests_text = '''
1. mile_pace(3, "24:00") should return "08:00".
2. mile_pace(1, "06:45") should return "06:45".
3. mile_pace(2, "07:00") should return "03:30".
4. mile_pace(26.2, "120:35") should return "04:36".
'''

import re

tests_regex = re.compile(r"(?P<number>\d+)\.\s(?P<function_call>.+) should return (?P<output>.+)\.$", re.MULTILINE)
test_data = [item.groupdict() for item in re.finditer(tests_regex, tests_text)]

def run_tests(test_data):
    print("--------------------------")
    print("🧪 Starting Verification...")
    print("--------------------------")

    all_passed = True
    fail_count = 0

    for test in test_data:
        function_call_output = eval(test['function_call'])
        test_output = eval(test['output'])
        
        if function_call_output == test_output:
            print(f"{test['number']}.✅ PASS - Function Call:\n{test['function_call']}")
        else:
            print(f"{test['number']}.❌ FAIL - Function Call:\n{test['function_call']}\nExpected:\n{test_output}\nGot:\n{function_call_output}")
            all_passed = False
            fail_count += 1

    print("----------------------------");

    if (all_passed):
        print("🎉 SUCCESS: All tests PASSED.");
    else:
        print(f"⚠️ WARNING: {fail_count}/{len(test_data)} tests FAILED.");

run_tests(test_data)