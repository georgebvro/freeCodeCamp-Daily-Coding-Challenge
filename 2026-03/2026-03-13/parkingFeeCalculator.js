function calculateParkingFee(parkTime, pickupTime) {
  const parkTimeTemporal = Temporal.PlainTime.from(parkTime);
  const pickupTimeTemporal = Temporal.PlainTime.from(pickupTime);
  const hourlyFee = 3;
  const overnightFee = 10;
  const minimumFee = 5;
  let parkingHours;

  const overnightParking = Temporal.PlainTime.compare(parkTimeTemporal, pickupTimeTemporal) === 1 ? true : false;
  const parkingDuration = pickupTimeTemporal.since(parkTimeTemporal);
  
  if (overnightParking) {
    parkingHours = 24 + parkingDuration.hours;
  }
  else {
    parkingHours = parkingDuration.hours;
    
    if (parkingDuration.minutes !== 0)
      ++parkingHours;
  }

  let parkingFee = parkingHours * hourlyFee;
  parkingFee = overnightParking ? parkingFee + overnightFee : parkingFee;
  parkingFee = parkingFee < minimumFee ? minimumFee : parkingFee;

  return `$${parkingFee}`;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. calculateParkingFee("09:00", "11:00") should return "$6".
2. calculateParkingFee("10:00", "10:30") should return "$5".
3. calculateParkingFee("08:10", "10:45") should return "$9".
4. calculateParkingFee("14:40", "23:10") should return "$27".
5. calculateParkingFee("18:15", "01:30") should return "$34".
6. calculateParkingFee("11:11", "11:10") should return "$82".
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