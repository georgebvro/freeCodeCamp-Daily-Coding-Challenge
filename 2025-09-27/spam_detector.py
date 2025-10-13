def is_spam(number):
    import re
    groups_dict = re \
        .match(r"\+(?P<country_code>\d+) \((?P<area_code>\d{3})\) (?P<local_number1>\d{3})-(?P<local_number2>\d{4})", number) \
        .groupdict()

    country_code, area_code, local_number1, local_number2 = (
        groups_dict['country_code'],
        groups_dict['area_code'],
        groups_dict['local_number1'],
        groups_dict['local_number2']
    )

    if len(country_code) > 2 or country_code[0] != "0":
        return True

    if int(area_code) < 200 or 900 < int(area_code):
        return True

    sum_of_local_number1 = sum(map(lambda digit: int(digit), local_number1))
    if str(sum_of_local_number1) in local_number2:
        return True

    if re.search(r"(\d)\1{3,}", country_code + area_code + local_number1 + local_number2):
        return True

    return False

print(is_spam("+0 (200) 234-0182"))
print(is_spam("+091 (555) 309-1922"))
print(is_spam("+1 (555) 435-4792"))
print(is_spam("+0 (955) 234-4364"))
print(is_spam("+0 (155) 131-6943"))
print(is_spam("+0 (555) 135-0192"))
print(is_spam("+0 (555) 564-1987"))
print(is_spam("+00 (555) 234-0182"))