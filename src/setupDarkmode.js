export default function setupDarkmode() {
  const darkmodeToggler = document.querySelector('.darkmode-switch')
  const rootStyles = document.documentElement

  const white = ' #fefefe'
  const darkmodeWhite = ' #333'
  const primary = ' #333'
  const darkmodePrimary = ' #fefefe'
  const gradientWhite = ' radial-gradient(96.67% 169.17% at 0% 0%, rgba(255, 255, 255, 0.8) 60%, rgba(255, 255, 255, 0.6) 100%)'
  const darkmodeGradientWhite = ' radial-gradient(96.67% 169.17% at 0% 0%, rgba(0, 0, 0, 0.8) 60%, rgba(0, 0, 0, 0.6) 100%)'
  const gradientWhiteTransparent = ' radial-gradient(96.67% 169.17% at 0% 0%, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.4) 100%))'
  const darkmodeGradientWhiteTransparent = ' radial-gradient(96.67% 169.17% at 0% 0%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 100%)'
  const gradientTransparent = ' radial-gradient(96.67% 169.17% at 0% 0%, rgba(255, 255, 255, 0.42) 0%, rgba(255, 255, 255, 0.06) 100%)'
  const darkmodeGradientTransparent = ' radial-gradient(96.67% 169.17% at 0% 0%, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.06) 100%)'

  darkmodeToggler.addEventListener('click', () => {
    toggleDarkMode()
  })

  function toggleDarkMode() {
    const currentWhite = getComputedStyle(rootStyles).getPropertyValue('--color-white')
    const currentPrimary = getComputedStyle(rootStyles).getPropertyValue('--color-primary')
    const currentGradientWhite = getComputedStyle(rootStyles).getPropertyValue('--gradient-white')
    const currentGradientWhiteTransparent = getComputedStyle(rootStyles).getPropertyValue('--gradient-white-transparent')
    const currentGradientTransparent = getComputedStyle(rootStyles).getPropertyValue('--gradient-transparent')

    currentWhite === white ? rootStyles.style.setProperty('--color-white', darkmodeWhite) : rootStyles.style.setProperty('--color-white', white)
    currentPrimary === primary ? rootStyles.style.setProperty('--color-primary', darkmodePrimary) : rootStyles.style.setProperty('--color-primary', primary)
    currentGradientWhite === gradientWhite ? rootStyles.style.setProperty('--gradient-white', darkmodeGradientWhite) : rootStyles.style.setProperty('--gradient-white', gradientWhite)
    currentGradientWhiteTransparent === gradientWhiteTransparent ? rootStyles.style.setProperty('--gradient-white-transparent', darkmodeGradientWhiteTransparent) : rootStyles.style.setProperty('--gradient-white-transparent', gradientWhiteTransparent)
    currentGradientTransparent === gradientTransparent ? rootStyles.style.setProperty('--gradient-transparent', darkmodeGradientTransparent) : rootStyles.style.setProperty('--gradient-transparent', gradientTransparent)
  }
}
