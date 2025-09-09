def parse_roman_numeral(numeral):
    roman_numerals = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    }
    result = 0

    for i in range(len(numeral) - 1):
        if roman_numerals[numeral[i]] < roman_numerals[numeral[i + 1]]:
            result -= roman_numerals[numeral[i]]
        else:
            result += roman_numerals[numeral[i]]
    
    result += roman_numerals[numeral[-1]]

    return result

print(parse_roman_numeral("III"))
print(parse_roman_numeral("IV"))
print(parse_roman_numeral("XXVI"))
print(parse_roman_numeral("XCIX"))
print(parse_roman_numeral("CDLX"))
print(parse_roman_numeral("DIV"))
print(parse_roman_numeral("MMXXV"))

print(parse_roman_numeral("I"))