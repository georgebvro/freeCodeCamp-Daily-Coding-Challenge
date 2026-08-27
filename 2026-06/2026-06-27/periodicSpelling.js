function getPeriodicSpelling(word) {
  const ELEMENT_SYMBOLS = ["H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe","Cs","Ba","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi","Po","At","Rn","Fr","Ra","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr","Rf","Db","Sg","Bh","Hs","Mt","Ds","Rg","Cn","Nh","Fl","Mc","Lv","Ts","Og"];
  const spelling = [];

  const backtrack = () => {
    if (spelling.join("").toLowerCase() === word) {
      return true;
    }
 
    for (let i = 0; i < ELEMENT_SYMBOLS.length; ++i) {
      spelling.push(ELEMENT_SYMBOLS[i]);
      const spellingRegex = new RegExp("^" + spelling.join(""), "i");
      
      if (spellingRegex.test(word)) {
        if (backtrack()) {
          return true;
        }
      }

      spelling.pop();
    }
	
    return false;
  }

  backtrack();

  return spelling;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getPeriodicSpelling("neon") should return ["Ne", "O", "N"].
2. getPeriodicSpelling("rational") should return ["Ra", "Ti", "O", "N", "Al"].
3. getPeriodicSpelling("yarn") should return ["Y", "Ar", "N"].
4. getPeriodicSpelling("carbon") should return ["C", "Ar", "B", "O", "N"].
5. getPeriodicSpelling("noisy") should return ["N", "O", "I", "S", "Y"].
6. getPeriodicSpelling("bicycles") should return ["B", "I", "C", "Y", "Cl", "Es"].
7. getPeriodicSpelling("optics") should return ["O", "P", "Ti", "C", "S"].
8. getPeriodicSpelling("value") should return [].
`;

const testsRegex = /(?<number>\d+)\.\s(?<functionCall>.+) should return (?<output>.+?)\.?$/gm;
const testData = [...testsText.matchAll(testsRegex).map(match => match.groups)];

function runTests(testData) {
  console.log("——————————————————————————",
            "\n🧪Starting Verification...",
            "\n——————————————————————————");

  let failCount = 0;
  
  testData.forEach(test => {
    const functionCallOutput = eval(test.functionCall);
    const testOutput = eval(`(${test.output})`);

    if (JSON.stringify(functionCallOutput) === JSON.stringify(testOutput)) {
      console.log(`${test.number}.✅PASS - Function Call: ${test.functionCall}`);
    } else {
      console.log(`${test.number}.❌FAIL - Function Call: ${test.functionCall}\nExpected: ${JSON.stringify(testOutput)}\nGot: ${JSON.stringify(functionCallOutput)}`);

      ++failCount;
    }
    console.log("————————————————————————————");
  })

  console.log(failCount
    ? `⚠️WARNING: ${failCount}/${testData.length} tests FAILED.`
    : "🎉SUCCESS: All tests PASSED."
  );
}

runTests(testData);