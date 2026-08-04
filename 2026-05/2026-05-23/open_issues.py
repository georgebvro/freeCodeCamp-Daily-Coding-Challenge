def get_open_issues(issues, prs):
    def remains_open(issue):
        issue = str(issue)

        for i in range(len(issue)):
            issue_rotation = issue[i:] + issue[0:i]
            
            for pr in prs:
                pr = str(pr)

                if issue == pr:
                    continue

                for j in range(len(pr)):
                    pr_rotation = pr[j:] + pr[0:j]

                    if int(issue_rotation) == int(pr_rotation):
                        return False

        return True

    return list(filter(remains_open, issues))

# --- TEST SUITE ---

tests_text = r'''
1. get_open_issues([123, 234], [231]) should return [234].
2. get_open_issues([123, 345, 16], [345, 231]) should return [345, 16].
3. get_open_issues([456, 332, 12, 15], [201, 945, 180]) should return [456, 332, 15].
4. get_open_issues([12, 115, 296, 170, 24], [17, 18, 19, 20, 21]) should return [115, 296, 24].
5. get_open_issues([19, 95, 422, 395, 754, 102, 296, 709, 237, 4400, 1802], [395, 440, 9001, 95, 242, 21, 287, 169, 14]) should return [95, 395, 754, 296, 709, 237, 1802].
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