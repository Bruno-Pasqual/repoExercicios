function DNAStrand(dna) {
  dna = dna.split('');
  for (e in dna) {
    dna[e] === 'T'
      ? (dna[e] = 'A')
      : dna[e] === 'A'
      ? (dna[e] = 'T')
      : dna[e] === 'G'
      ? (dna[e] = 'C')
      : dna[e] === 'C'
      ? (dna[e] = 'G')
      : '';
  }
  dna = dna.toString();
  dna = dna.replaceAll(',', '');
}

DNAStrand('AAAA');
