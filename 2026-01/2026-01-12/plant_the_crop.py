import math

def get_number_of_plants(field_size, unit, crop):
    ACRES_TO_SQUARE_METERS_CONVERSION_RATE = 4046.86
    HECTARES_TO_SQUARE_METERS_CONVERSION_RATE = 10000
    crop_areas = {
        'corn': 1,
        'wheat': 0.1,
        'soybeans': 0.5,
        'tomatoes': 0.25,
        'lettuce': 0.2
    }

    field_size_square_meters = \
        field_size * ACRES_TO_SQUARE_METERS_CONVERSION_RATE if unit == 'acres' else \
        field_size * HECTARES_TO_SQUARE_METERS_CONVERSION_RATE if unit == 'hectares' else \
        None

    return math.floor(field_size_square_meters / crop_areas[crop])

# --- TEST SUITE ---

tests_text = r'''
1. get_number_of_plants(1, "acres", "corn") should return 4046.
2. get_number_of_plants(2, "hectares", "lettuce") should return 100000.
3. get_number_of_plants(20, "acres", "soybeans") should return 161874.
4. get_number_of_plants(3.75, "hectares", "tomatoes") should return 150000.
5. get_number_of_plants(16.75, "acres", "tomatoes") should return 271139.
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