function countRectangles(width, height) {
/* Solution 1, step-by-step
  let rectangleCount = 0;

  for (let h = 1; h <= height; h ++)
    for (let w = 1; w <= width; w ++)
      rectangleCount += (1 + width - w) * (1 + height - h);

  return rectangleCount;
*/

// Solution 2, more direct and using recursion
  return sumUpToN(width) * sumUpToN(height);
}

const sumUpToN = n => n === 1 ? 1 : n + sumUpToN(n - 1);

console.log(countRectangles(1, 3));
console.log(countRectangles(3, 2));
console.log(countRectangles(1, 2));
console.log(countRectangles(5, 4));
console.log(countRectangles(11, 19));

console.log(countRectangles(2, 2));
console.log(countRectangles(1, 1));
console.log(countRectangles(3, 4));