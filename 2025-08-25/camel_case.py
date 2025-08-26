def to_camel_case(s):
    import re;
    words = re.split(r'[ _-]+', s)

    for i in range(len(words)):
        words[i] = words[i].lower()

        if i > 0:
            words[i] = words[i][0].upper() + words[i][1:]

    return ''.join(words)

print(to_camel_case("hello world"));
print(to_camel_case("HELLO WORLD"));
print(to_camel_case("secret agent-X"));
print(to_camel_case("FREE cODE cAMP"));
print(to_camel_case("ye old-_-sea  faring_buccaneer_-_with a - peg__leg----and a_parrot_ _named- _squawk"));
