def favorite_songs(playlist):
    favorite_songs_list = sorted(playlist, key = lambda song: song['plays'], reverse = True)[:2]
    favorite_songs_list = map(lambda song: song['title'], favorite_songs_list)

    return list(favorite_songs_list)

print(favorite_songs([{"title": "Sync or Swim", "plays": 3}, {"title": "Byte Me", "plays": 1}, {"title": "Earbud Blues", "plays": 2} ]))
print(favorite_songs([{"title": "Skip Track", "plays": 98}, {"title": "99 Downloads", "plays": 99}, {"title": "Clickwheel Love", "plays": 100} ]))
print(favorite_songs([{"title": "Song A", "plays": 42}, {"title": "Song B", "plays": 99}, {"title": "Song C", "plays": 75} ]))

# --- TEST SUITE ---

tests_text = '''
1. favorite_songs([{"title": "Sync or Swim", "plays": 3}, {"title": "Byte Me", "plays": 1}, {"title": "Earbud Blues", "plays": 2} ]) should return ["Sync or Swim", "Earbud Blues"].
2. favorite_songs([{"title": "Skip Track", "plays": 98}, {"title": "99 Downloads", "plays": 99}, {"title": "Clickwheel Love", "plays": 100} ]) should return ["Clickwheel Love", "99 Downloads"].
3. favorite_songs([{"title": "Song A", "plays": 42}, {"title": "Song B", "plays": 99}, {"title": "Song C", "plays": 75} ]) should return ["Song B", "Song C"].
'''

import re

tests_regex = re.compile(r"(?P<number>\d+)\.\s(?P<function_call>.+) should return (?P<output>.+?)\.?$", re.MULTILINE)
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