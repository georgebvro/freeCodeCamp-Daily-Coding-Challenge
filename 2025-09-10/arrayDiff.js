function arrayDiff(arr1, arr2) {
	
  return arr1
    .filter(element1 => !arr2.some(element2 => element1 === element2))
    .concat(arr2.filter(element2 => !arr1.some(element1 => element2 === element1)))
    .sort();
}

console.log(arrayDiff(["apple", "banana"], ["apple", "banana", "cherry"]));
console.log(arrayDiff(["apple", "banana", "cherry"], ["apple", "banana"]));
console.log(arrayDiff(["one", "two", "three", "four", "six"], ["one", "three", "eight"]));
console.log(arrayDiff(["two", "four", "five", "eight"], ["one", "two", "three", "four", "seven", "eight"]));
console.log(arrayDiff(["I like freeCodeCamp"], ["I like rocks"]));