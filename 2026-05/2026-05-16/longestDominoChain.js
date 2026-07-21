function getLongestChain(dominoes) {
  let longestChain = [];

  const backtrack = (currentChain, poolOfRemainingTiles) => {
    console.log(currentChain, "-",  poolOfRemainingTiles);

    const addTileAndSearchThroughTheRest = (tile, flip, poolOfRemainingTiles) => {
      const tileToAdd = flip ? tile.toReversed() : tile;
      currentChain.push(tileToAdd);
	  
      backtrack(currentChain, poolOfRemainingTiles);
      
      if (currentChain.length > longestChain.length) {
        longestChain = [...currentChain];
        console.log("Longest chain at this time:", longestChain);
      }
      
      currentChain.pop();
    }

    for (const i in poolOfRemainingTiles) {
      if (currentChain.at(-1)[1] === poolOfRemainingTiles[i][0]) {
        addTileAndSearchThroughTheRest(poolOfRemainingTiles[i], false, poolOfRemainingTiles.toSpliced(i, 1));
      } else if (currentChain.at(-1)[1] === poolOfRemainingTiles[i][1]) {
        addTileAndSearchThroughTheRest(poolOfRemainingTiles[i], true, poolOfRemainingTiles.toSpliced(i, 1));
      }
    }
  }

  for (let i in dominoes) {
    console.log("Starting tile index:", i);
    let currentChain = [];

    let startingTile = dominoes[i];
    currentChain.push(startingTile);
    const poolOfRemainingTiles = dominoes.toSpliced(i, 1);
    backtrack(currentChain, poolOfRemainingTiles);

    if (dominoes[i][0] !== dominoes[i][1]) {
      currentChain = [];
      startingTile = dominoes[i].toReversed();
      currentChain.push(startingTile);
      backtrack(currentChain, poolOfRemainingTiles);
    }
  }

  return longestChain;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getLongestChain([[1, 2], [4, 5], [2, 3]]) should return [[1, 2], [2, 3]].
2. getLongestChain([[2, 1], [4, 3], [5, 3]]) should return [[4, 3], [3, 5]].
3. getLongestChain([[1, 2], [3, 4], [2, 3], [4, 0]]) should return [[1, 2], [2, 3], [3, 4], [4, 0]].
4. getLongestChain([[6, 6], [6, 1], [1, 1], [0, 3], [2, 3], [4, 1], [5, 6]]) should return [[4, 1], [1, 1], [1, 6], [6, 6], [6, 5]].
5. getLongestChain([[0, 4], [3, 3], [0, 3], [5, 6], [4, 5], [4, 2], [5, 5], [1, 2], [4, 4]]) should return [[3, 3], [3, 0], [0, 4], [4, 4], [4, 5], [5, 5], [5, 6]].
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