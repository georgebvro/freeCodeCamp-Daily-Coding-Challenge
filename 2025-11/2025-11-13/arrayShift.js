function shiftArray(arr, n) {
// Elegant and more performant solution
  n = n % arr.length;

  return arr.slice(n).concat(arr.slice(0, n));

/* Step-by-step method
  if (n > 0)
    for (let i = 1; i <= n; i ++)
      arr.push(arr.shift());

  else if (n < 0)
    for (let i = -1; i >= n; i --)
      arr.unshift(arr.pop());

  return arr;
*/
}

console.log(shiftArray([1, 2, 3], 1));
console.log(shiftArray([1, 2, 3], -1));
console.log(shiftArray(["alpha", "bravo", "charlie"], 5));
console.log(shiftArray(["alpha", "bravo", "charlie"], -11));
console.log(shiftArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 15));

console.log(shiftArray([4, 5, 6], 0));