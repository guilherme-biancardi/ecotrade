const button = document.querySelector('#btn-dark')

const setTheme = () => {
    const {
        classList
    } = document.querySelector('html')
 
    classList.toggle('light')
    localStorage.setItem('theme', classList.contains('light'))
}

const getTheme = () => JSON.parse(localStorage.getItem('theme'))

export {
    button,
    setTheme,
    getTheme
}