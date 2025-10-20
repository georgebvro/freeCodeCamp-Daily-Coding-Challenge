def has_exoplanet(readings):
    import re
    CODE_OF_UPPERCASE_A = ord('A')
    LUMINOSITY_THRESHOLD = 10 #luminosity level beyond which letters are used to represent values

    luminosity_levels = list(map(lambda reading: 
        ord(reading) - CODE_OF_UPPERCASE_A + LUMINOSITY_THRESHOLD if re.match(r"[A-Z]", reading) 
        else int(reading), 
    readings))

    average_luminosity_level = sum(luminosity_levels) / len(luminosity_levels)

    return any(luminosity_level <= average_luminosity_level * 80 / 100 for luminosity_level in luminosity_levels)

print(has_exoplanet("665544554"))
print(has_exoplanet("FGFFCFFGG"))
print(has_exoplanet("MONOPLONOMONPLNOMPNOMP"))
print(has_exoplanet("FREECODECAMP"))
print(has_exoplanet("9AB98AB9BC98A"))
print(has_exoplanet("ZXXWYZXYWYXZEGZXWYZXYGEE"))