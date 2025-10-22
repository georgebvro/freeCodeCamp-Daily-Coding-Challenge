def launch_fuel(payload):
    additional_fuel = payload / 5
    total_fuel = additional_fuel

    while additional_fuel >= 1:
        additional_fuel = additional_fuel / 5
        total_fuel += additional_fuel

    return round(total_fuel, 1)

# Recursive solution that should work but it fails Test #3 because of the rounding.
#def launch_fuel(payload):
#    additional_fuel = payload / 5
#
#    if additional_fuel < 1:
#        return additional_fuel
#
#    return round(additional_fuel + launch_fuel(additional_fuel), 1)

print(launch_fuel(50))
print(launch_fuel(500))
print(launch_fuel(243))
print(launch_fuel(11000))
print(launch_fuel(6214))