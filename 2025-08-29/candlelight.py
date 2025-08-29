def burn_candles(candles, leftovers_needed):
    candles_burned = 0
    total_leftovers = 0
    available_candles = candles

    while True:
        available_candles += int(total_leftovers / leftovers_needed)
        leftovers = available_candles
        leftovers_remained = total_leftovers % leftovers_needed
        total_leftovers = leftovers + leftovers_remained
        candles_burned += available_candles
        available_candles = 0

        if total_leftovers < leftovers_needed:
            break

    return candles_burned

print(burn_candles(7, 2))
print(burn_candles(10, 5))
print(burn_candles(20, 3))
print(burn_candles(17, 4))
print(burn_candles(2345, 3))
print(burn_candles(1, 2))