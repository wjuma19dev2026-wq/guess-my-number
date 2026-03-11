let defaultScore = 20

let messageBox = document.querySelector('.message')
let scoreBox = document.querySelector('.score')
let number = document.querySelector('.number')
let btnCheck = document.querySelector('.btn.check')

/**
 * Input para ingresar el valor numerico a validar
 * @type { HTMLInputElement } inputGuess - Input el cual ingresa el valor del numero a validar
 */
let inputGuess = document.querySelector('.guess')

// VARIABLES
let secretNumber = Math.trunc(Math.random() * 20) + 1

// messageBox.innerHTML = `🎉 Corret number`
number.textContent = secretNumber
// scoreBox.textContent = '10'
// inputGuess.value = 13
scoreBox.textContent = defaultScore

// inputGuess.addEventListener('click', inputGuessProcess)

btnCheck.addEventListener('click', () => {
  let guess = Number(inputGuess.value)

  if (!guess) {
    messageBox.textContent = ' ⚠ Opss! esto no es un numero'
    return
  } else if (guess === secretNumber) {
    messageBox.textContent = '🎉 Correct Number!'
  } else if (guess > secretNumber) {
    if (defaultScore > 1) {
      messageBox.textContent = '📉 Too high!'
      defaultScore--
      scoreBox.textContent = defaultScore
      return
    } else {
      messageBox.textContent = 'You lost the game'
      scoreBox.textContent = 0
    }
  } else if (guess < secretNumber) {
    messageBox.textContent = '📈 Too low!'
    defaultScore--
    scoreBox.textContent = defaultScore
  }
})
