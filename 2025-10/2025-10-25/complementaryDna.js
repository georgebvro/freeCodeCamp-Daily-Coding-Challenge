function complementaryDNA(strand) {
  const chemicalBases = {
    'A': 'T',
    'C': 'G',
    'G': 'C',
    'T': 'A'
  };
  let complementaryStrand = "";

  for (const letter of strand)
    complementaryStrand += chemicalBases[letter];

  return complementaryStrand;
}

console.log(complementaryDNA("ACGT"));
console.log(complementaryDNA("ATGCGTACGTTAGC"));
console.log(complementaryDNA("GGCTTACGATCGAAG"));
console.log(complementaryDNA("GATCTAGCTAGGCTAGCTAG"));