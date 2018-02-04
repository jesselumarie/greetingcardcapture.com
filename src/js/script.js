const setCopyrightYear = () => {
  const currentYear = new Date().getFullYear()
  const copyrightElement = document.getElementById('copyright')
  copyrightElement.innerHTML = `&copy; ${currentYear} Jesse Lumarie`
}
