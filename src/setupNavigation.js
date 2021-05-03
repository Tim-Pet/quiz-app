import getAllElements from './utils/getAllElements'
import getElement from './utils/getElement'

export default function setupNavigation() {
  const pages = getAllElements('[data-page]')
  const buttons = getAllElements('[data-nav]')
  const header = getElement('[data-header]')

  buttons.forEach(setupButton)

  function setupButton(button) {
    const buttonName = button.dataset.nav
    const headerText = button.dataset.headerText

    button.addEventListener('click', () => {
      setHeaderName(headerText)
      setActiveButton(buttonName)
      setActivePage(buttonName)
    })
  }

  function setHeaderName(headerText) {
    header.innerText = headerText
  }

  function setActiveButton(buttonName) {
    buttons.forEach(button => {
      const currentButtonName = button.dataset.nav
      button.classList.toggle('active', currentButtonName === buttonName)
    })
  }

  function setActivePage(buttonName) {
    pages.forEach(page => {
      const pageName = page.dataset.page
      page.classList.toggle('hidden', pageName !== buttonName)
    })
  }
}
