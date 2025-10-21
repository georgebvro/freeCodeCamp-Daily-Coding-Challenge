function findLandingSpot(matrix) {
  let safestLandingSpot;
  let smallestDanger;

  for (let i in matrix) {
    for (let j in matrix[i]) {
      if (matrix[i][j] === 0) {
        i = parseInt(i);
        j = parseInt(j);
        let currentDanger = 0;

        if (matrix[i - 1]) currentDanger += matrix[i - 1][j];
        if (matrix[i + 1]) currentDanger += matrix[i + 1][j];
        if (matrix[i][j - 1]) currentDanger += matrix[i][j - 1];
        if (matrix[i][j + 1]) currentDanger += matrix[i][j + 1];

        if (currentDanger < smallestDanger || !smallestDanger) {
          smallestDanger = currentDanger;
          safestLandingSpot = [i, j];
        }
      }
    }
  }
  
  return safestLandingSpot;
}

console.log(findLandingSpot([[1, 0], [2, 0]]));
console.log(findLandingSpot([[9, 0, 3], [7, 0, 4], [8, 0, 5]]));
console.log(findLandingSpot([[1, 2, 1], [0, 0, 2], [3, 0, 0]]));
console.log(findLandingSpot([[9, 6, 0, 8], [7, 1, 1, 0], [3, 0, 3, 9], [8, 6, 0, 9]]));