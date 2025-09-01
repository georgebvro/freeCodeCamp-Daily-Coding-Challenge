function generateHex(color) {
  let outputColor = "";
  let maxPossibleValue = 256;

  let colorObject = {
    redComponent:   {isDominant: null, hexCode: null},
    greenComponent: {isDominant: null, hexCode: null},
    blueComponent:  {isDominant: null, hexCode: null}
  };

  if (color == "red" || color == "green" || color == "blue") 
    colorObject[color + "Component"].isDominant = true;
  else 
    return "Invalid color";

  for (let colorComponent in colorObject) {
    if (colorObject[colorComponent].isDominant) {
      colorObject[colorComponent].hexCode = generateRandomColorCode(true, maxPossibleValue);
      maxPossibleValue = parseInt(colorObject[colorComponent].hexCode, 16);
      break;
    }
  }

  for (let colorComponent in colorObject) {
    if (!colorObject[colorComponent].isDominant) {
      colorObject[colorComponent].hexCode = generateRandomColorCode(false, maxPossibleValue);
    }
    outputColor += colorObject[colorComponent].hexCode;
  }

  return outputColor;
}

function generateRandomColorCode(isDominant, maxValue) {
  let minValue = 0;
  if (isDominant) {
    minValue = 1;
  }
  return Math.floor(Math.random() * (maxValue - minValue) + minValue).toString(16).toUpperCase().padStart(2, "0");
}

console.log(generateHex("yellow"));
console.log(generateHex("red"));
console.log(generateHex("green"));
console.log(generateHex("blue"));