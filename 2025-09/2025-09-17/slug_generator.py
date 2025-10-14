def generate_slug(str):
    import re
    
    str = str.strip().lower()
    str = re.sub(r"[^a-z0-9 ]", "", str)
    str = re.sub(r" +", " ", str)
    str = re.sub(r" ", "%20", str)

    return str

print(generate_slug("helloWorld"))
print(generate_slug("hello world!"))
print(generate_slug(" hello-world "))
print(generate_slug("hello  world"))
print(generate_slug("  ?H^3-1*1]0! W[0%R#1]D  "))

print(generate_slug(" one two  three   4   5  "))