def triage_issue(title, labels):
    updated_labels = []

    if len(labels) == 0:
        if "error" in title or "bug" in title:
            updated_labels = ["bug", "needs triage"]

        if "feature" in title or "add" in title:
            updated_labels = ["enhancement", "discussing"]

    if "needs triage" in labels or "discussing" in labels:
        if "needs triage" in labels and ("simple" in title or "easy" in title):
            updated_labels = [label for label in labels if label != "needs triage"] + ["good first issue"]
        elif "discussing" in labels and ("planned" in title or "next" in title):
            updated_labels = [label for label in labels if label != "discussing"] + ["on the roadmap"]
        else:
            updated_labels = [label for label in labels if label != "needs triage" and label != "discussing"] + ["help wanted"]

    return updated_labels + ["critical"] if "security" in title else updated_labels

# --- TEST SUITE ---

tests_text = r'''
1. triage_issue("app crashes with error", []) should return ["bug", "needs triage"].
2. triage_issue("app crashes with error", ["bug", "needs triage"]) should return ["bug", "help wanted"].
3. triage_issue("add dark mode", []) should return ["enhancement", "discussing"].
4. triage_issue("add dark mode", ["enhancement", "discussing"]) should return ["enhancement", "help wanted"].
5. triage_issue("xss security bug", []) should return ["bug", "needs triage", "critical"].
6. triage_issue("security vulnerability in auth", []) should return ["critical"].
7. triage_issue("easy a11y fix", ["bug", "needs triage"]) should return ["bug", "good first issue"].
8. triage_issue("planned api migration", ["enhancement", "discussing"]) should return ["enhancement", "on the roadmap"].
9. triage_issue("improve security", ["enhancement", "discussing"]) should return ["enhancement", "help wanted", "critical"].
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