# Solution using a function that returns a sort key in the form of a tuple. New style and simpler
def sort(emails):
    
    return sorted(emails, key=sort_key)

import re
def sort_key(email):
    username, domain = re.match("(.+)@(.+)", email).groups()

    return (domain.casefold(), username.casefold())

''' Solution using comparator function and cmp_to_key(). Old-style
import re, locale, functools
regex = re.compile(r"(.+)@(.+)")

def sort(emails):
    
    return sorted(emails, key=functools.cmp_to_key(comparator))

def comparator(a, b):
    a_match = regex.match(a)
    b_match = regex.match(b)

    a_username, a_domain = a_match.group(1).casefold(), a_match.group(2).casefold()
    b_username, b_domain = b_match.group(1).casefold(), b_match.group(2).casefold()

    if a_domain < b_domain:
        return -1
    elif a_domain > b_domain:
        return 1

    if a_username < b_username:
        return -1
    elif a_username > b_username:
        return 1

    return 0
'''

print(sort(["jill@mail.com", "john@example.com", "jane@example.com"]))
print(sort(["bob@mail.com", "alice@zoo.com", "carol@mail.com"]))
print(sort(["user@z.com", "user@y.com", "user@x.com"]))
print(sort(["sam@MAIL.com", "amy@mail.COM", "bob@Mail.com"]))
print(sort(["simon@beta.com", "sammy@alpha.com", "Sarah@Alpha.com", "SAM@ALPHA.com", "Simone@Beta.com", "sara@alpha.com"]))