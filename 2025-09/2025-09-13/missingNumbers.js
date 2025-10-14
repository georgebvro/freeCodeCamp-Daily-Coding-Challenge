function findMissingNumbers(arr) {
  const missingNumbers = [];
  
  for (let i = 1; i <= Math.max(...arr); i ++) {
    if (!arr.find(number => number === i))
      missingNumbers.push(i);
  }

  return missingNumbers;
}

console.log(findMissingNumbers([1, 3, 5]));
console.log(findMissingNumbers([1, 2, 3, 4, 5]));
console.log(findMissingNumbers([1, 10]));
console.log(findMissingNumbers([10, 1, 10, 1, 10, 1]));
console.log(findMissingNumbers([3, 1, 4, 1, 5, 9]));
console.log(findMissingNumbers([1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 6, 8, 9, 3, 2, 10, 7, 4]));