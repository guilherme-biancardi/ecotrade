import {
    button,
    setTheme,
    getTheme
} from './modules/lightMode.js'

import {createFounders} from './modules/founders.js'
import { createProducts } from './modules/products.js'

if(getTheme()) document.querySelector('html').classList.add('light')
button.addEventListener('click', setTheme)

if(document.querySelector('.slide')) createFounders()

if(document.querySelector('#product-list')) createProducts()