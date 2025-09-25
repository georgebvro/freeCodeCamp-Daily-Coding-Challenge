function isMirror(str1, str2) {

  return str1.replace(/[^a-zA-Z]/g, "") === 
    str2.replace(/[^a-zA-Z]/g, "")
        .split("")
        .reverse()
        .join("");
}

console.log(isMirror("helloworld", "helloworld"));
console.log(isMirror("Hello World", "dlroW olleH"));
console.log(isMirror("RaceCar", "raCecaR"));
console.log(isMirror("RaceCar", "RaceCar"));
console.log(isMirror("Mirror", "rorrim"));
console.log(isMirror("Hello World", "dlroW-olleH"));
console.log(isMirror("Hello World", "!dlroW !olleH"));