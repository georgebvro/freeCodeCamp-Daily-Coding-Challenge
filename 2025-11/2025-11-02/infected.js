function infected(days) {
  let infectedComputers = 1;

  for (let day = 1; day <= days; day ++) {
    infectedComputers *= 2;
    
    if(day % 3 === 0)
      infectedComputers -= Math.ceil(infectedComputers * 20 / 100)
  }

  return infectedComputers;
}

console.log(infected(1));
console.log(infected(3));
console.log(infected(8));
console.log(infected(17));
console.log(infected(25));

console.log(infected(0));