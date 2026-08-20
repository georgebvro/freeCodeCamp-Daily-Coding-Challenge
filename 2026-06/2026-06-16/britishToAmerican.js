function britishToAmerican(sentence) {
  const WORDS = {
    "colour": "color",
    "flavour": "flavor",
    "honour": "honor",
    "neighbour": "neighbor",
    "labour": "labor",
    "humour": "humor",
    "centre": "center",
    "fibre": "fiber",
    "defence": "defense",
    "offence": "offense",
    "organise": "organize",
    "recognise": "recognize",
    "analyse": "analyze"
  };
  let translatedSentence = sentence;

  const replacer = match => {
    let replacement = WORDS[match.toLowerCase()];

    if (match[0] === match[0].toUpperCase()) {
      replacement = replacement[0].toUpperCase() + replacement.slice(1);
    }

    if (match.split("").every(letter => letter === letter.toUpperCase())) {
      replacement = replacement.toUpperCase();
    }

    return replacement;
  }

  for (const word in WORDS) {
    const regex = new RegExp(word, "ig");
    translatedSentence = translatedSentence.replaceAll(regex, replacer);
  }

  return translatedSentence;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. britishToAmerican("I love the colour blue.") should return "I love the color blue."
2. britishToAmerican("The fibre optic cable is new.") should return "The fiber optic cable is new."
3. britishToAmerican("It's an honour to meet someone with such humour.") should return "It's an honor to meet someone with such humor."
4. britishToAmerican("The unrecognised artist analysed his colour palette at the centre.") should return "The unrecognized artist analyzed his color palette at the center."
5. britishToAmerican("The offence analysed, with organisation, the defence centre and recognised that the neighbouring labouror was humourous, flavourful, and colourful.") should return "The offense analyzed, with organisation, the defense center and recognized that the neighboring laboror was humorous, flavorful, and colorful."
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