const configMenu = document.querySelector('.config-menu'),
    btnConfig = document.querySelector('#btn-config')

btnConfig.addEventListener('click', () => {
    btnConfig.classList.toggle('selected')
    configMenu.classList.toggle('open')
})

const btnDark = document.querySelector('#btn-dark')

btnDark.addEventListener('click', () => {
    btnDark.classList.toggle('mdi-toggle-switch-off')
    document.body.classList.toggle('light')
})