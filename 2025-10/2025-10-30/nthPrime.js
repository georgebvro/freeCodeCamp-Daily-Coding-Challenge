function nthPrime(n) {
  if (n == 1)
    return 2;

  let testedNumber = 1;
  let primesFound = 1;

  while (primesFound < n) {
    testedNumber += 2;
    let isPrime = true;

    for (let divisor = 3; divisor < testedNumber / 2; divisor += 2)
      if (testedNumber % divisor === 0) {
        isPrime = false;
        break;
      }

    if (isPrime)
        primesFound ++;
  }
  
  return testedNumber;
}

console.log(nthPrime(5));
console.log(nthPrime(10));
console.log(nthPrime(16));
console.log(nthPrime(99));
console.log(nthPrime(1000));

console.log(nthPrime(1));
console.log(nthPrime(2));
console.log(nthPrime(3));