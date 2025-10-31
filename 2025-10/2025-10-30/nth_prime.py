def nth_prime(n):
    if n == 1:
        return 2

    tested_number = 1
    primes_found = 1

    while primes_found < n:
        tested_number += 2
        is_prime = True

        for divisor in range(3, tested_number // 2, 2):
            if tested_number % divisor == 0:
                is_prime = False
                break

        if is_prime:
            primes_found += 1

    return tested_number

print(nth_prime(5))
print(nth_prime(10))
print(nth_prime(16))
print(nth_prime(99))
print(nth_prime(1000))

print(nth_prime(1))
print(nth_prime(2))
print(nth_prime(3))