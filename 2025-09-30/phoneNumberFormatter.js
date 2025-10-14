function formatNumber(number) {
  const { countryCode, areaCode, localNumber1, localNumber2 } = 
    /(?<countryCode>\d)(?<areaCode>\d{3})(?<localNumber1>\d{3})(?<localNumber2>\d{4})/
      .exec(number)
      .groups;

  return `+${countryCode} (${areaCode}) ${localNumber1}-${localNumber2}`;
}

console.log(formatNumber("05552340182"));
console.log(formatNumber("15554354792"));