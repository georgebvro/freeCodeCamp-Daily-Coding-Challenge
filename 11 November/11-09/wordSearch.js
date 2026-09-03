function findWord(matrix, word) {
  const regex = new RegExp(word);

  for (let i in matrix) {
    i = parseInt(i);
    
    const leftToRightLetters = matrix[i].join("");
    let searchResult = regex.exec(leftToRightLetters);
    if (searchResult) {
      const startIndexOfWordFound = searchResult.index;
      const endIndexOfWordFound = startIndexOfWordFound + searchResult[0].length - 1;
      return [[i, startIndexOfWordFound], [i, endIndexOfWordFound]];
    }

    const rightToLeftLetters = leftToRightLetters.split("").reverse().join("");
    searchResult = regex.exec(rightToLeftLetters);
    if (searchResult) {
      const startIndexOfWordFound = rightToLeftLetters.length - 1 - searchResult.index;
      const endIndexOfWordFound = startIndexOfWordFound - (searchResult[0].length - 1);
      return [[i, startIndexOfWordFound], [i, endIndexOfWordFound]];
    }
  }

    for (let j = 0; j < matrix[0].length; j ++) {
      let topToBottomLetters = "";
      for (const row of matrix)
        topToBottomLetters += row[j];
      let searchResult = regex.exec(topToBottomLetters);
      if (searchResult) {
        const startIndexOfWordFound = searchResult.index;
        const endIndexOfWordFound = startIndexOfWordFound + searchResult[0].length - 1;
        return [[startIndexOfWordFound, j], [endIndexOfWordFound, j]];
      }

      const bottomToTopLetters = topToBottomLetters.split("").reverse().join("");
      searchResult = regex.exec(bottomToTopLetters);
      if (searchResult) {
        const startIndexOfWordFound = bottomToTopLetters.length - 1 - searchResult.index;
        const endIndexOfWordFound = startIndexOfWordFound - (searchResult[0].length - 1);
        return [[startIndexOfWordFound, j], [endIndexOfWordFound, j]];
      }
    }
}

console.log(findWord([["a", "c", "t"], ["t", "a", "t"], ["c", "t", "c"]], "cat"));
console.log(findWord([["d", "o", "g"], ["o", "g", "d"], ["d", "g", "o"]], "dog"));
console.log(findWord([["h", "i", "s", "h"], ["i", "s", "f", "s"], ["f", "s", "i", "i"], ["s", "h", "i", "f"]], "fish"));
console.log(findWord([["f", "x", "o", "x"], ["o", "x", "o", "f"], ["f", "o", "f", "x"], ["f", "x", "x", "o"]], "fox"));

console.log(findWord([["f", "x", "o", "x"], ["x", "o", "f", "o"], ["f", "o", "f", "x"], ["f", "x", "x", "o"]], "fox"));
console.log(findWord([["x", "d", "o", "g"], ["x", "o", "g", "d"], ["x", "d", "g", "o"], ["x", "x", "x", "x"]], "dog"));
console.log(findWord([["x", "x", "x", "x"], ["x", "a", "c", "t"], ["x", "t", "a", "t"], ["x", "c", "t", "c"]], "cat"));

// --- TEST SUITE ---

const testsText = `
1. findWord([["a", "c", "t"], ["t", "a", "t"], ["c", "t", "c"]], "cat") should return [[0, 1], [2, 1]].
2. findWord([["d", "o", "g"], ["o", "g", "d"], ["d", "g", "o"]], "dog") should return [[0, 0], [0, 2]].
3. findWord([["h", "i", "s", "h"], ["i", "s", "f", "s"], ["f", "s", "i", "i"], ["s", "h", "i", "f"]], "fish") should return [[3, 3], [0, 3]].
4. findWord([["f", "x", "o", "x"], ["o", "x", "o", "f"], ["f", "o", "f", "x"], ["f", "x", "x", "o"]], "fox") should return [[1, 3], [1, 1]].
`;

const testsRegex = /(?<number>\d+)\.\s(?<functionCall>.+) should return (?<output>.+)\.$/gm;
const testData = [...testsText.matchAll(testsRegex).map(match => match.groups)];

function runTests(testData) {
  console.log("--------------------------");
  console.log("🧪Starting Verification...");
  console.log("--------------------------");

  let allPassed = true;
  let failCount = 0;
  
  testData.forEach(test => {
    const functionCallOutput = eval(test.functionCall);
    const testOutput = eval(test.output);
    let comparison;

    if (Array.isArray(testOutput))
      comparison = arraysEqual(functionCallOutput, testOutput);
    else
      comparison = functionCallOutput === testOutput;

    if (comparison) {
      console.log(`${test.number}.✅PASS - Function Call: ${test.functionCall}`);
    }
    else {
      console.log(`${test.number}.❌FAIL - Function Call: ${test.functionCall}\nExpected: ${testOutput}\nGot: ${functionCallOutput}`);
      allPassed = false;
      failCount ++;
    }
  })

  console.log("----------------------------");

  if (allPassed)
    console.log("🎉SUCCESS: All tests PASSED.");
  else
    console.log(`⚠️WARNING: ${failCount}/${testData.length} tests FAILED.`);
}

function arraysEqual(a, b) {
  if (a.length !== b.length)
    return false;

  for (const index in a) {
    if (Array.isArray(a[index])) {
      if (Array.isArray(b[index])) {
        if (!arraysEqual(a[index], b[index]))
          return false;
      }
      else 
        return false;
    }

    else if (a[index] !== b[index])
      return false;
  }

  return true;
}

runTests(testData);