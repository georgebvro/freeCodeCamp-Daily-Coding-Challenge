function checkStrength(password) {
  let strength = 0;

  if (password.length >= 8)
    strength ++;

  if (/[a-z]/.exec(password) && /[A-Z]/.exec(password))
    strength ++;

  if (/\d/.exec(password))
    strength ++;

  if (/[!@#$%^&*]/.exec(password))
    strength ++;

  return strength < 2 ? "weak" : strength < 4 ? "medium" : "strong";
}

console.log(checkStrength("123456"));
console.log(checkStrength("pass!!!"));
console.log(checkStrength("Qwerty"));
console.log(checkStrength("PASSWORD"));
console.log(checkStrength("PASSWORD!"));
console.log(checkStrength("PassWord%^!"));
console.log(checkStrength("qwerty12345"));
console.log(checkStrength("PASSWORD!"));
console.log(checkStrength("PASSWORD!"));
console.log(checkStrength("S3cur3P@ssw0rd"));
console.log(checkStrength("C0d3&Fun!"));