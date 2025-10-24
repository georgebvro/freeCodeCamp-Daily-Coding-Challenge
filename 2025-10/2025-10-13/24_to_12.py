def to_12(time):
    hour = int(time[:2])
    minute = time[2:]
    meridiem = "AM" if hour < 12 else "PM"

    hour = 12 if hour == 0 else hour % 12

    return f"{hour}:{minute} {meridiem}"

print(to_12("1124"))
print(to_12("0900"))
print(to_12("1455"))
print(to_12("2346"))
print(to_12("0030"))