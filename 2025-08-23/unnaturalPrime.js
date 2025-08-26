function isUnnaturalPrime(n) {
  n = Math.abs(n);

  if (n == 0 || n == 1) 
    return false;
  else
    for (let i = 2; i <= n / 2; i ++) {
      if (n % i == 0)
        return false;
    }

  return true;
}

console.log(isUnnaturalPrime(1));
console.log(isUnnaturalPrime(-1));
console.log(isUnnaturalPrime(19));
console.log(isUnnaturalPrime(-23));
console.log(isUnnaturalPrime(0));
console.log(isUnnaturalPrime(97));
console.log(isUnnaturalPrime(-61));
console.log(isUnnaturalPrime(99));
console.log(isUnnaturalPrime(-44));