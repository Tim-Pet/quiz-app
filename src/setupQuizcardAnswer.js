import getAllElements from './utils/getAllElements'
import getElement from './utils/getElement'

export default function setupQuizcardAnswer() {
  const quizCards = getAllElements('.quiz-card')
  const btnTextShow = 'Show Answer'
  const btnTextHide = 'Hide Answer'

  quizCards.forEach(quizCard => {
    const answerBtn = getElement('.quiz-card__btn', quizCard)
    const quizCardAnswer = getElement('.quiz-card__answer', quizCard)

    answerBtn.addEventListener('click', () => {
      quizCardAnswer.classList.toggle('hidden')

      if (answerBtn.innerText === btnTextShow) {
        answerBtn.innerText = btnTextHide
      } else {
        answerBtn.innerText = btnTextShow
      }
    })
  })
}
