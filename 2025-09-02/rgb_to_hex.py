import re

def rgb_to_hex(rgb):
    regex = re.compile(r"rgb\( *(?P<red>\d{1,3}) *, *(?P<green>\d{1,3}) *, *(?P<blue>\d{1,3}) *\)")

    regexResult = re.match(regex, rgb)

    return f"#{int(regexResult.group('red')):02x}{int(regexResult.group('green')):02x}{int(regexResult.group('blue')):02x}"

print(rgb_to_hex("rgb(255, 255, 255)"))
print(rgb_to_hex("rgb(1, 11, 111)"))
print(rgb_to_hex("rgb(173, 216, 230)"))
print(rgb_to_hex("rgb(79, 123, 201)"))
print(rgb_to_hex("rgb(1,1,1)"))
print(rgb_to_hex("rgb(22 ,2 ,222)"))
print(rgb_to_hex("rgb( 123 , 234 , 013 )"))