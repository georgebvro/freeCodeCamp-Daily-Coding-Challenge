def generate_snowflake(crystals):

    return "\n".join([snowflake_part + snowflake_part[::-1] for snowflake_part in crystals.split("\n")])

# --- TEST SUITE ---

tests_text = r'''
1. generate_snowflake("* \n *\n* ") should return "*  *\n ** \n*  *".
2. generate_snowflake("X=~") should return "X=~~=X".
3. generate_snowflake(" X  \n  v \nX--=\n  ^ \n X  ") should return " X    X \n  v  v  \nX--==--X\n  ^  ^  \n X    X ".
4. generate_snowflake("*   *\n * * \n* * *\n * * \n*   *") should return "*   **   *\n * *  * * \n* * ** * *\n * *  * * \n*   **   *".
5. generate_snowflake("*  -\n * -\n*  -") should return "*  --  *\n * -- * \n*  --  *".
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