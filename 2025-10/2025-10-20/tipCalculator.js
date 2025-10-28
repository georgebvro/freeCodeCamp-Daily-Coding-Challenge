function calculateTips(mealPrice, customTip) {
  const { mealPriceValue } = /\$(?<mealPricevalue>\d+\.\d+)/.exec(mealPrice).groups;
  const { customTipValue } = /(?<customTipValue>\d+)%/.exec(customTip).groups;
  
  const tip15 = `$${parseFloat(mealPriceValue * 15 / 100).toFixed(2)}`;
  const tip20 = `$${parseFloat(mealPriceValue * 20 / 100).toFixed(2)}`;
  const tipCustom = `$${parseFloat(mealPriceValue * customTipValue / 100).toFixed(2)}`;

  return [ tip15, tip20, tipCustom ];
}

console.log(calculateTips("$10.00", "25%"));
console.log(calculateTips("$89.67", "26%"));
console.log(calculateTips("$19.85", "9%"));