def space_jam(s):
    import re
    
    return re.sub(r"(.)", "\g<1>  ", s.replace(" ", "")).upper()[:-2]

print(space_jam("freeCodeCamp"))
print(space_jam("   free   Code   Camp   "))
print(space_jam("Hello World?!"))
print(space_jam("C@t$ & D0g$"))
print(space_jam("allyourbase"))

# --- TEST SUITE ---

tests_text = '''
1. space_jam("freeCodeCamp") should return "F  R  E  E  C  O  D  E  C  A  M  P".
2. space_jam("   free   Code   Camp   ") should return "F  R  E  E  C  O  D  E  C  A  M  P".
3. space_jam("Hello World?!") should return "H  E  L  L  O  W  O  R  L  D  ?  !".
4. space_jam("C@t$ & D0g$") should return "C  @  T  $  &  D  0  G  $".
5. space_jam("allyourbase") should return "A  L  L  Y  O  U  R  B  A  S  E".
'''

import re

tests_regex = re.compile(r"(?P<number>\d+)\.\s(?P<function_call>.+) should return (?P<output>.+)\.$", re.MULTILINE)
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