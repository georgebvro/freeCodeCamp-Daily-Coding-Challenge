from datetime import datetime
import calendar

def get_weekday(date_string):    

    return calendar.day_name[datetime.strptime(date_string, "%Y-%m-%d").weekday()]

print(get_weekday("2025-11-06"))
print(get_weekday("1999-12-31"))
print(get_weekday("1111-11-11"))
print(get_weekday("2112-12-21"))
print(get_weekday("2345-10-01"))

print(get_weekday("2345-02-04"))