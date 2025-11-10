def combinations(cards):
    cards_in_deck = 13 * 4

    return factorial(cards_in_deck) / (factorial(cards) * factorial(cards_in_deck - cards))

def factorial(n):
    if n == 1 or n == 0:
        return 1

    return n * factorial(n - 1)

print(combinations(52))
print(combinations(1))
print(combinations(2))
print(combinations(5))
print(combinations(10))
print(combinations(50))

print(combinations(0))