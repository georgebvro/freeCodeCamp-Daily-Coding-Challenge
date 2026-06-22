function groupAnagrams(words) {
  const anagramGroups = [];

  for (let index in words) {
    index = Number(index);
    const mainWord = words[index];
    const group = [];

    const isWordAlreadyInAGroup = word => {
      for (const group of anagramGroups) {
        if (group.includes(word)) {
          return true;
        }
      }
    }

    if (isWordAlreadyInAGroup(mainWord)) {
      continue;
    }

    group.push(mainWord);
    const mainWordArray = mainWord.split("");

    for (const anagramCandidate of words.slice(index + 1)) {

      if (isWordAlreadyInAGroup(anagramCandidate) || mainWordArray.length !== anagramCandidate.length) {
        continue;
      }

      const possibleAnagramArray = anagramCandidate.split("");

      for (const letter of mainWordArray) {
        const indexOfLetterFound = possibleAnagramArray.findIndex(l => l === letter);

        if (indexOfLetterFound === -1) {
          break;
        } else {
          possibleAnagramArray.splice(indexOfLetterFound, 1);
        }
      }

      if (possibleAnagramArray.length === 0) {
        group.push(anagramCandidate);
      }
    }

    anagramGroups.push(group);
  }

  return anagramGroups;
}

// The anagrams inside a group and the groups themselves are not returned in the same order as the one in the test texts. Since the return order doesn't matter, before comparing the function call output with the test output, I deep sorted the arrays by defining and implementing the arrayDeepSort() function.
// --- TEST SUITE ---

const testsText = String.raw`
1. groupAnagrams(["listen", "silent", "hello", "enlist", "world"]) should return [["listen", "silent", "enlist"], ["hello"], ["world"]].
2. groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]) should return [["ate", "eat", "tea"], ["bat"], ["nat", "tan"]].
3. groupAnagrams(["care", "race", "acre", "pots", "stop", "tops", "opts", "post", "spot", "evil", "vile", "live", "veil"]) should return [["acre", "care", "race"], ["evil", "live", "veil", "vile"], ["opts", "post", "pots", "spot", "stop", "tops"]].
4. groupAnagrams(["algorithms", "logarithms", "education", "cautioned", "auctioned", "triangle", "integral", "alerting", "relating"]) should return [["alerting", "integral", "relating", "triangle"], ["algorithms", "logarithms"], ["auctioned", "cautioned", "education"]].
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

    if (JSON.stringify(arrayDeepSort(functionCallOutput)) === JSON.stringify(arrayDeepSort(testOutput))) {
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

function arrayDeepSort(array) {
  for (const element of array) {
    if (Array.isArray(element)) {
      arrayDeepSort(element);
    }
  }
  
  return array.sort();
}

runTests(testData);