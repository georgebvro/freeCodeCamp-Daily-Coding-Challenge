def speeding(speeds, limit):
    speeding_vehicles = 0
    overspeed = 0

    for speed in speeds:
        if speed > limit:
            speeding_vehicles += 1
            overspeed += speed - limit

    return [speeding_vehicles, overspeed / speeding_vehicles] if speeding_vehicles > 0 else [0, 0]

print(speeding([50, 60, 55], 60))
print(speeding([58, 50, 60, 55], 55))
print(speeding([61, 81, 74, 88, 65, 71, 68], 70))
print(speeding([100, 105, 95, 102], 100))
print(speeding([40, 45, 44, 50, 112, 39], 55))