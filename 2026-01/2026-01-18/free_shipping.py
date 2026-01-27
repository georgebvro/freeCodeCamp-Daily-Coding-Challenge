def gets_free_shipping(cart, minimum):
    item_prices = {
        'shirt': 34.25,
        'jeans': 48.50,
        'shoes': 75.00,
        'hat': 19.95,
        'socks': 15.00,
        'jacket': 109.95
    }

    return sum(item_prices[item] for item in cart) >= minimum

# --- TEST SUITE ---

tests_text = r'''
1. gets_free_shipping(["shoes"], 50) should return True.
2. gets_free_shipping(["hat", "socks"], 50) should return False.
3. gets_free_shipping(["jeans", "shirt", "jacket"], 75) should return True.
4. gets_free_shipping(["socks", "socks", "hat"], 75) should return False.
5. gets_free_shipping(["shirt", "shirt", "jeans", "socks"], 100) should return True.
6. gets_free_shipping(["hat", "socks", "hat", "jeans", "shoes", "hat"], 200) should return False.
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