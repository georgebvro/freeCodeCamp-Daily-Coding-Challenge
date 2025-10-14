function decode(message, shift) {
  
  const codeOfUppercaseA = 'A'.charCodeAt(0);
  const codeOfUppercaseZ = 'Z'.charCodeAt(0);
  const codeOfLowercaseA = 'a'.charCodeAt(0);
  const codeOfLowercaseZ = 'z'.charCodeAt(0);
  const alphabetLength = codeOfUppercaseZ - codeOfUppercaseA + 1;
  let decodedMessage = '';

  for (let i = 0; i < message.length; i ++) {
    const currentCharCode = message.charCodeAt(i);
    let newCharCode = currentCharCode;

    if (codeOfUppercaseA <= currentCharCode && currentCharCode <= codeOfUppercaseZ) {
      const alphabetIndex = currentCharCode - codeOfUppercaseA;
      const newAlphabetIndex = (alphabetIndex - shift + alphabetLength) % alphabetLength;
      newCharCode = codeOfUppercaseA + newAlphabetIndex;
    }
    else if (codeOfLowercaseA <= currentCharCode && currentCharCode <= codeOfLowercaseZ) {
      const alphabetIndex = currentCharCode - codeOfLowercaseA;
      const newAlphabetIndex = (alphabetIndex - shift + alphabetLength) % alphabetLength;
      newCharCode = codeOfLowercaseA + newAlphabetIndex;
    }

    decodedMessage += String.fromCharCode(newCharCode);
  }

  console.log(decodedMessage);
  return decodedMessage;
}

decode("Xlmw mw e wigvix qiwweki.", 4);
decode("Byffi Qilfx!", 20);
decode("Zqd xnt njzx?", -1);
decode("oannLxmnLjvy", 9);
//decode("A", 1);
//decode("Y", -1);
//decode("C", 3);
//decode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", -1);
//decode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", -2);
//decode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", -3);
//decode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 1);
//decode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 2);
//decode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 25);