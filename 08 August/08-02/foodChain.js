function getFoodChain(pairs) {
  const findApex = pairs => {
    let apex;

    for (const pair of pairs) {
      apex = pair[0];
      
      for (const pair of pairs) {
        if (apex === pair[1]) {
          apex = undefined;
          break;
        }
      }
      
      if (apex) {
        return apex;
      }
    }
  }

  const findPrey = predator => {
    for (const pair of pairs) {
      if (predator === pair[0]) {
        return pair[1];
      }
    }
  }

  const foodChain = [findApex(pairs)];

  while (true) {
    let prey = findPrey(foodChain.at(-1));

    if (prey) {
      foodChain.push(prey);
    } else {
      return foodChain;
    }
  }
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getFoodChain([["cat", "mouse"]]) should return ["cat", "mouse"].
2. getFoodChain([["wolf", "deer"], ["deer", "grass"]]) should return ["wolf", "deer", "grass"].
3. getFoodChain([["hawk", "snake"], ["snake", "frog"], ["frog", "fly"]]) should return ["hawk", "snake", "frog", "fly"].
4. getFoodChain([["rabbit", "grass"], ["fox", "rabbit"], ["eagle", "fox"]]) should return ["eagle", "fox", "rabbit", "grass"].
5. getFoodChain([["seal", "salmon"], ["herring", "shrimp"], ["orca", "seal"], ["shrimp", "plankton"], ["salmon", "herring"]]) should return ["orca", "seal", "salmon", "herring", "shrimp", "plankton"].
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