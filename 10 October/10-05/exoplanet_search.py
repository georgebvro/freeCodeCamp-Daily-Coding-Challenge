def has_exoplanet(readings):
    import re
    CODE_OF_UPPERCASE_A = ord('A')
    LUMINOSITY_THRESHOLD = 10 #luminosity level beyond which letters are used to represent values

    luminosity_levels = list(map(lambda reading: 
        ord(reading) - CODE_OF_UPPERCASE_A + LUMINOSITY_THRESHOLD if re.match(r"[A-Z]", reading) 
        else int(reading), 
    readings))

    average_luminosity_level = sum(luminosity_levels) / len(luminosity_levels)

    return any(luminosity_level <= average_luminosity_level * 80 / 100 for luminosity_level in luminosity_levels)

print(has_exoplanet("665544554"))
print(has_exoplanet("FGFFCFFGG"))
print(has_exoplanet("MONOPLONOMONPLNOMPNOMP"))
print(has_exoplanet("FREECODECAMP"))
print(has_exoplanet("9AB98AB9BC98A"))
print(has_exoplanet("ZXXWYZXYWYXZEGZXWYZXYGEE"))

# --- TEST SUITE ---

tests_text = '''
1. has_exoplanet("665544554") should return False.
2. has_exoplanet("FGFFCFFGG") should return True.
3. has_exoplanet("MONOPLONOMONPLNOMPNOMP") should return False.
4. has_exoplanet("FREECODECAMP") should return True.
5. has_exoplanet("9AB98AB9BC98A") should return False.
6. has_exoplanet("ZXXWYZXYWYXZEGZXWYZXYGEE") should return True.
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