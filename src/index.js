// Pages
const pageMain = document.querySelector('.page-main')
const pageProfile = document.querySelector('.page-profile')
const pageFav = document.querySelector('.page-fav')
const pageCreate = document.querySelector('.page-create')
const pagesAll = document.querySelectorAll('.page')

const headerMain = document.querySelector('.header-main')
const headerProfile = document.querySelector('.header-profile')
const headerCreate = document.querySelector('.header-create')
const headerAll = document.querySelectorAll('.header')

const btnProfile = document.querySelector('.btn__profile')
const btnCreate = document.querySelector('.btn__create')

const btnNavMain = document.querySelector('.btn__main')
const btnNavFav = document.querySelector('.btn__favorite')
const btnNavAll = document.querySelectorAll('.footer__nav')

btnNavMain.addEventListener('click', () => {
  showPage(pageMain)
  showHeader(headerMain)
  setActiveClass(btnNavMain)
})

btnNavFav.addEventListener('click', () => {
  showPage(pageFav)
  showHeader(headerMain)
  setActiveClass(btnNavFav)
})

btnProfile.addEventListener('click', () => {
  showPage(pageProfile)
  showHeader(headerProfile)
})

btnCreate.addEventListener('click', () => {
  showPage(pageCreate)
  showHeader(headerCreate)
})

function showPage(visiblePage) {
  visiblePage.classList.remove('hidden')
  pagesAll.forEach(e => {
    if (e !== visiblePage) {
      e.classList.add('hidden')
    }
  })
}

function showHeader(visibleHeader) {
  visibleHeader.classList.remove('hidden')
  headerAll.forEach(e => {
    if (e !== visibleHeader) {
      e.classList.add('hidden')
    }
  })
}

function setActiveClass(activeElement) {
  activeElement.classList.add('active')
  btnNavAll.forEach(e => {
    if (e !== activeElement && e.classList.contains('active')) {
      e.classList.remove('active')
    }
  })
}

// Quiz Cards
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

// Swap Dark/light-mode
// More get added as styling of the app improves
const darkmodeToggler = document.querySelector('.darkmode-switch')
const rootStyles = document.documentElement

darkmodeToggler.addEventListener('click', () => {
  toggleDarkMode()
})

function toggleDarkMode() {
  getComputedStyle(rootStyles).getPropertyValue('--color-black') === 'white' ? rootStyles.style.setProperty('--color-black', 'black') : rootStyles.style.setProperty('--color-black', 'white')
}
