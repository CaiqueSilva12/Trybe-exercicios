const administradorDotempo = document.getElementById('header-container')
administradorDotempo.style.backgroundColor = 'green'

const urgenteEImportante = document.getElementsByClassName('emergency-tasks')[0]
urgenteEImportante.style.backgroundColor = 'pink'

const naoUrgente = document.getElementsByClassName('no-emergency-tasks')[0]
naoUrgente.style.backgroundColor = 'yellow'

const barrasUrgentes = document.querySelectorAll('.emergency-tasks h3')
for (let index = 0; index < barrasUrgentes.length; index += 1)
  barrasUrgentes[index].style.backgroundColor = 'purple'

const barrasNaoUrgentes = document.querySelectorAll('.no-emergency-tasks h3')
for (let index = 0; index < barrasNaoUrgentes.length; index += 1)
  barrasNaoUrgentes[index].style.backgroundColor = 'black'

const footer = document.getElementById('footer-container')
footer.style.backgroundColor = 'darkgreen'
