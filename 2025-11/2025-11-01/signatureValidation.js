function verify(message, key, signature) {
  const valueOfLowercaseA = 1;
  const valueOfUppercaseA = 27;

  return (message + key)
    .replace(/[^a-zA-Z]/g, "")
    .split("")
    .reduce((sum, letter) => sum += /[a-z]/.exec(letter) 
      ? letter.charCodeAt(0) - 'a'.charCodeAt(0) + valueOfLowercaseA 
      : letter.charCodeAt(0) - 'A'.charCodeAt(0) + valueOfUppercaseA
    , 0) === signature;
}

console.log(verify("foo", "bar", 57));
console.log(verify("foo", "bar", 54));
console.log(verify("freeCodeCamp", "Rocks", 238));
console.log(verify("Is this valid?", "No", 210));
console.log(verify("Is this valid?", "Yes", 233));
console.log(verify("Check out the freeCodeCamp podcast,", "in the mobile app", 514));