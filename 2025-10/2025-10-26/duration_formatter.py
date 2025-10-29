def format(seconds):
    hrs = seconds // 3600
    mins = (seconds - hrs * 3600) // 60
    secs = seconds - hrs * 3600 - mins * 60

    duration = f"{hrs}:" if hrs != 0 else ""
    duration += f"0{mins}:" if hrs != 0 and mins <= 9 else f"{mins}:"
    duration += f"0{secs}" if secs <= 9 else f"{secs}"

    return duration

print(format(500))
print(format(4000))
print(format(1))
print(format(5555))
print(format(99999))