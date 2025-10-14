def reverse_sentence(sentence):
    
    return " ".join(list(filter(lambda word: word != '', sentence.split(" ")))[::-1])

print(reverse_sentence("world hello"))
print(reverse_sentence("push commit git"))
print(reverse_sentence("npm  install  sudo"))
print(reverse_sentence("import    default   function  export"))