import re

def verify(message, key, signature):
    value_of_lowercase_a = 1
    value_of_uppercase_a = 27

    message_and_key_values = [
        ord(letter) - ord('a') + value_of_lowercase_a if re.match("[a-z]", letter) 
        else ord(letter) - ord('A') + value_of_uppercase_a 
        
        for letter in re.sub("[^a-zA-Z]", "", message + key)
    ]
    
    return sum(message_and_key_values) == signature

print(verify("foo", "bar", 57))
print(verify("foo", "bar", 54))
print(verify("freeCodeCamp", "Rocks", 238))
print(verify("Is this valid?", "No", 210))
print(verify("Is this valid?", "Yes", 233))
print(verify("Check out the freeCodeCamp podcast,", "in the mobile app", 514))