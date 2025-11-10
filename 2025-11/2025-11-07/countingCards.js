function combinations(cards) {
  const cardsInDeck = 13 * 4;

  return factorial(cardsInDeck) / (factorial(cards) * factorial(cardsInDeck - cards));
}

const factorial = n => {
  if (n == 1 || n == 0)
    return 1;

  return n * factorial(n - 1);
}

console.log(combinations(52));
console.log(combinations(1));
console.log(combinations(2));
console.log(combinations(5));
console.log(combinations(10));
console.log(combinations(50));

console.log(combinations(0));