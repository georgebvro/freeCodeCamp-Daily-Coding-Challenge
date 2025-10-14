import re

def decode(s):
    regex = re.compile(r'\([^\(\)]*\)')
    
    while regex.search(s):
        s = re.sub(regex, replacer, s)

    return s

def replacer(match):
    return match.group(0)[1:len(match.group(0)) - 1][::-1]

print(decode("(f(b(dc)e)a)"))
print(decode("((is?)(a(t d)h)e(n y( uo)r)aC)"))
print(decode("f(Ce(re))o((e(aC)m)d)p"))
print(decode("a(())b"))