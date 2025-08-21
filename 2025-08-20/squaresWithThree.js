function squaresWithThree(n) {
  let count = 0;
  for (let i = 1; i <= n; i ++) {
    let square = i ** 2;
    if (square.toString().includes('3'))
      count ++;
  }
  return count;
}

console.log(squaresWithThree(1))
console.log(squaresWithThree(10))
console.log(squaresWithThree(100))
console.log(squaresWithThree(1000))
console.log(squaresWithThree(10000))