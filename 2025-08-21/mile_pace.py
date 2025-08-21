def mile_pace(miles, duration):
    duration_split = duration.split(":")

    duration_total_seconds = int(duration_split[0]) * 60 + int(duration_split[1])
    average_seconds_per_mile = int(duration_total_seconds / miles)

    average_time_minutes = int(average_seconds_per_mile / 60)
    average_time_seconds = average_seconds_per_mile % 60

    if average_time_minutes < 10:
        average_time_minutes = '0' + str(average_time_minutes)
    if average_time_seconds < 10:
        average_time_seconds = '0' + str(average_time_seconds)

    average_time = str(average_time_minutes) + ":" + str(average_time_seconds)

    print(duration_split, duration_total_seconds, average_seconds_per_mile, average_time_minutes, average_time_seconds, average_time)

    return average_time

mile_pace(3, "24:00")
mile_pace(1, "06:45")
mile_pace(2, "07:00")
mile_pace(26.2, "120:35")
mile_pace(1, "00:00")