function getBestHand(cards) {
  const ranks = cards.map(card => card[0]);
  const suits = cards.map(card => card[1]);

  const straightFound = ranks => {
    const numberedRanks = ranks
      .map(rank => rank === "T" ? 10 : rank === "J" ? 11 : rank === "Q" ? 12 : rank === "K" ? 13 : rank === "A" ? 14 : Number(rank))
      .sort((a, b) => a - b);

    let straight = true;

    for (let i = 0; i < numberedRanks.length - 1; ++i) {
      if (numberedRanks[i + 1] - numberedRanks[i] !== 1) {
        straight = false;
      }
    }

    if (numberedRanks.at(-1) === 14) {
      if (straight) {
        return "Royal";
      }

      numberedRanks.pop();
      numberedRanks.unshift(1);
      straight = true;

      for (let i = 0; i < numberedRanks.length - 1; ++i) {
        if (numberedRanks[i + 1] - numberedRanks[i] !== 1) {
          straight = false;
        }
      }
    }

    return straight ? "Straight" : false;
  }

  const flushFound = suits => suits.every(suit => suit === suits[0]);

  const countRanks = ranks => {
    const ranksCount = {};

    for (const rank of ranks) {
      ranksCount[rank] = (ranksCount[rank] + 1) || 1;
    }

    const matchingRanksCount = {};

    for (const match of Object.values(ranksCount)) {
      switch(match) {
        case 1: matchingRanksCount['singles'] = (matchingRanksCount['singles'] + 1) || 1; break;
        case 2: matchingRanksCount['pairs'] = (matchingRanksCount['pairs'] + 1) || 1; break;
        case 3: matchingRanksCount['threeOfAKind'] = (matchingRanksCount['threeOfAKind'] + 1) || 1; break;
        case 4: matchingRanksCount['fourOfAKind'] = (matchingRanksCount['fourOfAKind'] + 1) || 1;
      }
    }

    return matchingRanksCount['fourOfAKind'] ? "Four of a Kind" 
      : matchingRanksCount['threeOfAKind'] && matchingRanksCount['pairs'] === 1 ? "Full House"
      : matchingRanksCount['threeOfAKind'] && matchingRanksCount['singles'] === 2 ? "Three of a Kind"
      : matchingRanksCount['pairs'] === 2 ? "Two Pair"
      : matchingRanksCount['pairs'] === 1 ? "Pair"
      : "High Card";
  }

  return straightFound(ranks) === "Royal" && flushFound(suits) ? "Royal Flush" 
    : straightFound(ranks) === "Straight" && flushFound(suits) ? "Straight Flush" 
    : flushFound(suits) ? "Flush" 
    : straightFound(ranks) === "Straight" ? "Straight" 
    : countRanks(ranks)
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getBestHand(["7s", "7h", "7d", "2c", "5h"]) should return "Three of a Kind".
2. getBestHand(["Ks", "Kh", "Kd", "4s", "4h"]) should return "Full House".
3. getBestHand(["2h", "5h", "7h", "9h", "Jh"]) should return "Flush".
4. getBestHand(["As", "Ah", "Ad", "Ac", "Kh"]) should return "Four of a Kind".
5. getBestHand(["Ts", "Th", "9d", "9c", "8h"]) should return "Two Pair".
6. getBestHand(["9c", "8c", "7c", "6c", "5c"]) should return "Straight Flush".
7. getBestHand(["As", "Kh", "Jd", "8c", "5h"]) should return "High Card".
8. getBestHand(["As", "2h", "3d", "4c", "5h"]) should return "Straight".
9. getBestHand(["Ts", "Th", "7c", "6d", "5h"]) should return "Pair".
10. getBestHand(["As", "Ks", "Qs", "Js", "Ts"]) should return "Royal Flush".
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