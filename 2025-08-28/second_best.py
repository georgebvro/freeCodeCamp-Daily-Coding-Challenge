def get_laptop_cost(laptops, budget):
    prices = laptops[:]
    prices.sort(reverse = True)
    prices = list(dict.fromkeys(prices))

    if len(prices) >= 2 and prices[1] <= budget:
        return prices[1]

    else:
        for i in range(2, len(prices) - 1):
            if prices[i] <= budget:
                return prices[i]

    return 0

print(get_laptop_cost([1500, 2000, 1800, 1400], 1900))
print(get_laptop_cost([1500, 2000, 2000, 1800, 1400], 1900))
print(get_laptop_cost([2099, 1599, 1899, 1499], 2200))
print(get_laptop_cost([2099, 1599, 1899, 1499], 1000))
print(get_laptop_cost([1200, 1500, 1600, 1800, 1400, 2000], 1450))
print(get_laptop_cost([1000, 2000], 500))
print(get_laptop_cost([1000, 2000], 3000))
print(get_laptop_cost([1000, 2000], 1500))
print(get_laptop_cost([1000], 1500))