function isSpam(number) {
  const { countryCode, areaCode, localNumber1, localNumber2 } = 
    /\+(?<countryCode>\d+) \((?<areaCode>\d{3})\) (?<localNumber1>\d{3})-(?<localNumber2>\d{4})/
    .exec(number)
    .groups;

  if (countryCode.length > 2 || countryCode[0] !== '0')
    return true;

  if (areaCode < 200 || 900 < areaCode)
    return true;

  const sumOfLocalNumber1 = 
    Array
    .from(localNumber1)
    .reduce((sum, digit) => sum + parseInt(digit), 0)
  if (localNumber2.indexOf(sumOfLocalNumber1) !== -1)
    return true;

  if (/(\d)\1{3,}/.test(countryCode + areaCode + localNumber1 + localNumber2))
    return true

  return false;
}

console.log(isSpam("+0 (200) 234-0182"));
console.log(isSpam("+091 (555) 309-1922"));
console.log(isSpam("+1 (555) 435-4792"));
console.log(isSpam("+0 (955) 234-4364"));
console.log(isSpam("+0 (155) 131-6943"));
console.log(isSpam("+0 (555) 135-0192"));
console.log(isSpam("+0 (555) 564-1987"));
console.log(isSpam("+00 (555) 234-0182"));