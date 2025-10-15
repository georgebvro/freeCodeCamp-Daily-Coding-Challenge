function isBalanced(s) {
  const regex = /[aeiou]/gi;

  const firstHalf = s.slice(0, s.length / 2);
  const secondHalf = s.slice(Math.ceil(s.length / 2));

  return (firstHalf.match(regex) || "").length === (secondHalf.match(regex) || "").length;
}

console.log(isBalanced("racecar"));
console.log(isBalanced("Lorem Ipsum"));
console.log(isBalanced("Kitty Ipsum"));
console.log(isBalanced("string"));
console.log(isBalanced(" "));
console.log(isBalanced("abcdefghijklmnopqrstuvwxyz"));
console.log(isBalanced("123A#b!E&*456-o.U"));

console.log(isBalanced("a"));