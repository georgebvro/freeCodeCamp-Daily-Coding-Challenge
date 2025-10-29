def complementary_dna(strand):
    chemicalBases = {
        'A': 'T',
        'C': 'G',
        'G': 'C',
        'T': 'A'
    }

    return "".join([chemicalBases[letter] for letter in strand])

print(complementary_dna("ACGT"))
print(complementary_dna("ATGCGTACGTTAGC"))
print(complementary_dna("GGCTTACGATCGAAG"))
print(complementary_dna("GATCTAGCTAGGCTAGCTAG"))