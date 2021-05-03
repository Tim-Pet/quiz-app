import getAllElements from './utils/getAllElements'
import getElement from './utils/getElement'

export default function setupBookmarks() {
  const quizCards = getAllElements('.quiz-card')

  quizCards.forEach(quizCard => {
    const bookmark = getElement('.quiz-card__bookmark', quizCard)
    bookmark.addEventListener('click', () => {
      quizCard.classList.toggle('bookmarked')
    })
  })
}
