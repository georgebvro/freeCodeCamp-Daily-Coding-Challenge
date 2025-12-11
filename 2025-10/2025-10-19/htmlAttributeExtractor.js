function extractAttributes(element) {
  let attributes = element.match(/\s[^\t\n\f \/>"'=]+=["'][^"']+["']/g);
  
  if (attributes) {
    attributes = attributes.map(attribute => {

      const { attributeName, attributeValue } = 
        /\s(?<attributeName>[^\t\n\f \/>"'=]+)=["'](?<attributeValue>[^"']+)["']/g
        .exec(attribute)
        .groups;
      
      return `${attributeName}, ${attributeValue}`;
    })
  }

  return attributes || [];
}

console.log(extractAttributes('<span class="red"></span>'));
console.log(extractAttributes('<meta charset="UTF-8" />'));
console.log(extractAttributes("<p>Lorem ipsum dolor sit amet</p>"));
console.log(extractAttributes('<input name="email" type="email" required="true" />'));
console.log(extractAttributes('<button id="submit" class="btn btn-primary">Submit</button>'));

// --- TEST SUITE ---

const testsText = `
1. extractAttributes('<span class="red"></span>') should return ["class, red"].
2. extractAttributes('<meta charset="UTF-8" />') should return ["charset, UTF-8"].
3. extractAttributes("<p>Lorem ipsum dolor sit amet</p>") should return [].
4. extractAttributes('<input name="email" type="email" required="true" />') should return ["name, email", "type, email", "required, true"].
5. extractAttributes('<button id="submit" class="btn btn-primary">Submit</button>') should return ["id, submit", "class, btn btn-primary"].
`;

const testsRegex = /(?<number>\d+)\.\s(?<functionCall>.+) should return (?<output>.+?)\.?$/gm;
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