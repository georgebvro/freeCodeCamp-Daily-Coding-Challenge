function getOldest(people) {

  return people
    .sort((a, b) => a.age - b.age)
    .filter((person, _, source) => person.age === source.at(-1).age)
    .map(person => person.name);
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getOldest([{ name: "Brenda", age: 40 }]) should return ["Brenda"].
2. getOldest([{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }]) should return ["Alice"].
3. getOldest([{ name: "Allison", age: 25 }, { name: "Bill", age: 30 }, { name: "Carol", age: 30 }]) should return ["Bill", "Carol"].
4. getOldest([{ name: "George", age: 50 }, { name: "Shirley", age: 42 }, { name: "Beth", age: 48 }, { name: "Holly", age: 50 }, { name: "Kevin", age: 44 }, { name: "Frank", age: 47 }, { name: "Zach", age: 50 }, { name: "Jennifer", age: 43 }]) should return ["George", "Holly", "Zach"].
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