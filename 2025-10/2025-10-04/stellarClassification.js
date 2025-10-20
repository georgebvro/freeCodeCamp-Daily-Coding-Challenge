function classification(temp) {
  let stellar_classification = "";
  
  if (temp >= 30000)
    stellar_classification = "O";
  
  else if (temp >= 10000)
    stellar_classification = "B";
  
  else if (temp >= 7500)
    stellar_classification = "A";
  
  else if (temp >= 6000)
    stellar_classification = "F";
  
  else if (temp >= 5200)
    stellar_classification = "G";
  
  else if (temp >= 3700)
    stellar_classification = "K";
  
  else if (temp >= 0)
    stellar_classification = "M";
  
  return stellar_classification;
}

console.log(classification(5778));
console.log(classification(2400));
console.log(classification(9999));
console.log(classification(3700));
console.log(classification(3699));
console.log(classification(210000));
console.log(classification(6000));
console.log(classification(11432));