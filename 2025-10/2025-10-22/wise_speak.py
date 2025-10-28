def wise_speak(sentence):
    import re

    groups_dict = re.match(r"(?P<goes_to_end>.*?(have|must|are|will|can)) (?P<goes_to_front>.*)(?P<punctuation>.)", sentence).groupdict()

    return f"{groups_dict['goes_to_front'][0].upper()}{groups_dict['goes_to_front'][1:]}, {groups_dict['goes_to_end'].lower()}{groups_dict['punctuation']}"

print(wise_speak("You must speak wisely."))
print(wise_speak("You can do it!"))
print(wise_speak("Do you think you will complete this?"))
print(wise_speak("All your base are belong to us."))
print(wise_speak("You have much to learn."))