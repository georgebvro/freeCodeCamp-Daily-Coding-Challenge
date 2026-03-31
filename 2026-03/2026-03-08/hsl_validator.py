def is_valid_hsl(hsl):
    match_result = re.match(r"^hsl\( *(?P<hue>\d{1,3}) *, *(?P<saturation>\d{1,3})% *, *(?P<lightness>\d{1,3})% *\) *;?$", hsl)

    if not match_result:
        return False

    groups_dict = match_result.groupdict()
    hue = int(groups_dict['hue'])
    saturation = int(groups_dict['saturation'])
    lightness = int(groups_dict['lightness'])
    
    if 0 <= hue <= 360 and 0 <= saturation <= 100 and 0 <= lightness <= 100:
        return True
    else:
        return False
        

# --- TEST SUITE ---

tests_text = r'''
1. is_valid_hsl("hsl(240, 50%, 50%)") should return True.
2. is_valid_hsl("hsl( 200 , 50% , 75% )") should return True.
3. is_valid_hsl("hsl(99,60%,80%);") should return True.
4. is_valid_hsl("hsl(0, 0%, 0%) ;") should return True.
5. is_valid_hsl("hsl(  10  ,  20%   ,  30%   )    ;") should return True.
6. is_valid_hsl("hsl(361, 50%, 80%)") should return False.
7. is_valid_hsl("hsl(300, 101%, 70%)") should return False.
8. is_valid_hsl("hsl(200, 55%, 75)") should return False.
9. is_valid_hsl("hsl (80, 20%, 10%)") should return False.
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