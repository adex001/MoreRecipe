const initInput = () => {
  let inputFields = document.querySelectorAll('.input > input, .textarea > textarea')
  if (inputFields.length === 0) return
  for (inputField of inputFields) {
    if (inputField.value) inputField.focus()
    inputField.addEventListener('focus', function () {
      this.parentNode.classList.add('active')
    })
    inputField.addEventListener('blur', function () {
      if (!this.value) this.parentNode.classList.remove('active')
    })
  }
}
initInput();