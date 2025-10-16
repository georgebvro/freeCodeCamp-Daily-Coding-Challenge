def space_jam(s):
    import re
    
    return re.sub(r"(.)", "\g<1>  ", s.replace(" ", "")).upper()[:-2]

print(space_jam("freeCodeCamp"))
print(space_jam("   free   Code   Camp   "))
print(space_jam("Hello World?!"))
print(space_jam("C@t$ & D0g$"))
print(space_jam("allyourbase"))