def moon_phase(date_string):
    from datetime import date
    
    reference_new_moon = "2000-01-06"
    difference_in_days = (date.fromisoformat(date_string) - date.fromisoformat(reference_new_moon)).days
    day_of_the_cycle = difference_in_days % 28 + 1

    if day_of_the_cycle <= 7:
        return "New"

    elif day_of_the_cycle <= 14:
        return "Waxing"

    elif day_of_the_cycle <= 21:
        return "Full"

    elif day_of_the_cycle <= 28:
        return "Waning"

print(moon_phase("2000-01-12"))
print(moon_phase("2000-01-13"))
print(moon_phase("2014-10-15"))
print(moon_phase("2012-10-21"))
print(moon_phase("2022-12-14"))