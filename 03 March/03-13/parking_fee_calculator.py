from datetime import time
import math

def calculate_parking_fee(park_time, pickup_time):
    park_time_object = time.fromisoformat(park_time)
    pickup_time_object = time.fromisoformat(pickup_time)
    hourly_fee = 3
    overnight_fee = 10
    minimum_fee = 5

    park_time_minutes_since_midnight = park_time_object.hour * 60 + park_time_object.minute
    pickup_time_minutes_since_midnight = pickup_time_object.hour * 60 + pickup_time_object.minute
    parking_duration_minutes = pickup_time_minutes_since_midnight - park_time_minutes_since_midnight
    overnight_parking = True if parking_duration_minutes < 0 else False

    parking_duration_minutes = parking_duration_minutes % 1440
    parking_hours = math.ceil(parking_duration_minutes / 60)

    parking_fee = parking_hours * hourly_fee
    parking_fee = parking_fee + overnight_fee if overnight_parking else parking_fee
    parking_fee = minimum_fee if parking_fee < minimum_fee else parking_fee

    return f"${parking_fee}"

# --- TEST SUITE ---

tests_text = r'''
1. calculate_parking_fee("09:00", "11:00") should return "$6".
2. calculate_parking_fee("10:00", "10:30") should return "$5".
3. calculate_parking_fee("08:10", "10:45") should return "$9".
4. calculate_parking_fee("14:40", "23:10") should return "$27".
5. calculate_parking_fee("18:15", "01:30") should return "$34".
6. calculate_parking_fee("11:11", "11:10") should return "$82".
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