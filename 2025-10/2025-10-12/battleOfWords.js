function battle(ourTeam, opponent) {
  let ourTeamScore = 0, 
      opponentScore = 0;

  const ourTeamWords = ourTeam.split(" ");
  const opponentWords = opponent.split(" ");

  for (const wordIndex in ourTeamWords) {
    const ourTeamWordValue = wordValue(ourTeamWords[wordIndex]);
    const opponentWordValue = wordValue(opponentWords[wordIndex]);

    if (ourTeamWordValue > opponentWordValue)
      ourTeamScore ++;

    else if (ourTeamWordValue < opponentWordValue)
      opponentScore ++;
  }

  return ourTeamScore > opponentScore ? "We win" : ourTeamScore < opponentScore ? "We lose" : "Draw";
}

function wordValue(word) {
  const codeOfLowerCaseA = 'a'.charCodeAt(0);
  const codeOfLowerCaseZ = 'z'.charCodeAt(0);
  let wordValue = 0;

  word.split("").forEach(letter => {
    const codeOfLetter = letter.charCodeAt(0);

    if (codeOfLowerCaseA <= codeOfLetter && codeOfLetter <= codeOfLowerCaseZ)
      wordValue += codeOfLetter - codeOfLowerCaseA + 1;
    
    else
      wordValue += (letter.toLowerCase().charCodeAt(0) - codeOfLowerCaseA + 1) * 2;
  })

  return wordValue;
}

console.log(battle("hello world", "hello word"));
console.log(battle("Hello world", "hello world"));
console.log(battle("lorem ipsum", "kitty ipsum"));
console.log(battle("hello world", "world hello"));
console.log(battle("git checkout", "git switch"));
console.log(battle("Cheeseburger with fries", "Cheeseburger with Fries"));
console.log(battle("We must never surrender", "Our team must win"));