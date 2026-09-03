def get_roommates(people):
    persons_by_group = {}
    room_assignments = []

    for person in people:
        try:
            persons_by_group[person['group']].append(person['name'])
        except KeyError:
            persons_by_group[person['group']] = [person['name']]

    for persons in list(persons_by_group.values()):
        for i in range(0, len(persons), 2):
            try:
                room_assignments.append(f"{persons[i]} and {persons[i + 1]}")
            except IndexError:
                room_assignments.append(f"{persons[i]}")

    return room_assignments

# --- TEST SUITE ---

tests_text = r'''
1. get_roommates([{ "name": "Alice", "group": "A" }, { "name": "Bob", "group": "B" }, { "name": "Carol", "group": "A" }]) should return ["Alice and Carol", "Bob"].
2. get_roommates([{ "name": "John", "group": "C" }, { "name": "Julia", "group": "C" }, { "name": "Jim", "group": "C" }]) should return ["John and Julia", "Jim"].
3. get_roommates([{ "name": "Adam", "group": "D" }, { "name": "Abraham", "group": "E" }, { "name": "Austin", "group": "E" }, { "name": "Augustus", "group": "D" }, { "name": "Angelica", "group": "D" }, { "name": "Aaron", "group": "E" }]) should return ["Adam and Augustus", "Angelica", "Abraham and Austin", "Aaron"].
4. get_roommates([{ "name": "Frank", "group": "A" }, { "name": "Emitt", "group": "B" }, { "name": "Daria", "group": "F" }, { "name": "Charles", "group": "D" }, { "name": "Bailey", "group": "A" }, { "name": "Albert", "group": "F" }]) should return ["Frank and Bailey", "Emitt", "Daria and Albert", "Charles"].
5. get_roommates([{ "name": "Kevin", "group": "A" }, { "name": "Yuri", "group": "A" }, { "name": "Hugo", "group": "B" }, { "name": "Violet", "group": "A" }, { "name": "Brett", "group": "A" }, { "name": "Wayne", "group": "B" }]) should return ["Kevin and Yuri", "Violet and Brett", "Hugo and Wayne"].
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