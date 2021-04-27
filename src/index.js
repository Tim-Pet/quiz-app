// Pages
const pageMain = document.querySelector('.page-main')
const pageProfile = document.querySelector('.page-profile')
const pageFav = document.querySelector('.page-fav')
// const pageCreate = document.querySelector('.page-create')
const pagesAll = document.querySelectorAll('.page')

const headerMain = document.querySelector('.header-main')
const headerProfile = document.querySelector('.header-profile')
// const headerCreate = document.querySelector('.header-create')
const headerAll = document.querySelectorAll('.header')

const btnMain = document.querySelector('.btn__main')
const btnFav = document.querySelector('.btn__favorite')
const btnProfile = document.querySelector('.btn__profile')
const btnCreate = document.querySelector('.btn__create')
const btnAll = document.querySelectorAll('.footer__nav')

btnMain.addEventListener('click', () => {
  showBox(pageMain)
  showHeader(headerMain)
  setActiveClass(btnMain)
})

btnFav.addEventListener('click', () => {
  showBox(pageFav)
  showHeader(headerMain)
  setActiveClass(btnFav)
})

btnProfile.addEventListener('click', () => {
  showBox(pageProfile)
  showHeader(headerProfile)
  showHeader(headerProfile)
})

btnCreate.addEventListener('click', () => {
  // For Testing until create page got created
  toggleDarkMode()
})

function showBox(el) {
  el.classList.remove('hidden')
  pagesAll.forEach(e => {
    if (e !== el) {
      e.classList.add('hidden')
    }
  })
}

function showHeader(el) {
  el.classList.remove('hidden')
  headerAll.forEach(e => {
    if (e !== el) {
      e.classList.add('hidden')
    }
  })
}

function setActiveClass(el) {
  el.classList.add('active')
  btnAll.forEach(e => {
    if (e !== el && e.classList.contains('active')) {
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
const r = document.documentElement
function toggleDarkMode() {
  getComputedStyle(r).getPropertyValue('--color-black') === 'white' ? r.style.setProperty('--color-black', 'black') : r.style.setProperty('--color-black', 'white')
}
