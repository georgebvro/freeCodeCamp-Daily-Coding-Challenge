import re

from datetime import datetime

def format_date(date_string):
    date_string = re.sub("(?P<year>\d{1,4})$", replacer, date_string)
    date = datetime.strptime(date_string, "%B %d, %Y")
    
    return date.strftime("%Y-%m-%d")

def replacer(match):
    return match[0].zfill(4)

print(format_date("December 6, 2025"))
print(format_date("January 1, 2000"))
print(format_date("November 11, 1111"))
print(format_date("September 7, 512"))
print(format_date("May 4, 1950"))
print(format_date("February 29, 1992"))

# --- TEST SUITE ---

tests_text = '''
1. format_date("December 6, 2025") should return "2025-12-06".
2. format_date("January 1, 2000") should return "2000-01-01".
3. format_date("November 11, 1111") should return "1111-11-11".
4. format_date("September 7, 512") should return "512-09-07".
5. format_date("May 4, 1950") should return "1950-05-04".
6. format_date("February 29, 1992") should return "1992-02-29".
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