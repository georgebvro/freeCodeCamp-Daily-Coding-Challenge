def send_message(route):
    message_speed = 300000
    satellite_transmission_delay = 0.5
    
    return round(
        sum(distance / message_speed for distance in route) 
        + (len(route) - 1) * satellite_transmission_delay
        , 4)

print(send_message([300000, 300000]))
print(send_message([384400, 384400]))
print(send_message([54600000, 54600000]))
print(send_message([1000000, 500000000, 1000000]))
print(send_message([10000, 21339, 50000, 31243, 10000]))
print(send_message([802101, 725994, 112808, 3625770, 481239]))