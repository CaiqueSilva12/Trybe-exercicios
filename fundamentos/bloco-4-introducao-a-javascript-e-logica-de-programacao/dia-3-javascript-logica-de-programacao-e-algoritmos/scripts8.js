/*Faça um programa que diz se um número definido numa variável é primo ou não.
Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, 
a divisão dele com quaisquer outros números dá resto diferente de zero.
Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; 
Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.*/

let numbercheck = 0
let n = 51

for (let index = 2; index < n; index++) {
  if (n % index == 0) {
    numbercheck = index
  }
}
if (numbercheck == 0) {
  console.log('O número é primo')
} else {
  console.log('O número não é primo')
}
