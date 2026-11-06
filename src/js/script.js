
const setCopyrightYear = () => {
  const currentYear = new Date().getFullYear()
  const copyrightElement = document.getElementById('copyright')
  copyrightElement.innerHTML = `&copy; ${currentYear} Jesse Lumarie`
}

if ( document.readyState !== 'loading') {
  setCopyrightYear()
} else {
  setCopyrightYear()
  document.addEventListener("DOMContentLoaded", setCopyrightYear);
}

const demo = document.querySelector('.app_demo')
if (demo && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  demo.autoplay = false
  demo.pause()
}
