export default function setupNavigation() {
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
}
