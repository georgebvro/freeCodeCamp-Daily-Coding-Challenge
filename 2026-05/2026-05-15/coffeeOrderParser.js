function formatCoffeeOrder(order) {
  const MENU_ITEMS = {
    "cold brew": "$4.50",
    "oat latte": "$5.00",
    "cappuccino": "$4.75",
    "espresso": "$3.00",
    "vanilla syrup": "$0.75",
    "caramel drizzle": "$0.60",
    "extra shot": "$0.50",
    "oat milk": "$0.75",
    "cream": "$0.75"
  };
  const orderedItems = [];
  let total = 0;

  for (const [item, price] of Object.entries(MENU_ITEMS)) {
    if (new RegExp(item).test(order)) {
      orderedItems.push(item);
      total += Number(price.match(/^\$(\d+\.\d+)$/)[1]);
    }
  }

  return `${orderedItems.join(" + ")}: $${total.toFixed(2)}`;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. formatCoffeeOrder("I'd like an oat latte with vanilla syrup and an extra shot please.") should return "oat latte + vanilla syrup + extra shot: $6.25".
2. formatCoffeeOrder("Give me a cappuccino with caramel drizzle, vanilla syrup, and some oat milk.") should return "cappuccino + vanilla syrup + caramel drizzle + oat milk: $6.85".
3. formatCoffeeOrder("Can I get a cold brew with some cream and an extra shot.") should return "cold brew + extra shot + cream: $5.75".
4. formatCoffeeOrder("Just an espresso please.") should return "espresso: $3.00".
5. formatCoffeeOrder("I'll take an oat latte with cream and an extra shot, and some vanilla syrup and caramel drizzle.") should return "oat latte + vanilla syrup + caramel drizzle + extra shot + cream: $7.60".
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