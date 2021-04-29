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

btnNavMain.addEventListener('click', navigateToHome)

btnNavFav.addEventListener('click', navigateToBookmarks)

btnProfile.addEventListener('click', navigateToProfile)

btnCreate.addEventListener('click', navigateToCreate)

function navigateToHome() {
  setPage(pageMain)
  setHeader(headerMain)
  setActiveButton(btnNavMain)
}

function navigateToBookmarks() {
  setPage(pageFav)
  setHeader(headerMain)
  setActiveButton(btnNavFav)
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
  pagesAll.forEach(e => {
    e.classList.add('hidden')
  })
  visiblePage.classList.remove('hidden')
}

function setHeader(visibleHeader) {
  headerAll.forEach(e => {
    e.classList.add('hidden')
  })
  visibleHeader.classList.remove('hidden')
}

function setActiveButton(activeElement) {
  btnNavAll.forEach(e => {
    e.classList.remove('active')
  })
  activeElement.classList.add('active')
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
const darkmodeToggler = document.querySelector('.darkmode-switch')
const rootStyles = document.documentElement

darkmodeToggler.addEventListener('click', () => {
  toggleDarkMode()
})

function toggleDarkMode() {
  getComputedStyle(rootStyles).getPropertyValue('--color-white') === '#fefefe' ? rootStyles.style.setProperty('--color-white', '#333') : rootStyles.style.setProperty('--color-white', '#fefefe')
  getComputedStyle(rootStyles).getPropertyValue('--color-primary') === '#333' ? rootStyles.style.setProperty('--color-primary', '#fefefe') : rootStyles.style.setProperty('--color-primary', '#333')
  getComputedStyle(rootStyles).getPropertyValue('--gradient-white') === 'radial-gradient(96.67% 169.17% at 0% 0%, rgba(255, 255, 255, 0.8) 60%, rgba(255, 255, 255, 0.6) 100%)'
    ? rootStyles.style.setProperty('--gradient-white', 'radial-gradient(96.67% 169.17% at 0% 0%, rgba(0, 0, 0, 0.8) 60%, rgba(0, 0, 0, 0.6) 100%)')
    : rootStyles.style.setProperty('--gradient-white', 'radial-gradient(96.67% 169.17% at 0% 0%, rgba(255, 255, 255, 0.8) 60%, rgba(255, 255, 255, 0.6) 100%)')
  getComputedStyle(rootStyles).getPropertyValue('--gradient-white-transparent') === 'radial-gradient(96.67% 169.17% at 0% 0%, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.4) 100%)'
    ? rootStyles.style.setProperty('--gradient-white-transparent', 'radial-gradient(96.67% 169.17% at 0% 0%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 100%)')
    : rootStyles.style.setProperty('--gradient-white-transparent', 'radial-gradient(96.67% 169.17% at 0% 0%, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.4) 100%)')
  getComputedStyle(rootStyles).getPropertyValue('--gradient-transparent') === 'radial-gradient(96.67% 169.17% at 0% 0%, rgba(255, 255, 255, 0.42) 0%, rgba(255, 255, 255, 0.06) 100%)'
    ? rootStyles.style.setProperty('--gradient-transparent', 'radial-gradient(96.67% 169.17% at 0% 0%, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.06) 100%)')
    : rootStyles.style.setProperty('--gradient-transparent', 'radial-gradient(96.67% 169.17% at 0% 0%, rgba(255, 255, 255, 0.42) 0%, rgba(255, 255, 255, 0.06) 100%)')
}
