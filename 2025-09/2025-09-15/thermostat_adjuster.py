def adjust_thermostat(temp, target):

    return "heat" if temp < target else "cool" if temp > target else "hold"

print(adjust_thermostat(68, 72))
print(adjust_thermostat(75, 72))
print(adjust_thermostat(72, 72))
print(adjust_thermostat(-20.5, -10.1))
print(adjust_thermostat(100, 99.9))
print(adjust_thermostat(0.0, 0.0))