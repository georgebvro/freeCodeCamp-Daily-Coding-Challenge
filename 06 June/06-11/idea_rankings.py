def analyze_ideas(ideas):
    
    return [idea[0] for idea in sorted(ideas, key = lambda idea: (idea[1] + 4 * idea[2] + idea[3]) / 6 * len(idea[0]))]

# --- TEST SUITE ---

tests_text = r'''
1. analyze_ideas([["Add logging", 2, 5, 15], ["SEO optimization", 4, 8, 20], ["Fix bug", 1, 3, 5]]) should return ["Fix bug", "Add logging", "SEO optimization"].
2. analyze_ideas([["Dark mode", 1, 3, 8], ["Real-time collaboration feature", 6, 12, 20], ["Add tooltip", 1, 2, 4]]) should return ["Add tooltip", "Dark mode", "Real-time collaboration feature"].
3. analyze_ideas([["Update user profile page", 3, 7, 14], ["Add pagination", 2, 5, 10], ["Add tags", 2, 3, 6], ["Fix login bug", 1, 4, 8]]) should return ["Add tags", "Fix login bug", "Add pagination", "Update user profile page"].
4. analyze_ideas([["Migrate database", 14, 25, 40], ["Add chat assistant", 8, 15, 24], ["Redesign onboarding flow", 3, 7, 13], ["Add language support", 6, 11, 18]]) should return ["Redesign onboarding flow", "Add language support", "Add chat assistant", "Migrate database"].
5. analyze_ideas([["Add email notifications", 3, 7, 10], ["Migrate deployment flow", 6, 10, 16], ["Add push notifications", 2, 6, 10], ["Optimize continuous integration", 5, 8, 15], ["Analyze user patterns", 5, 10, 18], ["Create onboarding curriculum", 6, 15, 25]]) should return ["Add push notifications", "Add email notifications", "Analyze user patterns", "Migrate deployment flow", "Optimize continuous integration", "Create onboarding curriculum"].
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