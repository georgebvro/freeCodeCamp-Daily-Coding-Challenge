def get_streaming_bill(cart, subscription):
    MOVIE_COSTS = {
        'HD': { 'rent': 3.99, 'buy': 12.99 },
        '4K': { 'rent': 5.99, 'buy': 19.99 }
    }
    DISCOUNTS = {
        'none': 0,
        'basic': 10,
        'premium': 25
    }

    total = sum([MOVIE_COSTS[movie['format']][movie['type']] for movie in cart])

    return f"${total * (100 - DISCOUNTS[subscription]) / 100:.2f}"

# --- TEST SUITE ---

tests_text = r'''
1. get_streaming_bill([{ "format": "HD", "type": "rent" }], "none") should return "$3.99".
2. get_streaming_bill([{ "format": "HD", "type": "buy" }], "premium") should return "$9.74".
3. get_streaming_bill([{ "format": "HD", "type": "rent" }, { "format": "HD", "type": "rent" }, { "format": "HD", "type": "buy" }], "basic") should return "$18.87".
4. get_streaming_bill([{ "format": "4K", "type": "buy" }, { "format": "4K", "type": "buy" }, { "format": "4K", "type": "buy" }], "premium") should return "$44.98".
5. get_streaming_bill([{ "format": "HD", "type": "rent" }, { "format": "4K", "type": "rent" }, { "format": "HD", "type": "buy" }, { "format": "4K", "type": "buy" }], "none") should return "$42.96".
6. get_streaming_bill([{ "format": "HD", "type": "rent" }, { "format": "4K", "type": "rent" }, { "format": "HD", "type": "buy" }, { "format": "4K", "type": "buy" }], "basic") should return "$38.66".
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