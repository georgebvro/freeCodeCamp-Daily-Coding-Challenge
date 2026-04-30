def is_valid_equation(equation):
    regex = r"\d+|[/+*=-]"
    equation_list = [parse_op(match[0]) for match in re.finditer(regex, equation)]

    while any(operator in equation_list for operator in ["*", "/"]):
        for index, op in enumerate(equation_list):
            new_value = None

            if equation_list[index] == "*":
                new_value = equation_list[index - 1] * equation_list[index + 1]

            if equation_list[index] == "/":
                new_value = equation_list[index - 1] / equation_list[index + 1]

            if new_value != None:
                del equation_list[index - 1:index + 2]
                equation_list.insert(index - 1, new_value)
                break

    while any(operator in equation_list for operator in ["+", "-"]):
        for index, op in enumerate(equation_list):
            new_value = None

            if equation_list[index] == "+":
                new_value = equation_list[index - 1] + equation_list[index + 1]

            if equation_list[index] == "-":
                new_value = equation_list[index - 1] - equation_list[index + 1]

            if new_value != None:
                del equation_list[index - 1:index + 2]
                equation_list.insert(index - 1, new_value)
                break

    return equation_list[0] == equation_list[-1]

def parse_op(op):
    try:
        parsed_op = int(op)
    except ValueError:
        parsed_op = op
    finally:
        return parsed_op

# --- TEST SUITE ---

tests_text = r'''
1. is_valid_equation("2 + 2 = 4") should return True.
2. is_valid_equation("2 + 3 - 1 = 4") should return True.
3. is_valid_equation("8 / 2 = 4") should return True.
4. is_valid_equation("10 * 5 = 50") should return True.
5. is_valid_equation("2 - 2 = 0") should return True.
6. is_valid_equation("2 + 9 / 3 = 5") should return True.
7. is_valid_equation("20 - 2 * 3 = 14") should return True.
8. is_valid_equation("2 + 5 = 6") should return False.
9. is_valid_equation("10 - 2 * 3 = 24") should return False.
10. is_valid_equation("3 + 9 / 3 = 4") should return False.
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