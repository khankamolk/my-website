const body = document.body
const btnTheme = document.querySelector('.fa-moon')

const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass)
  btnTheme.classList.add(btnClass)
}

const getBodyTheme = localStorage.getItem('portfolio-theme')
const getBtnTheme = localStorage.getItem('portfolio-btn-theme')

addThemeClass(getBodyTheme, getBtnTheme)

const isDark = () => body.classList.contains('dark')

const setTheme = (bodyClass, btnClass) => {
  console.log("Theme changed")
  console.log(localStorage.getItem('portfolio-theme'))
	body.classList.remove(localStorage.getItem('portfolio-theme'))
	btnTheme.classList.remove(localStorage.getItem('portfolio-btn-theme'))

  addThemeClass(bodyClass, btnClass)

	localStorage.setItem('portfolio-theme', bodyClass)
	localStorage.setItem('portfolio-btn-theme', btnClass)
}

const toggleTheme = () =>
	isDark() ? setTheme('light', 'fa-moon') : setTheme('dark', 'fa-sun')

btnTheme.addEventListener('click', toggleTheme)

// Scroll 
const scrollUp = () => {
	const btnScrollTop = document.querySelector('.scroll-top')

	if (
		body.scrollTop > 500 ||
		document.documentElement.scrollTop > 500
	) {
		btnScrollTop.style.display = 'block'
	} else {
		btnScrollTop.style.display = 'none'
	}
}

document.addEventListener('scroll', scrollUp)