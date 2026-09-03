def group_anagrams(words):
    anagram_groups = []

    for index, main_word in enumerate(words):
        group = []

        def is_word_already_in_a_group(word):
            for anagram_group in anagram_groups:
                if word in anagram_group:
                    return True

        if is_word_already_in_a_group(main_word):
            continue

        group.append(main_word)
        main_word_letters = list(main_word)

        for anagram_candidate in words[index + 1:]:
            if is_word_already_in_a_group(anagram_candidate) or len(main_word) != len(anagram_candidate):
                continue

            anagram_candidate_letters = list(anagram_candidate)

            for letter in main_word_letters:
                try:
                    anagram_candidate_letters.remove(letter)
                except ValueError:
                    break

            if len(anagram_candidate_letters) == 0:
                group.append(anagram_candidate)

        anagram_groups.append(group)

    return anagram_groups

# The anagrams inside a group and the groups themselves are not returned in the same order as the one in the test texts. Since the return order doesn't matter, before comparing the function call output with the test output, I deep sorted the lists by defining and implementing the list_deep_sort() function.
# --- TEST SUITE ---

tests_text = r'''
1. group_anagrams(["listen", "silent", "hello", "enlist", "world"]) should return [["listen", "silent", "enlist"], ["hello"], ["world"]].
2. group_anagrams(["eat", "tea", "tan", "ate", "nat", "bat"]) should return [["ate", "eat", "tea"], ["bat"], ["nat", "tan"]].
3. group_anagrams(["care", "race", "acre", "pots", "stop", "tops", "opts", "post", "spot", "evil", "vile", "live", "veil"]) should return [["acre", "care", "race"], ["evil", "live", "veil", "vile"], ["opts", "post", "pots", "spot", "stop", "tops"]].
4. group_anagrams(["algorithms", "logarithms", "education", "cautioned", "auctioned", "triangle", "integral", "alerting", "relating"]) should return [["alerting", "integral", "relating", "triangle"], ["algorithms", "logarithms"], ["auctioned", "cautioned", "education"]].
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
        
        if list_deep_sort(function_call_output) == list_deep_sort(test_output):
            print(f"{test['number']}.✅ PASS - Function Call:\n{test['function_call']}")
        else:
            print(f"{test['number']}.❌ FAIL - Function Call:\n{test['function_call']}\nExpected:\n{test_output}\nGot:\n{function_call_output}")
            fail_count += 1

        print("————————————————————————————")

    print(
        f"⚠️ WARNING: {fail_count}/{len(test_data)} tests FAILED." if fail_count
        else "🎉 SUCCESS: All tests PASSED."
    )

def list_deep_sort(l):
    for element in l:
        if type(element) is list:
            list_deep_sort(element)
            
    l.sort()
    return l

run_tests(test_data)