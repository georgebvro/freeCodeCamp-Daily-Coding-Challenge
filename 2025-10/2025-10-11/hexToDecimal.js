// Using parseInt() function
function hexToDecimal(hex) {

  return parseInt(hex, 16);
}

/* Using Number() function
function hexToDecimal(hex) {

  return Number("0x" + hex);
}
*/

console.log(hexToDecimal("A"));
console.log(hexToDecimal("15"));
console.log(hexToDecimal("2E"));
console.log(hexToDecimal("FF"));
console.log(hexToDecimal("A3F"));