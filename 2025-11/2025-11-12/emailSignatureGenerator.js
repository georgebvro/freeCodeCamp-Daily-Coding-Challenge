function generateSignature(name, title, company) {
  let prefix;

  if (/^[A-I]/i.exec(name))
    prefix = ">>";
  
  else if (/^[J-R]/i.exec(name))
    prefix = "--";

  else if (/^[S-Z]/i.exec(name))
    prefix = "::";

  return `${prefix}${name}, ${title} at ${company}`;
}

console.log(generateSignature("Quinn Waverly", "Founder and CEO", "TechCo"));
console.log(generateSignature("Alice Reed", "Engineer", "TechCo"));
console.log(generateSignature("Tina Vaughn", "Developer", "example.com"));
console.log(generateSignature("B. B.", "Product Tester", "AcmeCorp"));
console.log(generateSignature("windstorm", "Cloud Architect", "Atmospheronics"));