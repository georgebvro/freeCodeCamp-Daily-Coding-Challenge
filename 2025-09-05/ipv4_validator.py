import re

def is_valid_ipv4(ipv4):
    regex = re.compile(r"\D|^$|0\d")
    is_valid = True
    octets = ipv4.split(".")

    if len(octets) != 4:
        is_valid = False

    else:
        for octet in octets:
            if re.match(regex, octet) or int(octet) < 0 or int(octet) > 255:
                is_valid = False

    return is_valid

print(is_valid_ipv4("192.168.1.1"))
print(is_valid_ipv4("0.0.0.0"))
print(is_valid_ipv4("255.01.50.111"))
print(is_valid_ipv4("255.00.50.111"))
print(is_valid_ipv4("256.101.50.115"))
print(is_valid_ipv4("192.168.101."))
print(is_valid_ipv4("192168145213"))

print(is_valid_ipv4("192.168.a.1"))
print(is_valid_ipv4("192.b50.0.1"))