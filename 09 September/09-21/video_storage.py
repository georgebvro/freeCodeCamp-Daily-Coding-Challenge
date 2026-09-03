def number_of_videos(video_size, video_unit, drive_size, drive_unit):
    import re

    if video_unit not in ["B", "KB", "MB", "GB"]:
        return "Invalid video unit"

    if not re.match(r"GB|TB", drive_unit):
        return "Invalid drive unit"

    return int(
        (drive_size * 1000000000000 if drive_unit == "TB"
        else drive_size * 1000000000)
        /
        (video_size * 1000000000 if video_unit == "GB"
        else video_size * 1000000 if video_unit == "MB"
        else video_size * 1000 if video_unit == "KB"
        else video_size)
    )

print(number_of_videos(500, "MB", 100, "GB"))
print(number_of_videos(1, "TB", 10, "TB"))
print(number_of_videos(2000, "MB", 100000, "MB"))
print(number_of_videos(500000, "KB", 2, "TB"))
print(number_of_videos(1.5, "GB", 2.2, "TB"))

# --- TEST SUITE ---

tests_text = '''
1. number_of_videos(500, "MB", 100, "GB") should return 200.
2. number_of_videos(1, "TB", 10, "TB") should return "Invalid video unit".
3. number_of_videos(2000, "MB", 100000, "MB") should return "Invalid drive unit".
4. number_of_videos(500000, "KB", 2, "TB") should return 4000.
5. number_of_videos(1.5, "GB", 2.2, "TB") should return 1466.
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