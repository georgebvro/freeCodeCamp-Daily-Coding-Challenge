def adjust_thermostat(current_f, target_c):
    difference = round(target_c * 1.8 + 32 - current_f, 1)

    return f"Heat: {difference} degrees Fahrenheit" if difference > 0 \
        else f"Cool: {abs(difference)} degrees Fahrenheit" if difference < 0 \
        else "Hold"

print(adjust_thermostat(32, 0))
print(adjust_thermostat(70, 25))
print(adjust_thermostat(72, 18))
print(adjust_thermostat(212, 100))
print(adjust_thermostat(59, 22))