function milePace(miles, duration) {
  const durationSplit = duration.split(":");
  
  const durationTotalSeconds = durationSplit[0] * 60 + parseInt(durationSplit[1]);
  const averageSecondsPerMile = parseInt(durationTotalSeconds / miles);
  
  let averageTimeMinutes = parseInt(averageSecondsPerMile / 60);
  let averageTimeSeconds = averageSecondsPerMile % 60;
  
  if (averageTimeMinutes < 10) averageTimeMinutes = '0' + averageTimeMinutes;
  if (averageTimeSeconds < 10) averageTimeSeconds = '0' + averageTimeSeconds;
  
  const averageTime = averageTimeMinutes + ":" + averageTimeSeconds;
  
  console.log(durationSplit, durationTotalSeconds, averageSecondsPerMile, averageTimeMinutes, averageTimeSeconds, averageTime);
  
  return averageTime;
}

milePace(3, "24:00")
milePace(1, "06:45")
milePace(2, "07:00")
milePace(26.2, "120:35");
milePace(1, "00:00");