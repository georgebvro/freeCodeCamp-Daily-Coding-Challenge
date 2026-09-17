def exact_change(amount):
# Bottom-up approach using tabulation (iterative solution)
#    DENOMINATIONS = [1, 5, 10, 25]
#
#    distinct_ways = [1 if i == 0 else 0 for i in range(amount + 1)]
#
#    for denomination in DENOMINATIONS:
#        for i in range(denomination, amount + 1):
#            distinct_ways[i] += distinct_ways[i - denomination]
#
#    return distinct_ways[amount]

# Top-down approach using memoization (recursive solution)
    DENOMINATIONS = [25, 10, 5, 1]
    cache = {}

    def count_ways(amount_remaining, coin_index):
        key = amount_remaining, coin_index

        if key in cache:
            return cache[key]
        
        if amount_remaining == 0:
            cache[key] = 1
            return 1

        distinct_ways_count = 0

        for i in range(coin_index, len(DENOMINATIONS)):
            if DENOMINATIONS[i] <= amount_remaining:
                distinct_ways_count += count_ways(amount_remaining - DENOMINATIONS[i], i)

        cache[key] = distinct_ways_count

        return distinct_ways_count

    return count_ways(amount, 0)

# --- TEST SUITE ---

tests_text = r'''
1. exact_change(3) should return 1.
2. exact_change(9) should return 2.
3. exact_change(17) should return 6.
4. exact_change(39) should return 24.
5. exact_change(61) should return 73.
6. exact_change(99) should return 213.
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