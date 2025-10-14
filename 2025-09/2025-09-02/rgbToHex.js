function rgbToHex(rgb) {
  const regex = /rgb\( *(?<red>\d{1,3}) *, *(?<green>\d{1,3}) *, *(?<blue>\d{1,3}) *\)/g

  const regexResult = regex.exec(rgb);

  return "#" + 
    parseInt(regexResult.groups.red).toString(16).padStart(2, "0") + 
    parseInt(regexResult.groups.green).toString(16).padStart(2, "0") +
    parseInt(regexResult.groups.blue).toString(16).padStart(2, "0");
}

console.log(rgbToHex("rgb(255, 255, 255)"));
console.log(rgbToHex("rgb(1, 11, 111)"));
console.log(rgbToHex("rgb(173, 216, 230)"));
console.log(rgbToHex("rgb(79, 123, 201)"));
console.log(rgbToHex("rgb(1,1,1)"));
console.log(rgbToHex("rgb(22 ,2 ,222)"));
console.log(rgbToHex("rgb( 123 , 234 , 013 )"));