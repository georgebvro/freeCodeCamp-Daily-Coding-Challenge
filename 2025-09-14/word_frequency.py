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