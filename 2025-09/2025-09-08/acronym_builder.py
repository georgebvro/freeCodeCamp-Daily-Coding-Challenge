def build_acronym(s):
    special_words = ["a", "for", "an", "and", "by", "of"]
    words = s.split(" ")

    return "".join([word[0].upper() \
        for word in words \
            if word.lower() not in special_words \
            or (word.lower() in special_words and words.index(word) == 0)])
    
print(build_acronym("Search Engine Optimization"))
print(build_acronym("Frequently Asked Questions"))
print(build_acronym("National Aeronautics and Space Administration"))
print(build_acronym("Federal Bureau of Investigation"))
print(build_acronym("For your information"))
print(build_acronym("By the way"))
print(build_acronym("An unstoppable herd of waddling penguins overtakes the icy mountains and sings happily"))

print(build_acronym("For An Open Door"));
print(build_acronym("for An Open Door"));