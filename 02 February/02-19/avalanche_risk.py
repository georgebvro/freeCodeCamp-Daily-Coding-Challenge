def avalanche_risk(snow_depth, slope):
    # Solution using nested object
    avalanche_risk = {
        'Gentle'    : { 'Shallow': "Safe", 'Moderate': "Safe" , 'Deep': "Safe"  },
        'Steep'     : { 'Shallow': "Safe", 'Moderate': "Risky", 'Deep': "Risky" },
        'Very Steep': { 'Shallow': "Safe", 'Moderate': "Risky", 'Deep': "Risky" }
    }

    return avalanche_risk[slope][snow_depth]

    # Solution using matrix
    #slope_index = { 'Gentle': 0, 'Steep': 1, 'Very Steep': 2 }
    #depth_index = { 'Shallow': 0, 'Moderate': 1, 'Deep': 2 }

    #avalanche_risk = [
    #    ["Safe", "Safe", "Safe"],
    #    ["Safe", "Risky", "Risky"],
    #    ["Safe", "Risky", "Risky"]
    #]

    #return avalanche_risk[slope_index[slope]][depth_index[snow_depth]]

# --- TEST SUITE ---

tests_text = r'''
1. avalanche_risk("Shallow", "Gentle") should return "Safe".
2. avalanche_risk("Shallow", "Steep") should return "Safe".
3. avalanche_risk("Shallow", "Very Steep") should return "Safe".
4. avalanche_risk("Moderate", "Gentle") should return "Safe".
5. avalanche_risk("Moderate", "Steep") should return "Risky".
6. avalanche_risk("Moderate", "Very Steep") should return "Risky".
7. avalanche_risk("Deep", "Gentle") should return "Safe".
8. avalanche_risk("Deep", "Steep") should return "Risky".
9. avalanche_risk("Deep", "Very Steep") should return "Risky".
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