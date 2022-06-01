function handleSubmit(event) {
  event.preventDefault()
}

window.onload = function () {
  const submitBtn = document.querySelector('#submit')
  submitBtn.addEventListener('click', handleSubmit)
}

function clearAll() {
  const allInput = document.querySelectorAll('input')
  const textArea = document.querySelector('textArea')
  for (let i = 0; i < allInput; i += 1) {
    const index = allInput[i]
    index.value = ''
    index.checked = false
  }
  textArea.value = ''
}

window.onload = function () {
  const clear = document.querySelector('#reset')
  clear.addEventListener('click', clearAll)
}

function pictureCheck() {
  const pictures = document.querySelector('#pictures')
  const submit = document.querySelector('#submit')
  submit.disabled = !pictures.checked
}

window.onload = function () {
  const pictures = document.querySelector('#pictures')
  pictures.addEventListener('change', pictureCheck)
}
