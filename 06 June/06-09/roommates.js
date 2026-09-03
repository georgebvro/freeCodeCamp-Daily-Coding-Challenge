function getRoommates(people) {
  const personsByGroup = {};
  const roomAssignments = [];

  people.forEach(person => {
    personsByGroup[person.group] ??= [];
    personsByGroup[person.group].push(person.name);
  });

  Object.values(personsByGroup).forEach(persons => {
    for (let i = 0; i < persons.length; i += 2) {
      roomAssignments.push(`${persons[i]}` + (persons[i + 1] ? ` and ${persons[i + 1]}`: ""));
    }
  })

  return roomAssignments;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getRoommates([{ "name": "Alice", "group": "A" }, { "name": "Bob", "group": "B" }, { "name": "Carol", "group": "A" }]) should return ["Alice and Carol", "Bob"].
2. getRoommates([{ "name": "John", "group": "C" }, { "name": "Julia", "group": "C" }, { "name": "Jim", "group": "C" }]) should return ["John and Julia", "Jim"].
3. getRoommates([{ "name": "Adam", "group": "D" }, { "name": "Abraham", "group": "E" }, { "name": "Austin", "group": "E" }, { "name": "Augustus", "group": "D" }, { "name": "Angelica", "group": "D" }, { "name": "Aaron", "group": "E" }]) should return ["Adam and Augustus", "Angelica", "Abraham and Austin", "Aaron"].
4. getRoommates([{ "name": "Frank", "group": "A" }, { "name": "Emitt", "group": "B" }, { "name": "Daria", "group": "F" }, { "name": "Charles", "group": "D" }, { "name": "Bailey", "group": "A" }, { "name": "Albert", "group": "F" }]) should return ["Frank and Bailey", "Emitt", "Daria and Albert", "Charles"].
5. getRoommates([{ "name": "Kevin", "group": "A" }, { "name": "Yuri", "group": "A" }, { "name": "Hugo", "group": "B" }, { "name": "Violet", "group": "A" }, { "name": "Brett", "group": "A" }, { "name": "Wayne", "group": "B" }]) should return ["Kevin and Yuri", "Violet and Brett", "Hugo and Wayne"].
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