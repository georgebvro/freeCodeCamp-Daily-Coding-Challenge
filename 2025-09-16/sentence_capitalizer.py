def capitalize(paragraph):
    import re
    paragraph = paragraph[0].upper() + paragraph[1:]

    for i in range(1, len(paragraph)):
        if re.match(r"[.?!]", paragraph[i]):
            for j in range(i + 1, len(paragraph)):
                print(j, paragraph[j])
                if re.match(r"[a-zA-Z]", paragraph[j]):
                    paragraph = paragraph[:j] + paragraph[j].upper() + paragraph[j + 1:]
                    break

    return paragraph

print(capitalize("this is a simple sentence."))
print(capitalize("hello world. how are you?"))
print(capitalize("i did today's coding challenge... it was fun!!"))
print(capitalize("crazy!!!strange???unconventional...sentences."))
print(capitalize("there's a space before this period . why is there a space before that period ?"))

print(capitalize("a."))
print(capitalize("b"))