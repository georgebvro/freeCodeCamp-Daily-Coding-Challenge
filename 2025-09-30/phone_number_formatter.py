def format_number(number):
    import re
    groups_dict = re \
        .match(r"(?P<countryCode>\d)(?P<areaCode>\d{3})(?P<localNumber1>\d{3})(?P<localNumber2>\d{4})", number) \
        .groupdict()

    return f"+{groups_dict['countryCode']} ({groups_dict['areaCode']}) {groups_dict['localNumber1']}-{groups_dict['localNumber2']}"

print(format_number("05552340182"))
print(format_number("15554354792"))