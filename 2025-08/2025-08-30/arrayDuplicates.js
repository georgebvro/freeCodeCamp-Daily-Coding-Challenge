function findDuplicates(arr) {
  let duplicates = [];

  arr.forEach(eachValue => {
    if (arr.filter(filteredValue => filteredValue === eachValue).length >= 2)
      duplicates.push(eachValue);
  })

  return [...new Set(duplicates.sort((a, b) => a - b))];
}

console.log(findDuplicates([1, 2, 3, 4, 5]));
console.log(findDuplicates([1, 2, 3, 4, 1, 2]));
console.log(findDuplicates([2, 34, 0, 1, -6, 23, 5, 3, 2, 5, 67, -6, 23, 2, 43, 2, 12, 0, 2, 4, 4]));
console.log(findDuplicates([0, 0]));