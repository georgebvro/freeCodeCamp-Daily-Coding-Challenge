function medicationReminder(medications, currentTime) {
  const MEDICATION_SCHEDULE = {
    'Deployxitrin': { times: ["08:00", "16:00"] },
    'Debuggamanizole': { times: ["07:00", "13:00", "21:00"] },
    'Mergeflictamine': { hourInterval: 4 }
  };
  const currentTimeTemporal = Temporal.PlainTime.from(currentTime);

  const [nextMedicationName, durationUntilNextTime] = medications.map(([currentMedication, lastTime]) => {
    const scheduledTimesForCurrentMedication = Object.entries(MEDICATION_SCHEDULE).find(medicationSchedule => medicationSchedule[0] === currentMedication)[1];

    if (Object.hasOwn(scheduledTimesForCurrentMedication, 'times')) {
      let smallestDurationUntilNextTimeForCurrentMedication = currentTimeTemporal
        .until(Temporal.PlainTime.from("23:59"))
        .add(Temporal.Duration.from({ minutes: 1 }))
        .add(Temporal.PlainTime.from("00:00").until(Temporal.PlainTime.from(scheduledTimesForCurrentMedication.times.toSorted()[0])));

      for (const time of scheduledTimesForCurrentMedication.times) {
        const durationFromCurrentTimeUntilNextPotentialMedication = currentTimeTemporal.until(Temporal.PlainTime.from(time));

        if (durationFromCurrentTimeUntilNextPotentialMedication.total('minutes') > 0 && Temporal.Duration.compare(durationFromCurrentTimeUntilNextPotentialMedication, smallestDurationUntilNextTimeForCurrentMedication) === -1) {
          smallestDurationUntilNextTimeForCurrentMedication = durationFromCurrentTimeUntilNextPotentialMedication;
        }
      }

      return [currentMedication, smallestDurationUntilNextTimeForCurrentMedication];
    }

    if (Object.hasOwn(scheduledTimesForCurrentMedication, 'hourInterval')) {
      const durationFromCurrentTimeUntilNextMedication = currentTimeTemporal
        .until(Temporal.PlainTime.from(lastTime).add(Temporal.Duration.from({ hours: scheduledTimesForCurrentMedication['hourInterval'] })));

      return [currentMedication, durationFromCurrentTimeUntilNextMedication];
    }
  })
    .sort((a, b) => Temporal.Duration.compare(a[1], b[1]))
    [0];

  return `${nextMedicationName} in ${durationUntilNextTime.hours}h ${durationUntilNextTime.minutes}m`;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. medicationReminder([["Deployxitrin", "08:00"], ["Debuggamanizole", "07:00"], ["Mergeflictamine", "10:00"]], "11:00") should return "Debuggamanizole in 2h 0m".
2. medicationReminder([["Deployxitrin", "08:00"], ["Debuggamanizole", "13:00"], ["Mergeflictamine", "14:00"]], "14:55") should return "Deployxitrin in 1h 5m".
3. medicationReminder([["Deployxitrin", "08:00"], ["Debuggamanizole", "13:00"], ["Mergeflictamine", "14:00"]], "17:15") should return "Mergeflictamine in 0h 45m".
4. medicationReminder([["Deployxitrin", "08:00"], ["Debuggamanizole", "07:00"], ["Mergeflictamine", "09:00"]], "12:59") should return "Debuggamanizole in 0h 1m".
5. medicationReminder([["Deployxitrin", "08:00"], ["Debuggamanizole", "21:00"], ["Mergeflictamine", "03:00"]], "06:55") should return "Debuggamanizole in 0h 5m".
6. medicationReminder([["Deployxitrin", "08:00"], ["Debuggamanizole", "07:00"], ["Mergeflictamine", "07:30"]], "08:00") should return "Mergeflictamine in 3h 30m".
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