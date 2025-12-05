function generateHex(color) {
  let outputColor = "";
  let maxPossibleValue = 256;

  let colorObject = {
    redComponent:   {isDominant: null, hexCode: null},
    greenComponent: {isDominant: null, hexCode: null},
    blueComponent:  {isDominant: null, hexCode: null}
  };

  if (color == "red" || color == "green" || color == "blue") 
    colorObject[color + "Component"].isDominant = true;
  else 
    return "Invalid color";

  for (let colorComponent in colorObject) {
    if (colorObject[colorComponent].isDominant) {
      colorObject[colorComponent].hexCode = generateRandomColorCode(true, maxPossibleValue);
      maxPossibleValue = parseInt(colorObject[colorComponent].hexCode, 16);
      break;
    }
  }

  for (let colorComponent in colorObject) {
    if (!colorObject[colorComponent].isDominant) {
      colorObject[colorComponent].hexCode = generateRandomColorCode(false, maxPossibleValue);
    }
    outputColor += colorObject[colorComponent].hexCode;
  }

  return outputColor;
}

function generateRandomColorCode(isDominant, maxValue) {
  let minValue = 0;
  if (isDominant) {
    minValue = 1;
  }
  return Math.floor(Math.random() * (maxValue - minValue) + minValue).toString(16).toUpperCase().padStart(2, "0");
}

console.log(generateHex("yellow"));
console.log(generateHex("red"));
console.log(generateHex("green"));
console.log(generateHex("blue"));

// --- TEST SUITE ---

const testsText = `
1. generateHex("yellow") should return "Invalid color".
2. generateHex("red") should return a six-character string.
3. generateHex("red") should return a valid six-character hex color code.
4. generateHex("red") should return a valid hex color with a higher red value than other colors.
5. Calling generateHex("red") twice should return two different hex color values where red is dominant.
6. Calling generateHex("green") twice should return two different hex color values where green is dominant.
7. Calling generateHex("blue") twice should return two different hex color values where blue is dominant.
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
    switch (test.number) {
      case "1":
        let functionCallOutput = eval(test.functionCall);
        let testOutput = eval(test.output);
        let assertion = functionCallOutput === testOutput;

        if (assertion) {
          console.log(`${test.number}.✅PASS - Function Call: ${test.functionCall}`);
        }
        else {
          console.log(`${test.number}.❌FAIL - Function Call: ${test.functionCall}\nExpected: ${testOutput}\nGot: ${functionCallOutput}`);
          allPassed = false;
          failCount ++;
        }
        break;

      case "2":
        functionCallOutput = eval(test.functionCall);
        let expected = 6;
        const got = functionCallOutput.length
        assertion = expected === got;

        if (assertion) {
          console.log(`${test.number}.✅PASS - Function Call: ${test.functionCall}`);
        }
        else {
          console.log(`${test.number}.❌FAIL - Function Call: ${test.functionCall}\nExpected: ${expected}\nGot: ${got}`);
          allPassed = false;
          failCount ++;
        }
        break;

      case "3":
        functionCallOutput = eval(test.functionCall);
        assertion = /^[\dA-F]{6}$/i.exec(functionCallOutput);

        if (assertion) {
          console.log(`${test.number}.✅PASS - Function Call: ${test.functionCall}`);
        }
        else {
          console.log(`${test.number}.❌FAIL - Function Call: ${test.functionCall}\nExpected: ${test.output}\nGot: ${functionCallOutput}`);
          allPassed = false;
          failCount ++;
        }
        break;

      case "4":
        functionCallOutput = eval(test.functionCall);
        let assertion1 = /^[\dA-F]{6}$/i.exec(functionCallOutput);
        let assertion2 = checkDominant(functionCallOutput, eval(test.functionCall.match(/"(red|green|blue)"/g)[0]));

        if (assertion1 && assertion2) {
          console.log(`${test.number}.✅PASS - Function Call: ${test.functionCall}`);
        }
        else {
          console.log(`${test.number}.❌FAIL - Function Call: ${test.functionCall}\nExpected: ${test.output}\nGot: ${functionCallOutput}`);
          allPassed = false;
          failCount ++;
        }
        break;
        
      case "5":
      case "6":
      case "7":
        const functionCallOutput1 = eval(test.functionCall.match(/\w+\(.*\)/)[0]);
        const functionCallOutput2 = eval(test.functionCall.match(/\w+\(.*\)/)[0]);
        const dominantColor = eval(test.functionCall.match(/"(red|green|blue)"/g)[0]);
        assertion1 = functionCallOutput1 !== functionCallOutput2;
        assertion2 = checkDominant(functionCallOutput1, dominantColor) && checkDominant(functionCallOutput2, dominantColor);

        if (assertion1 && assertion2) {
          console.log(`${test.number}.✅PASS - Function Call: ${test.functionCall}`);
        }
        else {
          console.log(`${test.number}.❌FAIL - Function Call: ${test.functionCall}\nExpected: ${test.output}\nGot: ${functionCallOutput1}, ${functionCallOutput2}`);
          allPassed = false;
          failCount ++;
        }
        break;
    }
  })

  console.log("----------------------------");

  if (allPassed)
    console.log("🎉SUCCESS: All tests PASSED.");
  else
    console.log(`⚠️WARNING: ${failCount}/${testData.length} tests FAILED.`);
}

function checkDominant(hexColorCode, dominant) {
  const { red, green, blue } = /^(?<red>[\dA-F]{2})(?<green>[\dA-F]{2})(?<blue>[\dA-F]{2})$/i.exec(hexColorCode).groups;

  switch (dominant) {
    case "red":
      return parseInt(red, 16) > parseInt(green, 16) && parseInt(red, 16) > parseInt(blue, 16);

    case "green":
      return parseInt(green, 16) > parseInt(red, 16) && parseInt(green, 16) > parseInt(blue, 16);

    case "blue":
      return parseInt(blue, 16) > parseInt(red, 16) && parseInt(blue, 16) > parseInt(green, 16);

    default:
      console.log("Invalid dominant color");
  }
}

runTests(testData);