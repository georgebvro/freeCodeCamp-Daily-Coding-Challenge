import datetime as dt

def medication_reminder(medications, current_time):
    MEDICATION_SCHEDULE = {
        'Deployxitrin': { 'times': ["08:00", "16:00"] },
        'Debuggamanizole': { 'times': ["07:00", "13:00", "21:00"] },
        'Mergeflictamine': { 'hourInterval': 4 }
    }
    HOURS_IN_DAY = 24
    MINUTES_IN_HOUR = 60
    SECONDS_IN_MINUTE = 60

    dummy_date = dt.date(1, 1, 1)
    current_time_object = dt.datetime.combine(dummy_date, dt.time.fromisoformat(current_time))

    def calculate_next_times_for_all_medications(current_medication_and_last_time):
        current_medication, last_time = current_medication_and_last_time;
        
        scheduled_times_for_current_medication = [medication_schedule for medication_schedule in MEDICATION_SCHEDULE.items() if medication_schedule[0] == current_medication][0][1]

        if 'times' in scheduled_times_for_current_medication:
            smallest_duration_until_next_time_for_current_medication = \
                dt.datetime.combine(dummy_date, dt.time.fromisoformat(sorted(scheduled_times_for_current_medication['times'])[0])) - current_time_object \
                or dt.timedelta(seconds = HOURS_IN_DAY * MINUTES_IN_HOUR * SECONDS_IN_MINUTE - 1)

            for time in scheduled_times_for_current_medication['times']:
                duration_from_current_time_until_next_potential_medication = dt.datetime.combine(dummy_date, dt.time.fromisoformat(time)) - current_time_object

                if 0 < duration_from_current_time_until_next_potential_medication.seconds < smallest_duration_until_next_time_for_current_medication.seconds:
                    smallest_duration_until_next_time_for_current_medication = duration_from_current_time_until_next_potential_medication

            return [current_medication, smallest_duration_until_next_time_for_current_medication.seconds]

        if 'hourInterval' in scheduled_times_for_current_medication:
            durationFromCurrentTimeUntilNextMedication = (dt.datetime.combine(dummy_date, dt.time.fromisoformat(last_time)) + dt.timedelta(hours = scheduled_times_for_current_medication['hourInterval'])) - current_time_object

            return [current_medication, durationFromCurrentTimeUntilNextMedication.seconds]

    next_medication_name, duration_until_next_time = sorted(map(calculate_next_times_for_all_medications, medications), key = lambda medication_and_time: medication_and_time[1])[0]

    hours_until_next_time = duration_until_next_time // SECONDS_IN_MINUTE // MINUTES_IN_HOUR
    minutes_until_next_time = (duration_until_next_time - hours_until_next_time * MINUTES_IN_HOUR * SECONDS_IN_MINUTE) // SECONDS_IN_MINUTE

    return f"{next_medication_name} in {hours_until_next_time}h {minutes_until_next_time}m"

# --- TEST SUITE ---

tests_text = r'''
1. medication_reminder([["Deployxitrin", "08:00"], ["Debuggamanizole", "07:00"], ["Mergeflictamine", "10:00"]], "11:00") should return "Debuggamanizole in 2h 0m".
2. medication_reminder([["Deployxitrin", "08:00"], ["Debuggamanizole", "13:00"], ["Mergeflictamine", "14:00"]], "14:55") should return "Deployxitrin in 1h 5m".
3. medication_reminder([["Deployxitrin", "08:00"], ["Debuggamanizole", "13:00"], ["Mergeflictamine", "14:00"]], "17:15") should return "Mergeflictamine in 0h 45m".
4. medication_reminder([["Deployxitrin", "08:00"], ["Debuggamanizole", "07:00"], ["Mergeflictamine", "09:00"]], "12:59") should return "Debuggamanizole in 0h 1m".
5. medication_reminder([["Deployxitrin", "08:00"], ["Debuggamanizole", "21:00"], ["Mergeflictamine", "03:00"]], "06:55") should return "Debuggamanizole in 0h 5m".
6. medication_reminder([["Deployxitrin", "08:00"], ["Debuggamanizole", "07:00"], ["Mergeflictamine", "07:30"]], "08:00") should return "Mergeflictamine in 3h 30m".
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