def gcd(x, y):

    return max(find_divisors(x).intersection(find_divisors(y)))

def find_divisors(n):
    divisors = {1, n}

    for test_divisor in range(2, n // 2 + 1):
        if n % test_divisor == 0:
            divisors.add(test_divisor)

    return divisors

print(gcd(4, 6))
print(gcd(20, 15))
print(gcd(13, 17))
print(gcd(654, 456))
print(gcd(3456, 4320))