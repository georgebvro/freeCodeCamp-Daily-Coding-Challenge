def number_of_videos(video_size, video_unit, drive_size, drive_unit):
    import re

    if video_unit not in ["B", "KB", "MB", "GB"]:
        return "Invalid video unit"

    if not re.match(r"GB|TB", drive_unit):
        return "Invalid drive unit"

    return int(
        (drive_size * 1000000000000 if drive_unit == "TB"
        else drive_size * 1000000000)
        /
        (video_size * 1000000000 if video_unit == "GB"
        else video_size * 1000000 if video_unit == "MB"
        else video_size * 1000 if video_unit == "KB"
        else video_size)
    )

print(number_of_videos(500, "MB", 100, "GB"))
print(number_of_videos(1, "TB", 10, "TB"))
print(number_of_videos(2000, "MB", 100000, "MB"))
print(number_of_videos(500000, "KB", 2, "TB"))
print(number_of_videos(1.5, "GB", 2.2, "TB"))