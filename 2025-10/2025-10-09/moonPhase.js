function moonPhase(dateString) {
  const referenceNewMoon = "2000-01-06";
  const differenceInMilliseconds = new Date(dateString) - new Date(referenceNewMoon);
  const differenceInDays = differenceInMilliseconds / 1000 / 60 / 60 / 24;
  const dayOfTheCycle = differenceInDays % 28 + 1;

  if (dayOfTheCycle <= 7) 
    return "New";
  
  else if (dayOfTheCycle <= 14) 
    return "Waxing";
  
  else if (dayOfTheCycle <= 21) 
    return "Full";
  
  else if (dayOfTheCycle <= 28) 
    return "Waning";
}

console.log(moonPhase("2000-01-12"));
console.log(moonPhase("2000-01-13"));
console.log(moonPhase("2014-10-15"));
console.log(moonPhase("2012-10-21"));
console.log(moonPhase("2022-12-14"));