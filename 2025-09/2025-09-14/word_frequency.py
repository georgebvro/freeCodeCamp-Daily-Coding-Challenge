def get_words(paragraph):
    import re
    from functools import reduce
    words = re.split(r"[ ,\.!]", paragraph)
    words = filter(lambda word: word != "", words)
    words = map(lambda word: word.lower(), words)
    words = reduce(build_array_of_dicts, words, [])
    words = sorted(words, key = lambda word_dict: word_dict['count'], reverse = True)[:3]
    words = map(lambda word_dict: word_dict['name'], words)

    return list(words)

def build_array_of_dicts(arr, word):
    
    index = next((i for i, word_dict in enumerate(arr) if word_dict['name'] == word), None)
    
    if index == None:
        arr.append({ 'name' : word, 'count' : 1 })
    else:
        arr[index]['count'] += 1

    return arr

print(get_words("Coding in Python is fun because coding Python allows for coding in Python easily while coding"))
print(get_words("I like coding. I like testing. I love debugging!"))
print(get_words("Debug, test, deploy. Debug, debug, test, deploy. Debug, test, test, deploy!"))

print(get_words("A b b c c c"))

# --- TEST SUITE ---

tests_text = '''
1. get_words("Coding in Python is fun because coding Python allows for coding in Python easily while coding") should return ["coding", "python", "in"].
2. get_words("I like coding. I like testing. I love debugging!") should return ["i", "like", "coding"].
3. get_words("Debug, test, deploy. Debug, debug, test, deploy. Debug, test, test, deploy!") should return ["debug", "test", "deploy"].
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