export default function setupQuizcardAnswer() {
  const quizBtnOne = document.querySelector('.quiz-card__btn--one')
  const quizBtnTwo = document.querySelector('.quiz-card__btn--two')
  const quizBtnThree = document.querySelector('.quiz-card__btn--three')

  const quizAnswerOne = document.querySelector('.quiz-card__answer--one')
  const quizAnswerTwo = document.querySelector('.quiz-card__answer--two')
  const quizAnswerThree = document.querySelector('.quiz-card__answer--three')

  quizBtnOne.addEventListener('click', () => {
    toggleAnswer(quizAnswerOne)
  })
  quizBtnTwo.addEventListener('click', () => {
    toggleAnswer(quizAnswerTwo)
  })
  quizBtnThree.addEventListener('click', () => {
    toggleAnswer(quizAnswerThree)
  })

  function toggleAnswer(el) {
    el.classList.toggle('hidden')
  }
}
