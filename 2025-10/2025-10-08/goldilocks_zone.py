def goldilocks_zone(mass):
    luminosity = mass ** 3.5
    goldilocks_zone_start = 0.95 * luminosity ** 0.5
    goldilocks_zone_end = 1.37 * luminosity ** 0.5

    return [round(goldilocks_zone_start, 2), round(goldilocks_zone_end, 2)]

print(goldilocks_zone(1))
print(goldilocks_zone(0.5))
print(goldilocks_zone(6))
print(goldilocks_zone(3.7))
print(goldilocks_zone(20))