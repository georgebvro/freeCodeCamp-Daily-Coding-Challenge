function evaluate(numbers, operators) {
  let result = numbers[0];

  for (let i = 1; i < numbers.length; i ++) {
    const operand = numbers[i];
    const operator = operators[(i - 1) % operators.length];
    result = eval(result + operator + operand);
  }
  
  return result;
}

console.log(evaluate([5, 6, 7, 8, 9], ['+', '-']));
console.log(evaluate([17, 61, 40, 24, 38, 14], ['+', '%']));
console.log(evaluate([20, 2, 4, 24, 12, 3], ['*', '/']));
console.log(evaluate([11, 4, 10, 17, 2], ['*', '*', '%']));
console.log(evaluate([33, 11, 29, 13], ['/', '-']));
console.log(evaluate([1, 2], ['+']));
console.log(evaluate([2], ['%']));
console.log(evaluate([1, 2, 3], ['-']));