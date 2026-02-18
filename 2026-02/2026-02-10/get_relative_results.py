from datetime import timedelta
import re

def get_relative_results(results):
    results_timedeltas = [string_to_timedelta(result) for result in results]

    return [timedelta_to_time_behind_winner(index, result, results_timedeltas[0]) for index, result in enumerate(results_timedeltas)]

def string_to_timedelta(duration_string):
    regex = re.compile(r"^(?P<hours>\d):(?P<minutes>\d{2}):(?P<seconds>\d{2})$")
    groups_dict = re.match(regex, duration_string)

    return timedelta(hours = int(groups_dict['hours']), minutes = int(groups_dict['minutes']), seconds = int(groups_dict['seconds']))

def timedelta_to_time_behind_winner(index, duration_timedelta, time_winner):
    if index == 0:
        return "0"

    time_behind_winner = duration_timedelta - time_winner

    minutes, seconds = divmod(time_behind_winner.total_seconds(), 60)

    return f"+{int(minutes)}:{int(seconds):02}"

print(get_relative_results(["1:25:32", "1:26:10", "1:27:05"]))
print(get_relative_results(["1:00:01", "1:00:05", "1:00:10"]))
print(get_relative_results(["1:10:06", "1:10:23", "1:10:48", "1:12:11"]))
print(get_relative_results(["0:49:13", "0:49:15", "0:50:14", "0:51:30", "0:51:58", "0:52:16", "0:53:12", "0:53:31", "0:56:19", "1:02:20"]))
print(get_relative_results(["2:01:15", "2:10:45", "2:10:53", "2:11:04", "2:11:55", "2:13:27", "2:14:30", "2:15:10"]))

# --- TEST SUITE ---

tests_text = r'''
1. get_relative_results(["1:25:32", "1:26:10", "1:27:05"]) should return ["0", "+0:38", "+1:33"].
2. get_relative_results(["1:00:01", "1:00:05", "1:00:10"]) should return ["0", "+0:04", "+0:09"].
3. get_relative_results(["1:10:06", "1:10:23", "1:10:48", "1:12:11"]) should return ["0", "+0:17", "+0:42", "+2:05"].
4. get_relative_results(["0:49:13", "0:49:15", "0:50:14", "0:51:30", "0:51:58", "0:52:16", "0:53:12", "0:53:31", "0:56:19", "1:02:20"]) should return ["0", "+0:02", "+1:01", "+2:17", "+2:45", "+3:03", "+3:59", "+4:18", "+7:06", "+13:07"].
5. get_relative_results(["2:01:15", "2:10:45", "2:10:53", "2:11:04", "2:11:55", "2:13:27", "2:14:30", "2:15:10"]) should return ["0", "+9:30", "+9:38", "+9:49", "+10:40", "+12:12", "+13:15", "+13:55"].
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