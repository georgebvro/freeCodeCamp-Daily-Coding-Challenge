function tribonacciSequence(startSequence, length) {
  const tribonacci = startSequence;
  
  while (tribonacci.length < length) {
    tribonacci.push(tribonacci.slice(-3).reduce((accumulator, currentValue) => {
        return accumulator += currentValue;
    }))
  }
  
  return tribonacci.slice(0, length);
}

console.log(tribonacciSequence([0, 0, 1], 20));
console.log(tribonacciSequence([21, 32, 43], 1));
console.log(tribonacciSequence([0, 0, 1], 0));
console.log(tribonacciSequence([10, 20, 30], 2));
console.log(tribonacciSequence([10, 20, 30], 3));
console.log(tribonacciSequence([123, 456, 789], 8));