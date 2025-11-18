def is_match(fingerprint_a, fingerprint_b):
    different_characters_count = 0;

    if len(fingerprint_a) != len(fingerprint_b):
        return False

    for index, character in enumerate(fingerprint_a):
        if character != fingerprint_b[index]:
            different_characters_count += 1

    return different_characters_count <= len(fingerprint_a) * 10 / 100

print(is_match("helloworld", "helloworld"))
print(is_match("helloworld", "helloworlds"))
print(is_match("helloworld", "jelloworld"))
print(is_match("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthelazydog"))
print(is_match("theslickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazydog"))
print(is_match("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazycat"))

print(is_match("1234567890", "123456789x"))