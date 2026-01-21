def find_left_handed_seats(table):
    possible_seats = 0

    for row_index, row in enumerate(table):
        seat_to_check_index_offset = 1 if row_index == 0 else -1

        for seat_index, seat in enumerate(row):
            if seat == "U":
                seat_to_check_index = seat_index + seat_to_check_index_offset
                
                if seat_to_check_index in range(len(row)):
                    if row[seat_to_check_index] != "R":
                        possible_seats += 1
                else:
                    possible_seats += 1

    return possible_seats

# --- TEST SUITE ---

tests_text = r'''
1. find_left_handed_seats([["U", "R", "U", "L"], ["U", "R", "R", "R"]]) should return 2.
2. find_left_handed_seats([["U", "U", "U", "U"], ["U", "U", "U", "U"]]) should return 8.
3. find_left_handed_seats([["U", "R", "U", "R"], ["L", "R", "R", "U"]]) should return 0.
4. find_left_handed_seats([["L", "U", "R", "R"], ["L", "U", "R", "R"]]) should return 1.
5. find_left_handed_seats([["U", "R", "U", "U"], ["U", "U", "L", "U"]]) should return 5.
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