const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const points = (RIGHT_ANSWERS, STUDENT_ANSWERS) => {
  if (RIGHT_ANSWERS === STUDENT_ANSWERS){
    return 1;
  }
  if (STUDENT_ANSWERS === 'N.A'){
    return 0;
  }
  if (RIGHT_ANSWERS !== STUDENT_ANSWERS){
    return -0.5;
  }
}

const countPoints = (RIGHT_ANSWERS, STUDENT_ANSWERS, event) => {
  let count = 0;
  for (let i = 0; i < RIGHT_ANSWERS.length; i += 1){
    const eventReturn = event(RIGHT_ANSWERS[i], STUDENT_ANSWERS[i]);
    count += eventReturn;
  }
  return `Resultado final: ${count} pontos`;
}

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, points));