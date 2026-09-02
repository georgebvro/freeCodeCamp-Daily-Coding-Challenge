function migrateRecord(schema, record) {
  let allSchemaPropertiesMissing = true;
  
  for (const property in schema) {
    if (record.hasOwnProperty(property)) {
      allSchemaPropertiesMissing = false;
      break;
    }
  }

  if (allSchemaPropertiesMissing) {
    return Object.assign(schema, record);
  }

  const fixedObject = Object.assign({}, record);

  for (const property in schema) {
    if (!fixedObject.hasOwnProperty(property)) {
      fixedObject[property] = schema[property];
    }
  }

  return fixedObject;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. migrateRecord({ username: "", posts: 0 }, { verified: true }) should return { username: "", posts: 0, verified: true }.
2. migrateRecord({ username: "", posts: 0 }, { username: "camper", posts: 5 }) should return { username: "camper", posts: 5 }.
3. migrateRecord({ username: "", posts: 0, verified: false }, { username: "camper" }) should return { username: "camper", posts: 0, verified: false }.
4. migrateRecord({ username: "", posts: 0 }, { username: "camper", role: "admin" }) should return { username: "camper", role: "admin", posts: 0 }.
5. migrateRecord({ username: "", email: "", posts: 0, verified: false, role: "user", banned: false }, { username: "camper", email: "camper@freecodecamp.org", role: "admin" }) should return { username: "camper", email: "camper@freecodecamp.org", role: "admin", posts: 0, verified: false, banned: false }.
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