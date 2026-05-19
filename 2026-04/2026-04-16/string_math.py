def do_math(s):
    array = [int(match[0]) if is_integer(match[0]) else match[0] for match in re.finditer(r"\d+|[^\d]+", s)]
    result = array[0] if is_integer(array[0]) else array[1]

    for index, element in enumerate(array):
        if not is_integer(element):
            if (index != 0 and index != len(array) - 1):
                result += (-1 if len(element) % 2 else 1) * array[index + 1]

    return result

def is_integer(element):
    try:
        int(element)
    except (ValueError, TypeError):
        return False
    else:
        return True

# --- TEST SUITE ---

tests_text = r'''
1. do_math("3ab10c8") should return 5.
2. do_math("6MINUS4") should return 2.
3. do_math("9plus3") should return 12.
4. do_math("5fkwo#10i#%.<>15P=@20!#B/25") should return 15.
5. do_math("a.67,1$lk6ldf34@#LD@]2d32d2'2l3,@l3L#@2gh35s09if=df#$t9sm49t0df3$^%[vc;:0:4mt") should return 67.
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