function secondLargest(arr) {

  return Array.from(new Set(arr))
    .sort((a, b) => a - b)
    .at(-2);
}

console.log(secondLargest([1, 2, 3, 4]));
console.log(secondLargest([20, 139, 94, 67, 31]));
console.log(secondLargest([2, 3, 4, 6, 6]));
console.log(secondLargest([10, -17, 55.5, 44, 91, 0]));
console.log(secondLargest([1, 0, -1, 0, 1, 0, -1, 1, 0]));