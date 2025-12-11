def image_search(images, term):

    return [imageName for imageName in images if term.casefold() in imageName.casefold()]

print(image_search(["dog.png", "cat.jpg", "parrot.jpeg"], "dog"))
print(image_search(["Sunset.jpg", "Beach.png", "sunflower.jpeg"], "sun"))
print(image_search(["Moon.png", "sun.jpeg", "stars.png"], "PNG"))
print(image_search(["cat.jpg", "dogToy.jpeg", "kitty-cat.png", "catNip.jpeg", "franken_cat.gif"], "Cat"))

# --- TEST SUITE ---

tests_text = '''
1. image_search(["dog.png", "cat.jpg", "parrot.jpeg"], "dog") should return ["dog.png"].
2. image_search(["Sunset.jpg", "Beach.png", "sunflower.jpeg"], "sun") should return ["Sunset.jpg", "sunflower.jpeg"].
3. image_search(["Moon.png", "sun.jpeg", "stars.png"], "PNG") should return ["Moon.png", "stars.png"].
4. image_search(["cat.jpg", "dogToy.jpeg", "kitty-cat.png", "catNip.jpeg", "franken_cat.gif"], "Cat") should return ["cat.jpg", "kitty-cat.png", "catNip.jpeg", "franken_cat.gif"].
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