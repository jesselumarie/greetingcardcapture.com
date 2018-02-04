const setCopyrightYear = () => {
  console.log('here')
  const currentYear = new Date().getFullYear()
  const copyrightElement = document.getElementById('copyright')
  copyrightElement.innerHTML = `&copy; ${currentYear} Jesse Lumarie`
}
