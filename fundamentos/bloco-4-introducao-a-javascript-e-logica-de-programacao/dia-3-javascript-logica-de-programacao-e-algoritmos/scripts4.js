let maiorNumeroPrimo = 0

for (index = 0; index < 50; index++) {
  for (index2 = 0; index2 < index; index2++) {
    if (index % index2 == 0) {
      maiorNumeroPrimo = index
    }
  }
}
console.log(maiorNumeroPrimo)
