/*1*/

function ehPalindromo(palavra) {
  let palindromo = ''
  for (let index = palavra.length - 1; index >= 0; index--) {
    palindromo = palindromo + palavra[index]
  }
  if (palavra === palindromo) {
    return true
  } else {
    return false
  }
}
console.log(ehPalindromo('oxi'))

/*2*/

function maiorValor(numeros){
let maiorValor = 0;
for(let index = 0; index < numeros.length; index ++){
  if(numeros[index] > )
}
}