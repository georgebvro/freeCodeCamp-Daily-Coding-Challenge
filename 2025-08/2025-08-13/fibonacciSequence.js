function fibonacciSequence(startSequence, length) {
  const fibonacci = [...startSequence];

  if (fibonacci.length >= length)
    return fibonacci.slice(0, length);

  fibonacci.push(fibonacci[fibonacci.length - 2] + fibonacci[fibonacci.length - 1]);

  return fibonacciSequence(fibonacci, length);
}

console.log(fibonacciSequence([0, 1], 20));
console.log(fibonacciSequence([21, 32], 1));
console.log(fibonacciSequence([0, 1], 0));
console.log(fibonacciSequence([10, 20], 2));
console.log(fibonacciSequence([123456789, 987654321], 5));