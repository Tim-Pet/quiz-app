export default function setupDarkmode() {
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
}
