function tooMuchScreenTime(hours) {
  
  if (hours.find(day => day >= 10)) {
    return true;
  }

  for (let i = 0; i < hours.length - 2; i ++) {
      if ((hours[i] + hours[i + 1] + hours[i + 2]) / 3 >= 8)
        return true;
  }
  
  if ((hours.reduce((acc, day) => acc + day)) / hours.length >= 6) {
    return true;
  }

  return false;
}

console.log(tooMuchScreenTime([1, 2, 3, 4, 5, 6, 7]));
console.log(tooMuchScreenTime([7, 8, 8, 4, 2, 2, 3]));
console.log(tooMuchScreenTime([5, 6, 6, 6, 6, 6, 6]));
console.log(tooMuchScreenTime([1, 2, 3, 11, 1, 3, 4]));
console.log(tooMuchScreenTime([1, 2, 3, 10, 2, 1, 0]));
console.log(tooMuchScreenTime([3, 3, 5, 8, 8, 9, 4]));
console.log(tooMuchScreenTime([3, 9, 4, 8, 5, 7, 6]));