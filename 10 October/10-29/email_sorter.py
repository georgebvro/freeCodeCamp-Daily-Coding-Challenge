# Solution using a function that returns a sort key in the form of a tuple. New style and simpler
def sort(emails):
    
    return sorted(emails, key=sort_key)

import re
def sort_key(email):
    username, domain = re.match("(.+)@(.+)", email).groups()

    return (domain.casefold(), username.casefold())

''' Solution using comparator function and cmp_to_key(). Old-style
import re, locale, functools
regex = re.compile(r"(.+)@(.+)")

def sort(emails):
    
    return sorted(emails, key=functools.cmp_to_key(comparator))

def comparator(a, b):
    a_match = regex.match(a)
    b_match = regex.match(b)

    a_username, a_domain = a_match.group(1).casefold(), a_match.group(2).casefold()
    b_username, b_domain = b_match.group(1).casefold(), b_match.group(2).casefold()

    if a_domain < b_domain:
        return -1
    elif a_domain > b_domain:
        return 1

    if a_username < b_username:
        return -1
    elif a_username > b_username:
        return 1

    return 0
'''

print(sort(["jill@mail.com", "john@example.com", "jane@example.com"]))
print(sort(["bob@mail.com", "alice@zoo.com", "carol@mail.com"]))
print(sort(["user@z.com", "user@y.com", "user@x.com"]))
print(sort(["sam@MAIL.com", "amy@mail.COM", "bob@Mail.com"]))
print(sort(["simon@beta.com", "sammy@alpha.com", "Sarah@Alpha.com", "SAM@ALPHA.com", "Simone@Beta.com", "sara@alpha.com"]))

# --- TEST SUITE ---

tests_text = '''
1. sort(["jill@mail.com", "john@example.com", "jane@example.com"]) should return ["jane@example.com", "john@example.com", "jill@mail.com"].
2. sort(["bob@mail.com", "alice@zoo.com", "carol@mail.com"]) should return ["bob@mail.com", "carol@mail.com", "alice@zoo.com"].
3. sort(["user@z.com", "user@y.com", "user@x.com"]) should return ["user@x.com", "user@y.com", "user@z.com"].
4. sort(["sam@MAIL.com", "amy@mail.COM", "bob@Mail.com"]) should return ["amy@mail.COM", "bob@Mail.com", "sam@MAIL.com"].
5. sort(["simon@beta.com", "sammy@alpha.com", "Sarah@Alpha.com", "SAM@ALPHA.com", "Simone@Beta.com", "sara@alpha.com"]) should return ["SAM@ALPHA.com", "sammy@alpha.com", "sara@alpha.com", "Sarah@Alpha.com", "simon@beta.com", "Simone@Beta.com"].
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