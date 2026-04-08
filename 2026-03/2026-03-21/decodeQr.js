function decodeQr(qrCode) {
  let qr = [...qrCode];
  const size = qr.length;
  const orientationMarkersIndices = {
    bottomLeft: [`${size - 2}0`, `${size - 2}1`, `${size - 1}0`, `${size - 1}1`],
    topLeft: ['00', '01', '10', '11'],
    topRight: [`0${size - 2}`, `0${size - 1}`, `1${size - 2}`, `1${size - 1}`]
  };
  let orientationMarkersIndexPairs = [];
  let data = "";

  for (const [_, cornerIndices] of Object.entries(orientationMarkersIndices))
    orientationMarkersIndexPairs = orientationMarkersIndexPairs.concat(cornerIndices);

  while(!correctOrientation(qr, orientationMarkersIndexPairs)) {
    const rotatedQr = [];

    for (let j = 0; j < size; ++j) {
      let newRow = "";

      for (let i = size - 1; i >= 0; --i)
        newRow += qr[i][j];

      rotatedQr.push(newRow);
    }

    qr = [...rotatedQr];
  }

  for (const i in qr)
    for (const j in qr[i])
      if (!orientationMarkersIndexPairs.includes(`${i}${j}`))
        data += qr[i][j];

  return data;
}

const correctOrientation = (qr, orientationMarkersIndexPairs) => {
  for (const indexPair of orientationMarkersIndexPairs)
    if (qr[indexPair[0]][indexPair[1]] !== "1")
      return false;

  return true;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. decodeQr(["110011", "110011", "000000", "000000", "110000", "110001"]) should return "000000000000000000000001".
2. decodeQr(["100011", "000011", "000000", "000000", "110011", "110011"]) should return "000000000000000000000001".
3. decodeQr(["110011", "111111", "010000", "110000", "110011", "110100"]) should return "001101000011000000110100".
4. decodeQr(["011011", "101011", "101000", "100010", "110011", "111011"]) should return "010001000100010101010110".
5. decodeQr(["111100", "110001", "100011", "001101", "110011", "110011"]) should return "010000100100100101001110".
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