{
  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
  let soma = 0
  let media = 0
  let maiorValor = 0
  let numerosImpares = 0
  let menorValor = numbers[0]
  for (index = 0; index < numbers.length; index++) {
    soma = soma + numbers[index]
    media = soma / 10
    if (numbers[index] > maiorValor) {
      maiorValor = numbers[index]
    }
    if (numbers[index] < menorValor) {
      menorValor = numbers[index]
    }
    if (numbers[index] % 2 != 0) {
      numerosImpares = numerosImpares + 1
    }
  }
  if (numerosImpares == 0) {
    console.log('nenhum valor ímpar encontrado')
  } else {
    console.log(`A quantidade de números ímpares é: ${numerosImpares}`)
  }
  if (media > 20) {
    console.log('valor maior que 20')
  } else {
    console.log('valor menor ou igual a 20')
  }
  console.log(`A soma dos valores é: ${soma}`)
  console.log(`A média dos valores é: ${media}`)
  console.log(`O maior valor é: ${maiorValor}`)
  console.log(`O menor valor é: ${menorValor}`)
}
//Exercício 8//
{
  let array = []
  for (let index = 1; index < 25; index++) {
    array.push(index)
  }
  console.log(`Array com números até 25: ${array}`)
  for (let index = 0; index < array.length; index++) {
    console.log(array[index] / 2)
  }
}
