function goldilocksZone(mass) {
  const luminosity = mass ** 3.5;
  const goldilocksZoneStart = 0.95 * Math.sqrt(luminosity);
  const goldilocksZoneEnd = 1.37 * Math.sqrt(luminosity);

  return [+parseFloat(goldilocksZoneStart).toFixed(2), Math.round(goldilocksZoneEnd * 100) / 100];
}

console.log(goldilocksZone(1));
console.log(goldilocksZone(0.5));
console.log(goldilocksZone(6));
console.log(goldilocksZone(3.7));
console.log(goldilocksZone(20));