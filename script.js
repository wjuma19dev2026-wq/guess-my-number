let body = document.querySelector('body')
let messageBox = document.querySelector('.message')
let scoreBox = document.querySelector('.score')
let highscoreBox = document.querySelector('.highscore')
let number = document.querySelector('.number')
let btnCheck = document.querySelector('.btn.check')

let score = 20
let highScore = 0

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
scoreBox.textContent = score

// inputGuess.addEventListener('click', inputGuessProcess)

btnCheck.addEventListener('click', () => {
  let guess = Number(inputGuess.value)

  if (!guess) {
    messageBox.textContent = ' ⚠ Opss! esto no es un numero'
    //  FIXME: Change body background color when Not input Value
  } else if (guess === secretNumber) {
    messageBox.textContent = '🎉 Correct Number!'

    //  FIXME: Change body background color when Win
    number.style.width = '30rem'
    body.removeAttribute('class')
    body.setAttribute('class', 'bg-success')

    if (score > highScore) {
      highScore = score
      highscoreBox.textContent = highScore
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      messageBox.textContent = '📉 Too high!'
      score--
      scoreBox.textContent = score
      number.style.width = '15rem'
      body.removeAttribute('class')
      body.setAttribute('class', 'bg-dark')
    } else {
      messageBox.textContent = 'You lost the game'
      scoreBox.textContent = 0
      //  FIXME: Change body background color when Loose
      number.style.width = '15rem'
      body.removeAttribute('class')
      body.setAttribute('class', 'bg-danger')
    }
  } else if (guess < secretNumber) {
    messageBox.textContent = '📈 Too low!'
    score--
    scoreBox.textContent = score
  }
})
