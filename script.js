let body = document.querySelector('body')
let messageBox = document.querySelector('.message')
let scoreBox = document.querySelector('.score')
let highscoreBox = document.querySelector('.highscore')
let number = document.querySelector('.number')
let btnCheck = document.querySelector('.btn.check')

let score = 20
let highScore = 0
let inputGuess = document.querySelector('.guess')
let secretNumber = Math.trunc(Math.random() * 20) + 1

scoreBox.textContent = score

btnCheck.addEventListener('click', () => {
  let guess = Number(inputGuess.value)

  if (!guess) {
    messageBox.textContent = ' ⚠ Opss! esto no es un numero'
    return
  } else if (guess === secretNumber) {
    messageBox.textContent = '🎉 Correct Number!'
    number.textContent = secretNumber
    number.style.width = '30rem'
    body.removeAttribute('class')
    body.setAttribute('class', 'bg-success')

    if (score > highScore) {
      highScore = score
      highscoreBox.textContent = highScore
    }
  } else if (guess !== secretNumber) {
    if (score <= 0) {
      messageBox.textContent = 'You lost the game'
      scoreBox.textContent = 0
      number.style.width = '15rem'
      body.removeAttribute('class')
      body.setAttribute('class', 'bg-danger')
      return
    }
    score--
    messageBox.textContent = guess > secretNumber ? '📉 To high' : '📈 To Low'
    body.removeAttribute('class')
    scoreBox.textContent = score
  }
})

document.querySelector('.again').addEventListener('click', () => {
  score = 20
  secretNumber = Math.trunc(Math.random() * 20) + 1
  messageBox.textContent = 'Start guessing ...'

  scoreBox.textContent = score
  number.textContent = '?'
  inputGuess.value = ''
  number.style.width = '15rem'
  body.removeAttribute('class')
  body.setAttribute('class', 'bg-dark')
})
