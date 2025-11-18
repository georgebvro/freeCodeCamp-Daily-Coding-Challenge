function isMatch(fingerprintA, fingerprintB) {
  let differentCharactersCount = 0;

  if (fingerprintA.length !== fingerprintB.length)
    return false;

  for (const index in fingerprintA) {
    if (fingerprintA[index] !== fingerprintB[index])
      differentCharactersCount ++;
  }

  return differentCharactersCount <= fingerprintA.length * 10 / 100;
}

console.log(isMatch("helloworld", "helloworld"));
console.log(isMatch("helloworld", "helloworlds"));
console.log(isMatch("helloworld", "jelloworld"));
console.log(isMatch("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthelazydog"));
console.log(isMatch("theslickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazydog"));
console.log(isMatch("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazycat"));

console.log(isMatch("1234567890", "123456789x"));