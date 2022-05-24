import {
    getJSON
} from './json.js'

const list = document.querySelector('#product-list')

const createProducts = async () => {
    const json = await getJSON('../../json/products.json')

    json.default.forEach(({
        name,
        description,
        price,
        image
    }) => {
        list.innerHTML += `<li class="product flex">
        <img src="${image}">
        <div class="flex">
            <h2>${name}</h2>
            <p>${description}</p>
        </div>
        <div class="product-text flex">
            <div>
                <span>${price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL' })}</span>
                <p>(sem desconto de material)</p>
            </div>
            <button class="flex"><i class="mdi mdi-cart"></i></button>
        </div>
    </li>`
    })
}

export {
    createProducts
}