def validate(email):
    import re

    return bool(re.match(r"^(?!.*@.*@)(?!\.)(?![\w-]*\.\.)[\w.-]+(?<!\.)@(?!.*\.\.).*\.[a-zA-Z]{2,}$", email))

print(validate("a@b.cd"))
print(validate("hell.-w.rld@example.com"))
print(validate(".b@sh.rc"))
print(validate("example@test.c0"))
print(validate("freecodecamp.org"))
print(validate("develop.ment_user@c0D!NG.R.CKS"))
print(validate("hello.@wo.rld"))
print(validate("hello@world..com"))
print(validate("git@commit@push.io"))

print(validate("a,b@domain.com"))
print(validate("a@domain"))
print(validate("a@domain.c"))
print(validate("a@.domain.com"))
print(validate("a@..domain.com"))
print(validate("..a@domain.com"))
print(validate("...a@domain.com"))
print(validate("abc..def@domain.com"))
print(validate("abc@sub.domain.com"))
print(validate("@domain.com"))
print(validate("abc@sub.domain.com."))