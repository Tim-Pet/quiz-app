import getAllElements from './utils/getAllElements'
// import getElement from './utils/getElement'

export default function setupNavigation() {
  const pages = getAllElements('[data-page]')
  const buttons = getAllElements('[data-nav]')

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const buttonName = button.dataset.nav

      buttons.forEach(buttonTwo => {
        const buttonTwoName = buttonTwo.dataset.nav
        buttonTwo.classList.toggle('active', buttonTwoName === buttonName)
      })

      pages.forEach(page => {
        const pageName = page.dataset.page
        page.classList.toggle('hidden', pageName !== buttonName)
      })
    })
  })
}
