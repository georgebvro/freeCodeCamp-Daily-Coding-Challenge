def can_post(message):

    return "short post" if len(message) <= 40 else "long post" if len(message) <= 80 else "invalid post"

print(can_post("Hello world"))
print(can_post("This is a longer message but still under eighty characters."))
print(can_post("This message is too long to fit into either of the character limits for a social media post."))