function rotate(matrix) {
  const rotatedMatrix = [];
  const numberOfRows = matrix.length;
  const numberOfColumns = matrix[0].length;

  for (let j = 0; j < numberOfColumns; j ++) {
    rotatedMatrix.push([]);

    for (let i = numberOfRows - 1; i >= 0; i --) {
      console.log(`Processing matrix[${i}][${j}]: ${matrix[i][j]}`);
      rotatedMatrix[j].push(matrix[i][j]);
    }
  }

  return rotatedMatrix;
}

console.log(rotate([[1]]));
console.log(rotate([[1, 2], [3, 4]]));
console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(rotate([[0, 1, 0], [1, 0, 1], [0, 0, 0]]));

console.log(rotate([[1, 2, 3], [4, 5, 6]]));
console.log(rotate([[1, 2], [3, 4], [5, 6]]));