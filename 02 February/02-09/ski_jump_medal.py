def ski_jump_medal(distance_points, style_points, wind_comp, k_point_bonus):
    other_scores = [165.5, 172.0, 158.0, 180.0, 169.5, 175.0, 162.0, 170.0]
    other_scores.sort(reverse = True)
    my_score = distance_points + style_points + wind_comp + k_point_bonus

    return "Gold" if my_score > other_scores[0] \
        else "Silver" if my_score > other_scores[1] \
        else "Bronze" if my_score > other_scores[2] \
        else "No Medal"

# --- TEST SUITE ---

tests_text = r'''
1. ski_jump_medal(125.0, 58.0, 0.0, 6.0) should return "Gold".
2. ski_jump_medal(119.0, 50.0, 1.0, 4.0) should return "Bronze".
3. ski_jump_medal(122.0, 52.0, -1.0, 4.0) should return "Silver".
4. ski_jump_medal(118.0, 50.5, -1.5, 4.0) should return "No Medal".
5. ski_jump_medal(124.0, 50.5, 2.0, 5.0) should return "Gold".
6. ski_jump_medal(119.0, 49.5, 0.0, 3.0) should return "No Medal".
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