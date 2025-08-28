function getLaptopCost(laptops, budget) {
  const prices = [...new Set(laptops.sort((a, b) => b - a))];

  if (prices[1] <= budget) {
    return prices[1];
  }

  else {
    for (let i = 2; i < prices.length; i ++) {
      if (prices[i] <= budget)
        return prices[i];
    }
  }

  return 0;
}

console.log(getLaptopCost([1500, 2000, 1800, 1400], 1900));
console.log(getLaptopCost([1500, 2000, 2000, 1800, 1400], 1900));
console.log(getLaptopCost([2099, 1599, 1899, 1499], 2200));
console.log(getLaptopCost([2099, 1599, 1899, 1499], 1000));
console.log(getLaptopCost([1200, 1500, 1600, 1800, 1400, 2000], 1450));
console.log(getLaptopCost([1000, 2000], 500));
console.log(getLaptopCost([1000, 2000], 3000));
console.log(getLaptopCost([1000, 2000], 1500));
console.log(getLaptopCost([1000], 1500));