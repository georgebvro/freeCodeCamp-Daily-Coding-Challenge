import datetime as dt

def get_movie_night_cost(day, showtime, number_of_tickets):
    PRICING_CONFIG = {
        'base_rules': [
            {
                'name': "Tuesday Exception",
                'condition': lambda day: day in ["Tuesday"],
                'price': 5,
                'fixed_price': True
            },
            {
                'name': "Weekday",
                'condition': lambda day: day in ["Monday", "Wednesday", "Thursday"],
                'price': 10
            },
            {
                'name': "Weekend",
                'condition': lambda day: day in ["Friday", "Saturday", "Sunday"],
                'price': 12
            }
        ],
        'modifiers': [
            {
                'name': "Matinee",
                'condition': lambda time: time < dt.time(17, 0),
                'adjust_price': lambda price: price - 2
            }
        ]
    }

    groups_dict = re.match(r"^(?P<hour>\d{1,2}):(?P<minute>\d{2})(?P<meridiem>am|pm)$", showtime).groupdict()
    
    if groups_dict['meridiem'] == "am":
        hour = 0 if groups_dict['hour'] == "12" else int(groups_dict['hour'])

    if groups_dict['meridiem'] == "pm":
        hour = 12 if groups_dict['hour'] == "12" else int(groups_dict['hour']) + 12

    time_object = dt.time(hour, int(groups_dict['minute']))
    
    rule = [rule for rule in PRICING_CONFIG['base_rules'] if rule['condition'](day)][0]
    ticket_price = rule['price']
    
    if not rule.get('fixed_price'):
        for modifier in PRICING_CONFIG['modifiers']:
            ticket_price = modifier['adjust_price'](ticket_price) if modifier['condition'](time_object) else ticket_price

    return f"${ticket_price * number_of_tickets:.2f}"

# --- TEST SUITE ---

tests_text = r'''
1. get_movie_night_cost("Saturday", "10:00pm", 1) should return "$12.00".
2. get_movie_night_cost("Sunday", "10:00am", 1) should return "$10.00".
3. get_movie_night_cost("Tuesday", "7:20pm", 2) should return "$10.00".
4. get_movie_night_cost("Wednesday", "5:40pm", 3) should return "$30.00".
5. get_movie_night_cost("Monday", "11:50am", 4) should return "$32.00".
6. get_movie_night_cost("Friday", "4:30pm", 5) should return "$50.00".
7. get_movie_night_cost("Tuesday", "11:30am", 1) should return "$5.00".
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