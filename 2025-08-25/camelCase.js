function toCamelCase(s) {
  const words = s.split(/[ _-]+/);
  
  for (let i = 0; i < words.length; i ++) {
    words[i] = words[i].toLowerCase();
    
    if (i > 0) {
      words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
  }
  
  return words.join('');
}

console.log(toCamelCase("hello world"));
console.log(toCamelCase("HELLO WORLD"));
console.log(toCamelCase("secret agent-X"));
console.log(toCamelCase("FREE cODE cAMP"));
console.log(toCamelCase("ye old-_-sea  faring_buccaneer_-_with a - peg__leg----and a_parrot_ _named- _squawk"));
