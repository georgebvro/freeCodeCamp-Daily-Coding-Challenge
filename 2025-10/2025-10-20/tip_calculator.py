def calculate_tips(meal_price, custom_tip):
    import re

    meal_price_dict = re.match(r"\$(?P<meal_price_value>\d+\.\d+)", meal_price).groupdict()
    custom_tip_dict = re.match(r"(?P<custom_tip_value>\d+)%", custom_tip).groupdict()

    tip15 = f"${float(meal_price_dict['meal_price_value']) * 15 / 100 :.2f}"
    tip20 = f"${float(meal_price_dict['meal_price_value']) * 20 / 100 :.2f}"
    tip_custom = f"${float(meal_price_dict['meal_price_value']) * float(custom_tip_dict['custom_tip_value']) / 100 :.2f}"

    return [ tip15, tip20, tip_custom ]

print(calculate_tips("$10.00", "25%"))
print(calculate_tips("$89.67", "26%"))
print(calculate_tips("$19.85", "9%"))