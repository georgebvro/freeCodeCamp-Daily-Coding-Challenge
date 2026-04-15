function getMovieNightCost(day, showtime, numberOfTickets) {
  const PRICING_CONFIG = {
    baseRules: [
      {
        name: "Tuesday Exception",
        condition: day => ["Tuesday"].includes(day),
        price: 5,
        fixedPrice: true
      },
      {
        name: "Weekday",
        condition: day => ["Monday", "Wednesday", "Thursday"].includes(day),
        price: 10
      },
      {
        name: "Weekend",
        condition: day => ["Friday", "Saturday", "Sunday"].includes(day),
        price: 12
      }
    ],
    modifiers: [
      {
        name: "Matinee",
        condition: time => Temporal.PlainTime.compare(time, "17:00") < 0,
        adjustPrice: price => price - 2
      }
    ]
  };

  const { hour, minute, meridiem } = /(?<hour>^\d{1,2}):(?<minute>\d{2})(?<meridiem>am|pm)$/.exec(showtime).groups;
  let timeRfc_9557 = "";

  if (meridiem === "am")
    timeRfc_9557 += hour === "12" ? "00" : hour.padStart(2, "0");
  
  if (meridiem === "pm")
    timeRfc_9557 += hour === "12" ? hour : Number(hour) + 12;
  
  timeRfc_9557 += `:${minute}`;

  const rule = PRICING_CONFIG.baseRules.find(rule => rule.condition(day));
  let ticket_price = rule.price;

  if (!rule.fixedPrice)
    PRICING_CONFIG.modifiers.forEach(modifier => {
      ticket_price = modifier.condition(timeRfc_9557) ? modifier.adjustPrice(ticket_price) : ticket_price;
    });

  return `$${parseFloat(ticket_price * numberOfTickets).toFixed(2)}`;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getMovieNightCost("Saturday", "10:00pm", 1) should return "$12.00".
2. getMovieNightCost("Sunday", "10:00am", 1) should return "$10.00".
3. getMovieNightCost("Tuesday", "7:20pm", 2) should return "$10.00".
4. getMovieNightCost("Wednesday", "5:40pm", 3) should return "$30.00".
5. getMovieNightCost("Monday", "11:50am", 4) should return "$32.00".
6. getMovieNightCost("Friday", "4:30pm", 5) should return "$50.00".
7. getMovieNightCost("Tuesday", "11:30am", 1) should return "$5.00".
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