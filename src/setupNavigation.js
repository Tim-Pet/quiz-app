import getAllElements from './utils/getAllElements'
import getElement from './utils/getElement'

export default function setupNavigation() {
  const pageMain = getElement('.page-main')
  const pageProfile = getElement('.page-profile')
  const pageCreate = getElement('.page-create')
  const pagesAll = getAllElements('.page')

  const headerMain = getElement('.header-main')
  const headerProfile = getElement('.header-profile')
  const headerCreate = getElement('.header-create')
  const headerAll = getAllElements('.header')

  const btnProfile = getElement('.btn__profile')
  const btnCreate = getElement('.btn__create')

  const btnNavMain = getElement('.btn__main')
  const btnNavFav = getElement('.btn__favorite')
  const btnNavAll = getAllElements('.footer__nav')

  const quizCards = getAllElements('.quiz-card')

  btnNavMain.addEventListener('click', navigateToHome)
  btnNavFav.addEventListener('click', navigateToBookmarks)
  btnProfile.addEventListener('click', navigateToProfile)
  btnCreate.addEventListener('click', navigateToCreate)

  function navigateToHome() {
    setPage(pageMain)
    setHeader(headerMain)
    setActiveButton(btnNavMain)
    showAllQuizCards()
  }

  function navigateToBookmarks() {
    setPage(pageMain)
    setHeader(headerMain)
    setActiveButton(btnNavFav)
    showBookmarkedQuizCards()
  }

  function navigateToProfile() {
    setPage(pageProfile)
    setHeader(headerProfile)
  }

  function navigateToCreate() {
    setPage(pageCreate)
    setHeader(headerCreate)
  }

  function setPage(visiblePage) {
    pagesAll.forEach(page => {
      page.classList.add('hidden')
    })
    visiblePage.classList.remove('hidden')
  }

  function setHeader(visibleHeader) {
    headerAll.forEach(header => {
      header.classList.add('hidden')
    })
    visibleHeader.classList.remove('hidden')
  }

  function setActiveButton(activeElement) {
    btnNavAll.forEach(button => {
      button.classList.remove('active')
    })
    activeElement.classList.add('active')
  }
  function showBookmarkedQuizCards() {
    quizCards.forEach(quizCard => {
      if (!quizCard.classList.contains('bookmarked')) {
        quizCard.classList.add('hidden')
      }
    })
  }

  function showAllQuizCards() {
    quizCards.forEach(quizCard => {
      quizCard.classList.remove('hidden')
    })
  }
}
