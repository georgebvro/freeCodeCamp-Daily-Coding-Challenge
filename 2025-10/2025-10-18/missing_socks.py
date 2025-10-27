def sock_pairs(pairs, cycles):
    remaining_pairs = (pairs * 2 
        - cycles // 2 
        + cycles // 3 
        - cycles // 5 
        + cycles // 10 * 2) \
        // 2

    return remaining_pairs if remaining_pairs >= 0 else 0

print(sock_pairs(2, 5))
print(sock_pairs(1, 2))
print(sock_pairs(5, 11))
print(sock_pairs(6, 25))
print(sock_pairs(1, 8))