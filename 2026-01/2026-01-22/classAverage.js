function getAverageGrade(scores) {
  const averageScore = scores.reduce((total, examScore) => total + examScore) / scores.length;

  if (averageScore >= 97)
    return "A+";

  if (averageScore >= 93)
    return "A";

  if (averageScore >= 90)
    return "A-";

  if (averageScore >= 87)
    return "B+";

  if (averageScore >= 83)
    return "B";

  if (averageScore >= 80)
    return "B-";

  if (averageScore >= 77)
    return "C+";

  if (averageScore >= 73)
    return "C";

  if (averageScore >= 70)
    return "C-";

  if (averageScore >= 67)
    return "D+";

  if (averageScore >= 63)
    return "D";

  if (averageScore >= 60)
    return "D-";

  if (averageScore < 60)
    return "F";
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getAverageGrade([92, 91, 90, 94, 89, 93]) should return "A-".
2. getAverageGrade([84, 89, 85, 100, 91, 88, 79]) should return "B+".
3. getAverageGrade([63, 69, 65, 66, 71, 64, 65]) should return "D".
4. getAverageGrade([97, 98, 99, 100, 96, 97, 98, 99, 100]) should return "A+".
5. getAverageGrade([75, 100, 88, 79, 80, 78, 64, 60]) should return "C+".
6. getAverageGrade([45, 48, 50, 52, 100, 54, 56, 58, 59]) should return "F".
`;

const testsRegex = /(?<number>\d+)\.\s(?<functionCall>.+) should return (?<output>.+?)\.?$/gm;
const testData = [...testsText.matchAll(testsRegex).map(match => match.groups)];

function runTests(testData) {
  console.log("--------------------------");
  console.log("🧪Starting Verification...");
  console.log("--------------------------");

  let failCount = 0;
  
  testData.forEach(test => {
    const functionCallOutput = eval(test.functionCall);
    const testOutput = eval(test.output);

    const comparison = Array.isArray(testOutput)
      ? arraysEqual(functionCallOutput, testOutput)
      : functionCallOutput === testOutput;

    if (comparison) {
      console.log(`${test.number}.✅PASS - Function Call: ${test.functionCall}`);
    }
    else {
      console.log(`${test.number}.❌FAIL - Function Call: ${test.functionCall}\nExpected: ${testOutput}\nGot: ${functionCallOutput}`);
      ++failCount;
    }
  })

  console.log("----------------------------",
    failCount
    ? `\n⚠️WARNING: ${failCount}/${testData.length} tests FAILED.`
    : "\n🎉SUCCESS: All tests PASSED."
  );
}

function arraysEqual(a, b) {
  if (a.length !== b.length)
    return false;

  for (let i = 0; i < a.length; ++i) {
    if (Array.isArray(a[i])) {
      if (Array.isArray(b[i])) {
        if (!arraysEqual(a[i], b[i]))
          return false;
      }
      else 
        return false;
    }

    else if (a[i] !== b[i])
      return false;
  }

  return true;
}

runTests(testData);