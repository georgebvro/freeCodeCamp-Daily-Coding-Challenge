from datetime import datetime

def days_until_weekend(date_string):
    beginning_of_weekend = 6
    day_of_the_week = datetime.strptime(date_string, "%Y-%m-%d").isoweekday()
    days_until_the_weekend = beginning_of_weekend - day_of_the_week

    return f"{days_until_the_weekend} day{'' if days_until_the_weekend == 1 else 's'} until the weekend." \
        if days_until_the_weekend > 0 \
        else "It's the weekend!"

print(days_until_weekend("2025-11-14"))
print(days_until_weekend("2025-01-01"))
print(days_until_weekend("2025-12-06"))
print(days_until_weekend("2026-01-27"))
print(days_until_weekend("2026-09-07"))
print(days_until_weekend("2026-11-29"))