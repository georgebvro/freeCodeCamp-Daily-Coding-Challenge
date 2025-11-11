import re

def get_extension(filename):
    match = re.search(r"\.(?P<extension>[^\.]*)$", filename)
    
    if match:
        extension = match.groupdict()['extension']
        return extension or "none"

    else:
        return "none"

print(get_extension("document.txt"))
print(get_extension("README"))
print(get_extension("image.PNG"))
print(get_extension(".gitignore"))
print(get_extension("archive.tar.gz"))
print(get_extension("final.draft."))