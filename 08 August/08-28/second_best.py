def get_laptop_cost(laptops, budget):
    prices = laptops[:]
    prices.sort(reverse = True)
    prices = list(dict.fromkeys(prices))

    if len(prices) >= 2 and prices[1] <= budget:
        return prices[1]

    else:
        for i in range(2, len(prices) - 1):
            if prices[i] <= budget:
                return prices[i]

    return 0

print(get_laptop_cost([1500, 2000, 1800, 1400], 1900))
print(get_laptop_cost([1500, 2000, 2000, 1800, 1400], 1900))
print(get_laptop_cost([2099, 1599, 1899, 1499], 2200))
print(get_laptop_cost([2099, 1599, 1899, 1499], 1000))
print(get_laptop_cost([1200, 1500, 1600, 1800, 1400, 2000], 1450))
print(get_laptop_cost([1000, 2000], 500))
print(get_laptop_cost([1000, 2000], 3000))
print(get_laptop_cost([1000, 2000], 1500))
print(get_laptop_cost([1000], 1500))

# --- TEST SUITE ---

tests_text = '''
1. get_laptop_cost([1500, 2000, 1800, 1400], 1900) should return 1800
2. get_laptop_cost([1500, 2000, 2000, 1800, 1400], 1900) should return 1800
3. get_laptop_cost([2099, 1599, 1899, 1499], 2200) should return 1899
4. get_laptop_cost([2099, 1599, 1899, 1499], 1000) should return 0
5. get_laptop_cost([1200, 1500, 1600, 1800, 1400, 2000], 1450) should return 1400
'''

import re

tests_regex = re.compile(r"(?P<number>\d+)\.\s(?P<function_call>.+) should return (?P<output>.+?)\.?$", re.MULTILINE)
test_data = [item.groupdict() for item in re.finditer(tests_regex, tests_text)]

def run_tests(test_data):
    print("--------------------------")
    print("🧪 Starting Verification...")
    print("--------------------------")

    all_passed = True
    fail_count = 0

    for test in test_data:
        function_call_output = eval(test['function_call'])
        test_output = eval(test['output'])
        
        if function_call_output == test_output:
            print(f"{test['number']}.✅ PASS - Function Call:\n{test['function_call']}")
        else:
            print(f"{test['number']}.❌ FAIL - Function Call:\n{test['function_call']}\nExpected:\n{test_output}\nGot:\n{function_call_output}")
            all_passed = False
            fail_count += 1

    print("----------------------------");

    if (all_passed):
        print("🎉 SUCCESS: All tests PASSED.");
    else:
        print(f"⚠️ WARNING: {fail_count}/{len(test_data)} tests FAILED.");

run_tests(test_data)