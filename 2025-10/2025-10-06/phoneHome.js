function sendMessage(route) {
  const messageSpeed = 300000
  const satelliteTransmissionDelay = 0.5

  return +parseFloat(
    route.reduce((travelTime, distance) => travelTime + distance / messageSpeed, 0) 
    + (route.length - 1) * satelliteTransmissionDelay
    ).toFixed(4);
}

console.log(sendMessage([300000, 300000]));
console.log(sendMessage([384400, 384400]));
console.log(sendMessage([54600000, 54600000]));
console.log(sendMessage([1000000, 500000000, 1000000]));
console.log(sendMessage([10000, 21339, 50000, 31243, 10000]));
console.log(sendMessage([802101, 725994, 112808, 3625770, 481239]));