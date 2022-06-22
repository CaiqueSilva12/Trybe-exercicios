const checkresult = (myNumber, numberRandom) => myNumber === numberRandom;

const drawResult = (myNumber, callback) => {
  const randomNumber = Math.floor((Math.random() * 5)) + 1;
  return callback(myNumber, randomNumber) ? `Parabéns você ganhou ${randomNumber}` : `Tente novamente ${randomNumber}`

}

console.log(drawResult(2, checkresult));