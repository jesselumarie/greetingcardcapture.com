
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
