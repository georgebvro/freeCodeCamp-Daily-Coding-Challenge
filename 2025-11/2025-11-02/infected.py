import math

def infected(days):
    infected_computers = 1

    for day in range(1, days + 1):
        infected_computers *= 2

        if day % 3 == 0:
            infected_computers -= math.ceil(infected_computers * 20 / 100)

    return infected_computers

print(infected(1))
print(infected(3))
print(infected(8))
print(infected(17))
print(infected(25))

print(infected(0))