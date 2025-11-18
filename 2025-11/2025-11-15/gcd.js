function gcd(x, y) {

  return Math.max(...findDivisors(x).intersection(findDivisors(y)));
}

const findDivisors = n => {
  const divisors = new Set([1, n]);

  for (let testDivisor = 2; testDivisor <= Math.floor(n / 2); testDivisor ++)
    if (n % testDivisor === 0)
      divisors.add(testDivisor);

  return divisors;
}

console.log(gcd(4, 6));
console.log(gcd(20, 15));
console.log(gcd(13, 17));
console.log(gcd(654, 456));
console.log(gcd(3456, 4320));