def decode(message, shift):
    CODE_OF_UPPERCASE_A = ord('A')
    CODE_OF_UPPERCASE_Z = ord('Z')
    CODE_OF_LOWERCASE_A = ord('a')
    CODE_OF_LOWERCASE_Z = ord('z')
    ALPHABET_LENGTH = CODE_OF_UPPERCASE_Z - CODE_OF_UPPERCASE_A + 1
    decoded_message = ''

    for char in message:
        current_char_code = ord(char)
        new_char_code = current_char_code

        if CODE_OF_UPPERCASE_A <= current_char_code and current_char_code <= CODE_OF_UPPERCASE_Z:
            alphabet_index = current_char_code - CODE_OF_UPPERCASE_A
            new_alphabet_index = (alphabet_index - shift + ALPHABET_LENGTH) % ALPHABET_LENGTH
            new_char_code = CODE_OF_UPPERCASE_A + new_alphabet_index

        elif CODE_OF_LOWERCASE_A <= current_char_code and current_char_code <= CODE_OF_LOWERCASE_Z:
            alphabet_index = current_char_code - CODE_OF_LOWERCASE_A
            new_alphabet_index = (alphabet_index - shift + ALPHABET_LENGTH) % ALPHABET_LENGTH
            new_char_code = CODE_OF_LOWERCASE_A + new_alphabet_index

        decoded_message += chr(new_char_code)

    return decoded_message

print(decode("Xlmw mw e wigvix qiwweki.", 4))
print(decode("Byffi Qilfx!", 20))
print(decode("Zqd xnt njzx?", -1))
print(decode("oannLxmnLjvy", 9))