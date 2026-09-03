function isFizzBuzz(arr) {
  const integersArr = [];
  
  arr.forEach((element, i, source) => {
    if (!isInteger(element)) {
      let integerDetermined;
      
      for (let j = i - 1; j >= 0; --j) {
        if (isInteger(source[j])) {
          integersArr.push(source[j] + i - j);
          integerDetermined = true;
          break;
        }
      }

      if (!integerDetermined) {
        for (let j = i + 1; j < source.length; ++j) {
          if (isInteger(source[j])) {
            integersArr.push(source[j] - (j - i));
            break;
          }
        }
      }
    } else {
      integersArr.push(element);
    }
  })

  for (const i in integersArr) {
    let correctValue = integersArr[i];

    if (!(integersArr[i] % 3) && !(integersArr[i] % 5)) correctValue = "FizzBuzz";
    else if (!(integersArr[i] % 3)) correctValue = "Fizz";
    else if (!(integersArr[i] % 5)) correctValue = "Buzz";

    if (arr[i] !== correctValue) return false;
  }

  return true;
}

const isInteger = element => !Number.isNaN(parseInt(element));

// --- TEST SUITE ---

const testsText = String.raw`
1. isFizzBuzz([1, 2, "Fizz", 4, "Buzz"]) should return true.
2. isFizzBuzz([13, 14, "FizzBuzz", 16, 17]) should return true.
3. isFizzBuzz([1, 2, "Fizz", 4, 5]) should return false.
4. isFizzBuzz(["FizzBuzz", 16, 17, "Fizz", 19, "Buzz"]) should return true.
5. isFizzBuzz([1, 2, "Fizz", "Buzz", 5]) should return false.
6. isFizzBuzz([97, 98, "Buzz", "Fizz", 101, "Fizz", 103]) should return false.
7. isFizzBuzz(["Fizz", "Buzz", 101, "Fizz", 103, 104, "FizzBuzz"]) should return true.
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
    const testOutput = eval(test.output);

    const comparison = Array.isArray(testOutput)
      ? arraysEqual(functionCallOutput, testOutput)
      : functionCallOutput === testOutput;

    if (comparison) {
      console.log(`${test.number}.✅PASS - Function Call: ${test.functionCall}`);
    } else {
      console.log(`${test.number}.❌FAIL - Function Call: ${test.functionCall}\nExpected: ${testOutput}\nGot: ${functionCallOutput}`);
      ++failCount;
    }
    console.log("————————————————————————————");
  })

  console.log(failCount
    ? `⚠️WARNING: ${failCount}/${testData.length} tests FAILED.`
    : "🎉SUCCESS: All tests PASSED."
  );
}

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (Array.isArray(a[i])) {
      if (Array.isArray(b[i])) {
        if (!arraysEqual(a[i], b[i])) {
          return false;
        }
      } else {
        return false;
      }
    } else if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}

runTests(testData);