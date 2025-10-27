function mask(card) {

  return card.slice(0, 15).replace(/\d/g, "*") + card.slice(15);
}

console.log(mask("4012-8888-8888-1881"));
console.log(mask("5105 1051 0510 5100"));
console.log(mask("6011 1111 1111 1117"));
console.log(mask("2223-0000-4845-0010"));