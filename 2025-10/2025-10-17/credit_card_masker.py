def mask(card):
    import re

    return re.sub("\d", "*", card[:15]) + card[15:]

print(mask("4012-8888-8888-1881"))
print(mask("5105 1051 0510 5100"))
print(mask("6011 1111 1111 1117"))
print(mask("2223-0000-4845-0010"))