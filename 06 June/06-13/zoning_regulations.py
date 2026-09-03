def get_zone_violations(grid):
    ZONING_RULES = {
        "i": ["R", "I"],
        "A": ["C"],
        "R": ["i", "C"],
        "I": ["i"],
        "C": ["R", "A"],
        "": ["no restrictions"]
    }
    violations = []

    for i, row in enumerate(grid):
        for j, building in enumerate(row):
            if j > 0 and row[j - 1] in ZONING_RULES[building] \
            or j < len(row) - 1 and row[j + 1] in ZONING_RULES[building] \
            or i > 0 and grid[i - 1][j] in ZONING_RULES[building] \
            or i < len(grid) - 1 and grid[i + 1][j] in ZONING_RULES[building]:
                violations.append([i, j])

    return violations

# --- TEST SUITE ---

tests_text = r'''
1. get_zone_violations([["R", "C"], ["", "C"]]) should return [[0, 0], [0, 1]].
2. get_zone_violations([["", "i"], ["", "R"], ["R", "I"]]) should return [[0, 1], [1, 1]].
3. get_zone_violations([["A", "i", "C"], ["A", "", "C"], ["R", "R", "I"]]) should return [].
4. get_zone_violations([["R", "R", "C", "R", "R"], ["R", "I", "C", "", "A"], ["R", "R", "", "i", "A"]]) should return [[0, 1], [0, 2], [0, 3]].
5. get_zone_violations([["R", "A", "A", "", "i", "i"], ["R", "I", "", "C", "i", "i"], ["R", "", "C", "C", "A", "A"], ["R", "R", "C", "I", "R", "R"]]) should return [[2, 3], [2, 4], [3, 1], [3, 2]].
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