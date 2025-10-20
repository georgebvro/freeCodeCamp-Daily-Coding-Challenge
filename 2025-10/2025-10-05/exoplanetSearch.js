function hasExoplanet(readings) {
  const codeOfUppercaseA = 'A'.charCodeAt(0);
  const luminosityThreshold = 10; //luminosity level beyond which letters are used to represent values

  const luminosityLevels = 
    readings
    .split("")
    .map(reading => /[A-Z]/.exec(reading) ? reading.charCodeAt(0) - codeOfUppercaseA + luminosityThreshold : parseInt(reading))

  const averageLuminosityLevel = 
    luminosityLevels
    .reduce((sum, luminosityLevel) => sum + luminosityLevel)
    / luminosityLevels.length

  return luminosityLevels
    .some(luminosityLevel => luminosityLevel <= averageLuminosityLevel * 80 / 100);
}

console.log(hasExoplanet("665544554"));
console.log(hasExoplanet("FGFFCFFGG"));
console.log(hasExoplanet("MONOPLONOMONPLNOMPNOMP"));
console.log(hasExoplanet("FREECODECAMP"));
console.log(hasExoplanet("9AB98AB9BC98A"));
console.log(hasExoplanet("ZXXWYZXYWYXZEGZXWYZXYGEE"));