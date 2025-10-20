function findTarget(arr, target) {
  for (const i in arr) 
    for (const j in arr) 
      if (arr[i] !== arr[j] && arr[i] + arr[j] === target)
        return [parseInt(i), parseInt(j)];

  return "Target not found";
}

console.log(findTarget([2, 7, 11, 15], 9));
console.log(findTarget([3, 2, 4, 5], 6));
console.log(findTarget([1, 3, 5, 6, 7, 8], 15));
console.log(findTarget([1, 3, 5, 7], 14));