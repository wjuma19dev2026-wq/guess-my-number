document.addEventListener('DOMContentLoaded', function () {
  let messageBox = document.querySelector('.message')
  let typedNumber = document.querySelector('.number')
  let score = document.querySelector('.score')
  /**
   * Input para ingresar el valor numerico a validar
   * @type { HTMLInputElement } inputGuess - Input el cual ingresa el valor del numero a validar
   */
  let inputGuess = document.querySelector('.guess')

  // VARIABLES
  let randomNumber = Math.trunc(Math.random() * 20) + 1
  console.log(randomNumber)
  // messageBox.innerHTML = `🎉 Corret number`
  // typedNumber.textContent = 13
  // score.textContent = '10'
  // inputGuess.value = 13

  inputGuess.addEventListener('click', getGuessType)
})

/**
 * Obtener el valor del guest mediante el input value
 * @param  { Event } event Event es una interfaz en TypeScript que representa un evento del DOM. Es el tipo que se utiliza para definir el parámetro de los manejadores de eventos en JavaScript y TypeScript.
 */
function getGuessType(event) {
  let guess = Number(event.target.value)
  let message = document.querySelector('.message')

  if (!guess) {
    message.classList.add('text-danger')
    message.textContent = ' ⚠ Opss! esto no es un numero'
    return
  }

  console.log('Tipo de dato del valor es: ', typeof guess)
  console.log(guess)
}
