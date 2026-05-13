def is_fizz_buzz(arr):
    integers_list = []

    for i, element in enumerate(arr):
        if not is_integer(element):
            integer_determined = False

            for j in reversed(range(i)):
                if is_integer(arr[j]):
                    integers_list.append(arr[j] + i - j)
                    integer_determined = True
                    break

            if not integer_determined:
                for j in range(i + 1, len(arr)):
                    if is_integer(arr[j]):
                        integers_list.append(arr[j] - (j - i))
                        break
        else:
            integers_list.append(element)

    for i, integer in enumerate(integers_list):
        correct_value = integer

        if not integer % 3 and not integer % 5:
            correct_value = "FizzBuzz"
        elif not integer % 3:
            correct_value = "Fizz"
        elif not integer % 5:
            correct_value = "Buzz"

        if arr[i] != correct_value:
            return False

    return True

def is_integer(element):
    try:
        int(element)
    except ValueError:
        return False
    else:
        return True

# --- TEST SUITE ---

tests_text = r'''
1. is_fizz_buzz([1, 2, "Fizz", 4, "Buzz"]) should return True.
2. is_fizz_buzz([13, 14, "FizzBuzz", 16, 17]) should return True.
3. is_fizz_buzz([1, 2, "Fizz", 4, 5]) should return False.
4. is_fizz_buzz(["FizzBuzz", 16, 17, "Fizz", 19, "Buzz"]) should return True.
5. is_fizz_buzz([1, 2, "Fizz", "Buzz", 5]) should return False.
6. is_fizz_buzz([97, 98, "Buzz", "Fizz", 101, "Fizz", 103]) should return False.
7. is_fizz_buzz(["Fizz", "Buzz", 101, "Fizz", 103, 104, "FizzBuzz"]) should return True.
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