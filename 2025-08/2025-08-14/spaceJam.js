function spaceJam(s) {
  s = s.replaceAll(" ", "").replace(/(.)/g, "$1  ")

  return s.slice(0, s.length - 2).toUpperCase();
}

console.log(spaceJam("freeCodeCamp"));
console.log(spaceJam("   free   Code   Camp   "));
console.log(spaceJam("Hello World?!"));
console.log(spaceJam("C@t$ & D0g$"));
console.log(spaceJam("allyourbase"));