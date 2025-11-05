function buildMatrix(rows, cols) {
  const valueToFill = 0;

  return new Array(rows)
    .fill(
      new Array(cols)
        .fill(valueToFill)
    );
}

console.log(buildMatrix(2, 3));
console.log(buildMatrix(3, 2));
console.log(buildMatrix(4, 3));
console.log(buildMatrix(9, 1));