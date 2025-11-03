import re

def spookify(boo):
    spooky = list(re.sub("[_-]", "~", boo))
    everyOtherLetter = True

    for index, character in enumerate(spooky):
        if re.match("[a-zA-Z]", character):
            
            spooky[index] = character.upper() if everyOtherLetter else character.lower()
            everyOtherLetter = not everyOtherLetter

    return "".join(spooky)

print(spookify("hello_world"))
print(spookify("Spooky_Case"))
print(spookify("TRICK-or-TREAT"))
print(spookify("c_a-n_d-y_-b-o_w_l"))
print(spookify("thE_hAUntEd-hOUsE-Is-fUll_Of_ghOsts"))